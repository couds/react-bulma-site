import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bulma-components';
import Highlight from 'components/highlight';
import { Trans } from '@lingui/macro';

const CodeView = ({ reactCode, bulmaCode }) => {
  const [codeView, setCodeView] = useState('react');

  return (
    <>
      <Button
        size="small"
        style={{ position: 'absolute', right: 0, margin: 10 }}
        onClick={() => {
          return setCodeView(codeView === 'react' ? 'bulma' : 'react');
        }}
      >
        {codeView === 'react' ? (
          <Trans>Toggle to html</Trans>
        ) : (
          <Trans>Toggle to React</Trans>
        )}
      </Button>
      <Highlight language="jsx">
        {(codeView === 'react' ? reactCode : bulmaCode).trim()}
      </Highlight>
    </>
  );
};

CodeView.propTypes = {
  reactCode: PropTypes.string,
  bulmaCode: PropTypes.string,
};

export default CodeView;
