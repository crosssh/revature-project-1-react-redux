import * as React from 'react';
import { IHome } from '../../reducers';

interface IProps extends IHome {
  updateReimbursement: () => void
}

export class HomeComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public componentDidMount() {
    this.props.updateReimbursement();
  }

  public render() {
    return (
      <div className="row">
        <div className="col">
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Date Submmited</th>
                <th scope="col">Approver</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody id="reimbursement-table-body">
              {
                this.props.reimbursements.map((reimbursement: any) =>
                  <tr key={reimbursement.timesubmitted}>
                    <td>
                      {reimbursement.username}
                    </td>
                    <td>
                    {reimbursement.timeSubmitted}
                    </td>
                    <td>
                    {reimbursement.approver}
                    </td>
                    <td>
                    {reimbursement.status}
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}