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

    const update = {
      status,
      timeSubmitted: date,
      username,

    };

    fetch('http://localhost:3001/reimbursements/update-status', {
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
        return;
      })
      .catch(err => {
        console.log(err);
      });

      this.props.getPendingTickets();
      this.forceUpdate()
  }


  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            
              {console.log('this is being printed: '+this.props.tickets)}{
              this.props.tickets !== null &&
              this.props.tickets.map((ticket: any) =>
                <div className="card" key={ticket.timeSubmitted}>
                  <div className="card-header">
                    <h5 className="card-title">Reimbursement for {ticket.username}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">Date Submitted: {ticket.timeSubmitted}</div>
                      <div className="col-4">Status: {ticket.status}</div>{console.log('ticket: ', ticket)}
                    </div>
                    <table>
                      <tbody>
                        {
                          ticket.items !== null &&
                          ticket.items.map((item: any) =>
                            <div className="container-75 border" key={item.title}>
                              <div className="row">
                                <div className="col-4">Title: {item.title}</div>
                                <div className="col-4">Date: {item.timeStamp}</div>
                                <div className="col-4">Amount: {item.amount}</div>
                              </div>
                              <div className="row">
                                <div>Description</div>
                                <div>{item.description}</div>
                              </div>
                            </div>
                          )
                        }
                      </tbody>
                    </table>
                    <button type="button" className="btn btn-primary" onClick={this.approved(ticket.username, ticket.timeSubmitted, "approved")}>Approved</button>
                    <button type="button" className="btn btn-primary" onClick={this.approved(ticket.username, ticket.timeSubmitted, "denied")}>Denied</button>
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