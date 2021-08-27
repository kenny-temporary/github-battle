import React from "react";
import { Route, Switch } from "react-router-dom";
const Popular = React.lazy(() => import("@/pages/Popular/Popular"));
const Battle = React.lazy(() => import("@/pages/Battle/Battle"));

export default function RouteProvider() {
  return (
    <React.Suspense fallback="loading">
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route exact path="/battle" component={Battle} />
      </Switch>
    </React.Suspense>
  );
}
