import React from 'react';
import { Columns, Hero, Content, Container } from 'react-bulma-components';
import classnames from 'classnames';

import './feature.scss';
import Section from '../section';

const Feature = ({ image, children, position, ...props }) => {
  return (
    <Hero
      gradient
      className={classnames('main-feature', {
        [`is-${position}`]: position,
      })}
      renderAs={Section}
      {...props}
    >
      <Hero.Body>
        <Container>
          <Columns centered>
            <Columns.Column narrow>
              <div className="feature-image">
                <img src={image} alt="feature" />
              </div>
            </Columns.Column>
            <Columns.Column desktop={{ size: 6 }}>
              <Content>{children}</Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

Feature.Square = ({ style, size }) => {
  return (
    <div
      style={style}
      className={classnames('main-feature__square', {
        [`is-${size}`]: size,
      })}
    />
  );
};

export default Feature;
