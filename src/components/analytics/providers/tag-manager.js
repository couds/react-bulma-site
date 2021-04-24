import { useEffect } from 'react';

const sendEvent = ({ category, action, label, ...props } = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    category,
    action,
    label,
    event: 'ga.event',
    ...props,
  });
};

export const gtm = {
  sendEvent,
};

const createTagScript = (id, src) => {
  if (!document.querySelector(`script#${id}`)) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.async = true;
    script.type = 'text/javascript';
    document.head.append(script);
    return () => {
      return document.head.removeChild(script);
    };
  }
  return undefined;
};

const useGoogleTagManager = (config) => {
  useEffect(() => {
    if (!config.enabled) {
      return undefined;
    }

    window.dataLayer = window.dataLayer || [];

    gtm.sendEvent({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
    });

    return createTagScript(
      'gtag-script',
      `//www.googletagmanager.com/gtm.js?id=${config.id}`,
    );
  }, [config]);

  return gtm;
};

export default useGoogleTagManager;
