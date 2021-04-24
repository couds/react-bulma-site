import React, { useContext } from 'react';
import useGoogleTagManager from './providers/tag-manager';

const commonInterface = {
  sendEvent: ({ category, action, label, ...props }) => {
    console.log('No GA enabled', props);
  },
};

const AnalyticsContext = React.createContext({ gtm: commonInterface });

const Analytics = ({ children }) => {
  const gtm = useGoogleTagManager({ id: 'GTM-THNCJCC', enabled: true });
  return (
    <AnalyticsContext.Provider value={{ gtm }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  return useContext(AnalyticsContext);
};

export default Analytics;
