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

class App extends React.Component<any, any> {

  public render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <NavComponent />
            <Switch>
              <Route path="/sign-in" component={SignInContainer} />
              <Route path="/home" component={HomeContainer} />
              <Route path="/ticketing" component={TicketingContainer} />
              <Route path="/pending" component={TicketManagerContainer} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
