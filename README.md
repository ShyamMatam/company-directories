## Company Directory - Frontend Application
A modern React-based frontend application that displays company data with advanced filtering, sorting, and pagination features. Built with React, Redux Toolkit, and Tailwind CSS.

## 🚀 Features
## Core Features
Responsive Design: Mobile-first responsive UI that works on all screen sizes
Company Cards: Clean card layout displaying company information
Advanced Filtering: Filter companies by name, location, and industry
Real-time Search: Instant search functionality by company name
Sorting: Sort companies alphabetically by name (A-Z or Z-A)
Pagination: Navigate through large datasets with customizable items per page
Loading States: Smooth loading animations and error handling
Dark Theme: Modern dark theme with blue accent colors
## Technical Features
Redux State Management: Centralized state management with Redux Toolkit
API Integration: Axios-based API service for data fetching
Component Architecture: Well-organized component structure
Performance Optimized: Efficient filtering and pagination logic
## 🛠️ Tech Stack
Frontend Framework: React 19.1.1
Build Tool: Vite 7.1.7
State Management: Redux Toolkit + React Redux
HTTP Client: Axios
Styling: Tailwind CSS 4.1.14
Development: ESLint for code quality

## Project Structure
<img width="805" height="366" alt="image" src="https://github.com/user-attachments/assets/508605c8-88e9-4ef1-8bbe-04b06df82151" />

## Getting Started
-> Node.js (v16 or higher)
-> npm or yarn

## Installation
Clone the repository

git clone <repository-url>
cd company-directory-list-app
Install dependencies

npm install
Configure API endpoint Update the API endpoint in src/api.js:

const API_BASE_URL = 'https://your-api-endpoint.com';
Start development server

npm run dev
Open in browser Navigate to http://localhost:5173

## 📊 API Data Format
The application expects company data in the following format:

{
  "id": "unique-id",
  "name": "Company Name",
  "industry": "Technology",
  "location": {
    "city": "New York",
    "country": "United States"
  },
  "employees": 1500,
  "is_public": true
}
##  Key Features Implementation
Filtering System
Search: Real-time search by company name
Location Filter: Dropdown with all available locations
Industry Filter: Dropdown with all available industries
Clear Filters: Reset all filters with one click
Pagination
Items per page: 6, 9, 12, or 18 companies per page
Smart navigation: Previous/Next buttons with disabled states
Page numbers: Shows up to 5 page numbers with smart ellipsis
Results counter: Shows current items and total count
Sorting
Alphabetical sorting: Sort by company name A-Z or Z-A
Visual indicators: Arrow symbols show current sort direction
Persistent state: Sort preferences maintained across filters
## 🎨 UI/UX Features
Dark Theme: Professional dark gray color scheme with blue accents
Hover Effects: Smooth transitions and hover states
Loading Animation: Spinning loader during data fetch
Error Handling: User-friendly error messages
Responsive Grid: Adapts from 1 column (mobile) to 3 columns (desktop)
Form Styling: Consistent styling across all form elements
## 🔧 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint
## 🚀 Deployment
Build the project

npm run build
Deploy the dist folder to your hosting platform

## 🤝 Contributing
Fork the repository
Create a feature branch
Make your changes
Run linting and tests
Submit a pull request
## 📝 Assignment Requirements Fulfilled
✅ Responsive UI: Mobile-first design with React.js
✅ Company Display: Card layout with all company information
✅ Filter Controls: Search, location, and industry filters
✅ User Experience: Loading states, error handling, smooth interactions
✅ State Management: Redux Toolkit for centralized state
✅ API Integration: Axios for HTTP requests
✅ Pagination: Full pagination with customizable items per page
✅ Sorting: Sort by company name with direction indicators
✅ UI Library: Tailwind CSS for modern styling
