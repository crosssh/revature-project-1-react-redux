import * as React from 'react';
import { IApproved } from '../../reducers';

interface IProps extends IApproved {
  getApprovedTickets: () => void
}

export class ApprovedComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public componentDidMount() {
    this.props.getApprovedTickets();

    console.log(this.props.approvedTickets);
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            
              {console.log('this is being printed: '+this.props.approvedTickets)}{
              this.props.approvedTickets !== null &&
              this.props.approvedTickets.map((ticket: any) =>
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
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="row">
            <h3>{this.props.approvedErrorMessage}</h3>
        </div>
      </div>
    );
  }
}