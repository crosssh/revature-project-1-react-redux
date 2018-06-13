import * as React from 'react';
import { ITicketManager } from '../../reducers';
import { environment } from '../../environment';

interface IProps extends ITicketManager {
  getPendingTickets: () => void
}

export class TicketManagerComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public componentDidMount() {
    this.props.getPendingTickets();

    console.log(this.props.tickets);
  }

  public formatTime = (time: any) => {
    const newTime = new Date(time);
    return newTime.toDateString();
  }

  public statusUpdate = (username: any, date: any, status: any) => (e: any) => {
    e.preventDefault();

    const update = {
      status,
      timeSubmitted: date,
      username,

    };

    fetch(environment.context+'reimbursements/update-status', {
      body: JSON.stringify(update),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
      .then(resp => {
        if (resp.status === 200) {
          return resp.status;
        }
        throw 'Unable to update status';
      })
      .then(data => {
        console.log(data);
        this.props.getPendingTickets();
        return;
      })
      .catch(err => {
        console.log(err);
      });

    this.props.getPendingTickets();
  }


  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {
              this.props.tickets !== null &&
              this.props.tickets.map((ticket: any) =>
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
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary sign-in-button" onClick={this.statusUpdate(ticket.username, ticket.timeSubmitted, "approved")}>Approved</button>
                    <button type="button" className="btn btn-primary sign-in-button" onClick={this.statusUpdate(ticket.username, ticket.timeSubmitted, "denied")}>Denied</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="row">
          <h3>{this.props.ticketingErrorMessage}</h3>
        </div>
      </div>
    );
  }
}