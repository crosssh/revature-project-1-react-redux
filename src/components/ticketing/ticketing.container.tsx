import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { TicketingComponent } from './ticketing.component';
import { addItem, updateAmount, updateDate, updateDescription, updateTitle } from '../../actions/ticketing/ticketing.actions'

const mapStateToProps = (state: IState) => (state.ticketing);

export const mapDispatchToProps = {
  addItem,
  updateAmount,
  updateDate,
  updateDescription,
  updateTitle,
}

export const TicketingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketingComponent);
