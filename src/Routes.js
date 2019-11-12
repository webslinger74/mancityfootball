import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home/Features/Home';
import SignIn from '../src/components/SignIn/SignIn';
import Dashboard from './components/Admin/Dashboard';
import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import PublicRoute from './components/AuthRoutes/PublicRoute';
import AdminMatches from './../src/components/Admin/Matches/AdminMatches';
import AddEditMatch from './components/Admin/Matches/AddEditMatch';

const Routes = (props) => {
  //these props include the user or null from firebase
    return (  
      <div>
      <Layout>
        <Switch>
           <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
          <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
          <PublicRoute  {...props} restricted={false} path="/" exact component={Home} />
          <PublicRoute  {...props} restricted={true} exact component={SignIn} path="/SignIn"/>
        </Switch>
      </Layout>
      </div>
    )
}


export default Routes;
