
# 🌿 Agroecology InfoHub – Interactive Frontend Prototype

## 📘 Overview

This project is built using **React.js**, designed as a high-fidelity interactive prototype for an agroecological and organic agriculture (AE/EOA) information hub. The primary goal is to simulate an informative and engaging web platform for educating and empowering consumers across Africa.


## 🛠️ Tech Stack

- **React.js** (Functional components & hooks)
- **React Router**
- **React-i18next** (Multilingual support)
- **Tailwind CSS** (Styling and responsive design)
- **Leaflet.js** (Static interactive maps)
- **JSON / Local mock API** (For simulating dynamic content)


## 🚀 Features Implemented

### 1. 🏠 Homepage Layout
- Responsive and visually engaging homepage.
- Includes:
  - Hero section
  - Navigation bar
  - Quick links to **Products**, **Blog**, **Map**, and **FAQs**.

### 2. 🛒 Product Directory Page
- Dynamic listing of agroecological products.
- Features:
  - Name, certification badge
  - Nutritional benefit tags
  - Image and category
- Sorting and filtering capabilities (e.g., by certification, type).
- Fully responsive for mobile and tablets.

### 3. 🗺️ Interactive Map Page (Mocked)
- Static interactive map integrated using **Leaflet**.
- Displays organic market outlets as pins based on mock JSON data.

### 4. ❓ FAQs Page
- Accordion-style expandable/collapsible FAQ section.
- Data sourced from a local JSON file (or mock API).

### 5. 📰 Blog Page
- Blog listing from simulated API or JSON source.
- Each post includes:
  - Title, image
  - Content preview
  - Relevant tags

### 6. 🌐 Multilingual Support
- Language toggle switch between:
  - **English**
  - **French** 
- Implemented using **react-i18next** for seamless translation.

## ✨ Other Features

- 🌗 **Dark/Light Mode Toggle**  
- ⚛️ **TailwindCSS** for rapid styling and utility-first responsive design

---

## 📦 Project Setup

### Prerequisites
- Node.js ≥ v20.5.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/wycliffe-kip/agroecology-infohub.git
cd agroecology-infohub

# Install dependencies
npm install
# or
yarn install

## run the development server:
npm run dev

- Open http://localhost:3000 with your browser to see the result.

###📁 Folder Structure
src/
├─ app/
│  ├─ blog/
│  │  ├─ [id]/
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ BlogCard.tsx
│  │  ├─ FAQItem.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ LanguageProvider.tsx
│  │  ├─ LanguageSwitcher.tsx
│  │  ├─ LoginForm.tsx
│  │  ├─ MapView.tsx
│  │  ├─ NavigationBar.tsx
│  │  ├─ ProductCard.tsx
│  │  ├─ QuickLinks.tsx
│  │  ├─ RegisterForm.tsx
│  │  ├─ ThemeProvider.tsx
│  │  └─ TopSection.tsx
│  ├─ faqs/
│  │  └─ page.tsx
│  ├─ map/
│  │  └─ page.tsx
│  ├─ products/
│  │  ├─ [id]/
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ favicon.ico.
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ not-found.tsx
│  └─ page.tsx
├─ data/
│  ├─ blog.json
│  ├─ faqs.json
│  ├─ markets.json
│  └─ products.json
├─ i18n/
│  ├─ locales/
│  │  ├─ en.json
│  │  └─ fr.json
│  └─ index.ts
└─ types/
   └─ Product.ts

## 📚 Notes
All API-like data is mocked for this prototype (e.g., JSON files or simulated APIs).

Responsive behavior and accessibility considerations were prioritized.

TailwindCSS was used to ensure consistency and maintainability in styles.