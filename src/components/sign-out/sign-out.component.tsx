import * as React from 'react';
import { environment } from '../../environment';

export class SignOutComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public signOut = () => {
    fetch(environment.context+'users/sign-out', { credentials: 'include' })
      .then(resp => {
        console.log(resp.status)
        return resp.json();
      })
      .then((data) => {
        if (data === 200) {
          console.log('signed out componet');
        }
      })
      .catch(err => {
        console.log(err);
      })

      this.props.history.push('/');
  }

  public render() {
    return (
      <div>
        here
        {this.signOut()}
      </div>
    );
  }
}