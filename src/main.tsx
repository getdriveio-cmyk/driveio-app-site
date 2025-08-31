import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Conditional analytics import with error handling
const AnalyticsWrapper = () => {
  const [AnalyticsComponent, setAnalyticsComponent] = React.useState<React.ComponentType | null>(null);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Only import analytics in production
    if (import.meta.env.PROD && !hasError) {
      import('@vercel/analytics/react')
        .then(({ Analytics }) => {
          setAnalyticsComponent(() => Analytics);
        })
        .catch((error) => {
          console.warn('Analytics failed to load:', error);
          setHasError(true);
        });
    }
  }, [hasError]);

  if (!AnalyticsComponent || hasError) {
    return null;
  }

  return <AnalyticsComponent />;
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
