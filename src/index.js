import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import reportWebVitals from 'reportWebVitals';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
  useLocation,
} from 'react-router-dom';
import Layout from 'components/layout';
import { en, es } from 'make-plural/plurals';
import Footer from 'components/footer/footer';
import Analytics from 'components/analytics';

import './index.scss';
import { t } from '@lingui/macro';

i18n.loadLocaleData({
  en: { plurals: en },
  es: { plurals: es },
});

const Main = lazy(() => {
  return import('screens/main');
});

const GettingStarted = lazy(() => {
  return import('screens/getting-started');
});

const Storybook = lazy(() => {
  return import('screens/storybook');
});

const App = () => {
  const [messages, setMessages] = useState();
  const { lang } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    ['en', 'es'].forEach((language) => {
      const existingElement = document.querySelector(`#hreflang-${language}`);
      if (existingElement && language === lang) {
        document.head.removeChild(existingElement);
        return;
      }

      if (language === lang) {
        return;
      }

      const hrefLang = existingElement || document.createElement('link');
      hrefLang.id = `hreflang-${language}`;
      hrefLang.rel = 'alternate';
      hrefLang.href = `${window.location.origin}${pathname.replace(
        new RegExp(`^/${lang}`),
        `/${language}`,
      )}`;
      hrefLang.hreflang = language;
      if (!existingElement) {
        document.head.appendChild(hrefLang);
      }
    });
  }, [pathname]);

  useEffect(() => {
    import(`locales/${lang}/messages`).then((locale) => {
      i18n.load(lang, locale.messages);
      i18n.activate(lang);
      setMessages(locale.messages);
      const description = document.createElement('meta');
      description.name = 'description';
      description.content = i18n._(
        t`A lightweight, up to date, and crazy fast React wrapper for Bulma.io CSS Framework. Use your favorite CSS framework as React Components`,
      );
      document.head.appendChild(description);
    });
  }, [lang]);

  if (!messages) {
    return <div />;
  }
  return (
    <I18nProvider i18n={i18n}>
      <Layout>
        <Suspense fallback={<div />}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Switch>
              <Route path="/:lang/" exact>
                <Main />
              </Route>
              <Route path="/:lang/getting-started" component={GettingStarted} />
              <Route path="/:lang/storybook">
                <Storybook />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </Layout>
    </I18nProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/:lang(es|en)/">
          <Analytics>
            <App />
          </Analytics>
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
