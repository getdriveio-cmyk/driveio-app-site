import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Conditional analytics import with error handling
const AnalyticsWrapper = () => {
  try {
    // Only import analytics in production
    if (import.meta.env.PROD) {
      const { Analytics } = require('@vercel/analytics/react');
      return <Analytics />;
    }
    return null;
  } catch (error) {
    console.warn('Analytics failed to load:', error);
    return null;
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <AnalyticsWrapper />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
