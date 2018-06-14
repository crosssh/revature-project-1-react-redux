import * as React from 'react';
import { IHome } from '../../reducers';

interface IProps extends IHome {
  updateReimbursement: () => void
  clearHome: () => void
}

export class HomeComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public componentDidMount() {
    this.props.updateReimbursement();
    console.log(this.props.reimbursements)
  }

  public componentWillUnmount() {
    this.props.clearHome();
  }

  public formatTime = (time: any) => {
    const newTime = new Date(time);
    return newTime.toDateString();
  }

  public render() {
    return (
      <div className="container">
      {
        this.props.reimbursements.length > 0 &&
        <div className="card" >
          <div className="card-header"> 
            {this.props.reimbursements && this.props.reimbursements[0] &&
              <h5 className="card-title">Reimbursement for {this.props.reimbursements[0].username}</h5>
            }
          </div>
          {
            this.props.reimbursements !== null &&
            this.props.reimbursements.map((ticket: any) =>
              <div className="card-body home-card" key={ticket.timeSubmitted}>
                <div className="row">
                  <div className="col-10">Date Submitted: {this.formatTime(ticket.timeSubmitted)}</div>
                  <div className="col-2">Status: {ticket.status}</div>
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
            )
          }
        </div>
      }
      </div>
    );
  }
}