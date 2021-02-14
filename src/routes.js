import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Dashboards from "./pages/dashboard/dashboard"; 
import MaterialLayout from "./components/layout_materialui/materialLayout";

const Routes = () => {

    return (
    <HashRouter>
      <MaterialLayout>
          <React.Fragment>
            <Route path="/" component={Dashboards} />
          </React.Fragment>
      </MaterialLayout>
    </HashRouter>
  );
};

export default Routes;
