import * as React from 'react';

import { NavComponent } from './components/nav.component';
import './include/bootstrap';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import { SignInContainer } from './components/sign-in/sign-in.container';
import { HomeContainer } from './components/home/home.container';
import { TicketingContainer } from './components/ticketing/ticketing.container';
import { TicketManagerContainer } from './components/ticket-manager/ticket-manager.container';
import { ApprovedContainer } from './components/approved/approved.container';
import { DeniedContainer } from './components/denied/denied.container';
import { SignOutComponent } from './components/sign-out/sign-out.component';

class App extends React.Component<any, any> {

  public render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <NavComponent />
            <Switch>
              <Route path="/home" component={HomeContainer} />
              <Route path="/ticketing" component={TicketingContainer} />
              <Route path="/pending" component={TicketManagerContainer} />
              <Route path="/approved" component={ApprovedContainer} />
              <Route path="/denied" component={DeniedContainer} />
              <Route path="/sign-out" component={SignOutComponent} />
              <Route path="/" component={SignInContainer} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
