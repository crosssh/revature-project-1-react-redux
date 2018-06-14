import * as React from 'react';
import { IDenied } from '../../reducers';

interface IProps extends IDenied {
  formatTime: (time: any) => any
  getDeniedTickets: () => void
  getItems: (items: any) => void
  updateDeniedError: (str :string) => void
}

export class DeniedComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public componentDidMount() {
    this.props.getDeniedTickets();
  }

  public componentWillUnmount() {
    this.props.updateDeniedError('');
  }

  public formatTime = (time: any) => {
    const newTime = new Date(time);
    return newTime.toDateString();
  }

  public getItems = (items: any) => (e: any) => {
    this.props.getItems(items);
  }


  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {
              this.props.deniedTickets !== null &&
              this.props.deniedTickets.map((ticket: any) =>
                <div className="card" key={ticket.timeSubmitted} onClick={this.getItems(ticket.items)}>
                  <div className="card-header" data-toggle="modal" data-target=".bd-example-modal-lg">
                    <div className="card-title row">
                      <div className="col-4">Reimbursement for {ticket.username}</div>
                      <div className="col-4">
                        <div className="text-center">
                          Date Submitted: {this.formatTime(ticket.timeSubmitted)}
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-right">Status: {ticket.status}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Items</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {
                this.props.items !== null &&
                this.props.items.map((item: any) =>
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
        </div>
        
        <div className="row">
          <h3>{this.props.deniedErrorMessage}</h3>
        </div>
      </div>
    );
  }
}