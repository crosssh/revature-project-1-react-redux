import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { ApprovedComponent } from './approved.component';
import { getApprovedTickets, updateApprovedError } from '../../actions/approved/approved.actions'

const mapStateToProps = (state: IState) => (state.approved);

export const mapDispatchToProps = {
  getApprovedTickets,
  updateApprovedError,
}

export const ApprovedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApprovedComponent);