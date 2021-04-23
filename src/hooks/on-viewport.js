import { useEffect, useState } from 'react';

const onViewport = (ref, options) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible((v) => {
          return v || entry.isIntersecting;
        });
      });
    }, options);
    observer.observe(ref.current);
  }, [ref.current, options]);

  return visible;
};

export default onViewport;
