'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markets from '@/data/markets.json';

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.jpeg',
  iconUrl: '/leaflet/marker-icon.jpeg',
  shadowUrl: '/leaflet/marker-shadow.jpeg',
});

const MapView = () => {
  return (
    <div className="h-[500px] w-full rounded shadow overflow-hidden z-0">
      <MapContainer
        center={[-1.2921, 36.8219]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markets.map((market) => (
          <Marker
            key={market.id}
            position={[market.latitude, market.longitude]}
          >
            <Popup>
              <strong>{market.name}</strong>
              <br />
              {market.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
