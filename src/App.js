import { Divider } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './features/header/header';
import CustomerLayout from './layouts/customer-layout';
import { sellerPortalBasePath } from './layouts/routes';
import { SellerLayout } from './layouts/seller-layout';

const App = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Divider />
        <Switch>
          <Route path={sellerPortalBasePath} component={SellerLayout} />
          <CustomerLayout />
        </Switch>
      </Router>
    </div>
  )
}

export default App