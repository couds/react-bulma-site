import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import reportWebVitals from 'reportWebVitals';
import Main from 'screens/main';

import './index.scss';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
} from 'react-router-dom';

const App = () => {
  const [messages, setMessages] = useState();
  const { lang } = useParams();

  useEffect(() => {
    import(`locales/${lang}/messages`).then((locale) => {
      i18n.load(lang, locale.messages);
      i18n.activate(lang);
      setMessages(locale.messages);
    });
  }, [lang]);

  if (!messages) {
    return <div />;
  }

  return (
    <I18nProvider i18n={i18n}>
      <Main />
    </I18nProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/:lang(es|en)/">
          <App />
        </Route>
        <Route path="*">
          <Redirect to="/en" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
