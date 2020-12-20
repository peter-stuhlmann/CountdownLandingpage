import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Countdown = lazy(() => import('./Countdown'));
const NotFound = lazy(() => import('./NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Countdown} />
      <Route component={NotFound} />
    </Switch>
  );
}
