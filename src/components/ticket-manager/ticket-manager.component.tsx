import * as React from 'react';
import { ITicketManager } from '../../reducers';

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

  public approved = (username: any, date: any, status: any) => (e: any) => {
    e.preventDefault();
    console.log(username);
    console.log(date);
    console.log(status)
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
                      <div className="col-4">Date Submitted: {ticket.timeSubmitted}</div>
                      <div className="col-4">Status: {ticket.status}</div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.approved(ticket.username, ticket.timeSubmitted, "approved")}>Approved</button>
                    <button type="button" className="btn btn-primary" onClick={this.approved(ticket.username, ticket.timeSubmitted, "denied")}>Denied</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}