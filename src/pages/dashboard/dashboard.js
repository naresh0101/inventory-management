import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Layout from '../../hoc/dashboardLayout';

//pages
import Products from '../products';
import Home from '../home';

const Dashboard = (props) => {
    
    return (
        <Layout>
            <HashRouter>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products" component={Products}/>
            </HashRouter>
        </Layout>
    )
}

export default Dashboard;