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

  public componentWillUnmount() {
    this.props.clearItems();
  }

  public add = (e: any) => {
    e.preventDefault();
    this.props.addItem(this.props.amount, this.props.date, this.props.description, this.props.title);
  }

  // Add error messagese that appear if error occurs.
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
        if (resp.status === 200) {
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
            <form>
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
              <button type="submit" className="btn btn-primary sign-in-button" onClick={this.add}>Add</button>
              <button type="submit" className="btn btn-primary sign-in-button" onClick={this.submit}>Submit Ticket</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-bordered table-dark" id="items-table">
              <tbody>
                {this.props.items.map((item: any) =>
                  <tr key={item.title}>
                    {console.log(this.props.items)}
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