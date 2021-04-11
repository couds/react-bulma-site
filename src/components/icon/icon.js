import React from 'react';
import { Icon as IconContainer } from 'react-bulma-components';

import './icon.scss';
// eslint-disable-next-line import/no-unresolved
import './fonts/icons.css';

const Icon = ({ name, ...props }) => {
  return (
    <IconContainer {...props}>
      <i className={`rbc-icon react-bulma-icons-${name}`} />
    </IconContainer>
  );
};

export default Icon;
