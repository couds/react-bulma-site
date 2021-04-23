import React, { useRef } from 'react';
import classnames from 'classnames';
import { Element } from 'react-bulma-components';
import onViewport from 'hooks/on-viewport';

import './section.scss';

const Section = ({ className, domRef, ...props }) => {
  const ref = useRef(domRef);
  const isOnViewport = onViewport(ref, { threshold: 0.25 });
  return (
    <Element
      className={classnames('animated-section', className, {
        'on-screen': isOnViewport,
      })}
      domRef={ref}
      {...props}
    />
  );
};

export default Section;
