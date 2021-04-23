import React, { lazy, Suspense, useEffect, useState } from 'react';
import './highlight.scss';

const SyntaxHighlighter = lazy(() => {
  return import('react-syntax-highlighter').then(({ PrismLight }) => {
    return { default: PrismLight };
  });
});

const Highlight = ({ style, language, ...props }) => {
  const [codeStyle, setCodeStyle] = useState();
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism').then(
      ({ atomDark }) => {
        setCodeStyle(atomDark);
      },
    );
  }, []);
  useEffect(() => {
    import(
      `react-syntax-highlighter/dist/esm/languages/prism/${language}`
    ).then((module) => {
      if (SyntaxHighlighter.registerLanguage) {
        SyntaxHighlighter.registerLanguage(language, module.default);
      }
    });
  }, [language, SyntaxHighlighter.registerLanguage]);
  return (
    <Suspense fallback={<div />}>
      <div className="code-highlighter" style={{ flex: 1, ...style }}>
        <SyntaxHighlighter {...props} language={language} style={codeStyle} />
      </div>
    </Suspense>
  );
};

export default Highlight;
