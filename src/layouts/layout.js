import { Redirect, Route, Switch } from "react-router-dom";
import { landingPagePath } from "./routes";
import { LandingPage } from "../features/landing/landing";
export const Layout = () => {
  return (
    <Switch>
      <Route path={landingPagePath} exact component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );
};
// export default Layout;