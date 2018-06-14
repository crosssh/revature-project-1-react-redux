import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { DeniedComponent } from './denied.component';
import { clearDenied, getDeniedTickets, getItems, updateDeniedError } from '../../actions/denied/denied.actions'

const mapStateToProps = (state: IState) => (state.denied);

export const mapDispatchToProps = {
  clearDenied,
  getDeniedTickets,
  getItems,
  updateDeniedError,
}

export const DeniedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeniedComponent);
