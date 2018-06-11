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

  public formatTime = (time: any) => {
    const newTime = new Date(time);
    return newTime.toDateString();
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
                      <div className="col-4">Date Submitted: {this.formatTime(ticket.timeSubmitted)}</div>
                      <div className="col-4">Status: {ticket.status}</div>
                    </div>
                    {
                      ticket.items !== null &&
                      ticket.items.map((item: any) =>
                        <div className="container item" key={item.title}>
                          <div className="row">
                            <div className="col-4 my-class">Title: {item.title}</div>
                            <div className="col-4 my-class">Date: {item.timeStamp}</div>
                            <div className="col-4 my-class">Amount: {item.amount}</div>
                          </div>
                          <div className="row description">
                            <div className="col-8">
                              <div className="description-head">Description</div>
                              <div>{item.description}</div>
                            </div>
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