import React from "react";
import { Route, Switch } from "react-router-dom";
const Popular = React.lazy(() => import("@/pages/Popular/Popular"));
const Battle = React.lazy(() => import("@/pages/Battle/Battle"));
const BattleResult = React.lazy(() => import("@/pages/Result"));

/**
 * ---------------------------------------------------------------
 * XXX: 路由注册方式更换为配置式？或约定式？
 * ---------------------------------------------------------------
 *
 * ```javascript
 * Scheme Item
 * {
 *  exact: Boolean,
 *  component: String | Component,
 *  children: Item[],
 * }
 * ```
 * ---------------------------------------------------------------
 */
export default function RouteProvider() {
  return (
    <React.Suspense fallback="loading">
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/result" component={BattleResult} />
      </Switch>
    </React.Suspense>
  );
}
