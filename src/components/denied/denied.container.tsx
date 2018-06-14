import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { DeniedComponent } from './denied.component';
import { getDeniedTickets, getItems, updateDeniedError } from '../../actions/denied/denied.actions'

const mapStateToProps = (state: IState) => (state.denied);

export const mapDispatchToProps = {
  getDeniedTickets,
  getItems,
  updateDeniedError,
}

export const DeniedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeniedComponent);
