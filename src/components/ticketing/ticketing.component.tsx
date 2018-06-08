import * as React from 'react';
// import { ITicketing } from '../../reducers';

// interface IProps extends ITicketing {
//   addItem: (amount: number, date: string, description: string, title: string) => void
//   submit: (items: any[]) => void
//   updateAmount: (amount: number) => void
//   updateDate: (date: string) => void
//   updateDescription: (description: string) => void
//   updateTitle: (title: string) => void
// }

export class TicketingComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public add = (e: any) => {
    e.preventDefault();
    this.props.addItem(this.props.amount, this.props.date, this.props.description, this.props.title);
  }

  public submit = (e: any) => {

    const ticket = {
      approver: 'pending',
      items: this.props.items,
      status: 'pending',
      timeSubmitted: '',
      username: '',
    }

    e.preventDefault();
    fetch('http://localhost:3001/reimbursements/add-reimbursement', {
    body: JSON.stringify(ticket),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
    .then(resp => {
      if (resp.status === 401) {
        console.log('Invalid Credentials');
        return;
        // throw 'Invalid Credentials';
      }
      if (resp.status === 200) {
        console.log('in resp === 200')
        return resp.status;
      }
      console.log('Unable to submit the ticket');
      // throw 'Unable to submit the ticket';
      return;
    })
    .then(data => {
      this.props.history.push('/home');
    })
    .catch(err => {
      console.log(err);
    })
  }

  public render() {
    return (
      <div className="container">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">Add item to the ticket</h5>
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <input
                    value={this.props.title}
                    onChange={(e: any) => this.props.updateTitle(e.target.value)}
                    type="text"
                    id="title-input"
                    className="form-control"
                    placeholder="Title"
                    required />
                </div>
                <div className="col-md-4">
                  <input
                    value={this.props.amount}
                    onChange={(e: any) => this.props.updateAmount(e.target.value)}
                    type="number"
                    id="amount-input"
                    className="form-control"
                    placeholder="Amount"
                    required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <input
                    value={this.props.date}
                    onChange={(e: any) => this.props.updateDate(e.target.value)}
                    type="text"
                    id="time-input"
                    className="form-control"
                    placeholder="Time of expense"
                    required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="description-input">Description</label>
                  <textarea
                    value={this.props.description}
                    onChange={(e: any) => this.props.updateDescription(e.target.value)}
                    className="form-control"
                    id="description-input"></textarea>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={this.add}>Add</button>
            <button className="btn btn-primary" onClick={this.submit}>Submit Ticket</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-bordered table-dark" id="items-table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {this.props.items.map((item: any) =>
                  <tr key={item.title}>
                    <td>{item.title}</td>
                    <td>{item.amount}</td>
                    <td>{item.timeStamp}</td>
                    <td>{item.description}</td>
                  </tr>
                )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}