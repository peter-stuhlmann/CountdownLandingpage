import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const LegalNotice = lazy(() => import('./LegalNotice'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const NotFound = lazy(() => import('./NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/legal-notice" component={LegalNotice} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}
