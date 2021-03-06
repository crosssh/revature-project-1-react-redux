import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { ApprovedComponent } from './approved.component';
import { clearApproved, getApprovedTickets, getItems, updateApprovedError } from '../../actions/approved/approved.actions'

const mapStateToProps = (state: IState) => (state.approved);

export const mapDispatchToProps = {
  clearApproved,
  getApprovedTickets,
  getItems,
  updateApprovedError,
}

export const ApprovedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApprovedComponent);
