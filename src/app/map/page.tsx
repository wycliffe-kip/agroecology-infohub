// src/app/map/page.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { outlets } from "@/data/outlets";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix Leaflet's default icon issues in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapPage() {
  return (
    <main className="pt-24 px-6">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Organic Markets Map</h1>
      <div className="h-[500px] w-full">
        <MapContainer center={[-1.2921, 36.8219]} zoom={5} scrollWheelZoom={true} className="h-full w-full z-0">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {outlets.map((outlet, idx) => (
            <Marker key={idx} position={[outlet.lat, outlet.lng]}>
              <Popup>
                <strong>{outlet.name}</strong>
                <br />
                {outlet.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}
