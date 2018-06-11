import * as React from 'react';
import { IDenied } from '../../reducers';

interface IProps extends IDenied {
  getDeniedTickets: () => void
}

export class DeniedComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public componentDidMount() {
    this.props.getDeniedTickets();
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          {
              this.props.deniedTickets !== null &&
              this.props.deniedTickets.map((ticket: any) =>
                <div className="card" key={ticket.timeSubmitted}>
                  <div className="card-header">
                    <h5 className="card-title">Reimbursement for {ticket.username}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">Date Submitted: {ticket.timeSubmitted}</div>
                      <div className="col-4">Status: {ticket.status}</div>
                    </div>
                        {
                          ticket.items !== null &&
                          ticket.items.map((item: any) =>
                            <div className="container border" key={item.title}>
                              <div className="row">
                                <div className="col-4">Title: {item.title}</div>
                                <div className="col-4">Date: {item.timeStamp}</div>
                                <div className="col-4">Amount: {item.amount}</div>
                              </div>
                              <div className="row">
                                <div>Description</div>
                              </div>
                              <div className="row">
                                <div>{item.description}</div>
                              </div>
                            </div>
                          )
                        }
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="row">
            <h3>{this.props.deniedErrorMessage}</h3>
        </div>
      </div>
    );
  }
}