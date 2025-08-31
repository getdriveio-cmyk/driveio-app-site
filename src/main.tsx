import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import App from './App.tsx'
import './index.css'

// Error boundary for analytics
const AnalyticsWrapper = () => {
  try {
    return <Analytics />;
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
