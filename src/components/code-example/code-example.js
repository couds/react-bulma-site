import PropTypes from 'prop-types';
import React from 'react';
import { Block, Columns } from 'react-bulma-components';

import CodeView from './code-view';

import './code-example.scss';

const CodeExample = ({
  alignment,
  children,
  reactCode,
  bulmaCode,
  style,
  size,
  codeMaxHeight,
}) => {
  return (
    <div
      className="code-example"
      style={{ overflow: 'hidden', position: 'relative', ...style }}
    >
      {alignment === 'horizontal' ? (
        <Columns gap={0}>
          <Columns.Column size={size} className="is-vertically-centered">
            {children}
          </Columns.Column>
          <Columns.Column
            className="code"
            size={12 - size}
            style={{
              maxHeight: codeMaxHeight,
              overflowY: 'auto',
              paddingBottom: 0,
            }}
          >
            <CodeView reactCode={reactCode} bulmaCode={bulmaCode} />
          </Columns.Column>
        </Columns>
      ) : (
        <>
          <Block>{children}</Block>
          <Block>
            <CodeView reactCode={reactCode} bulmaCode={bulmaCode} />
          </Block>
        </>
      )}
    </div>
  );
};

CodeExample.propTypes = {
  alignment: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.node,
  reactCode: PropTypes.string,
  bulmaCode: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.number,
  codeMaxHeight: PropTypes.number,
};

CodeExample.defaultProps = {
  size: 6,
  reactCode: '',
  bulmaCode: '',
};

export default CodeExample;
