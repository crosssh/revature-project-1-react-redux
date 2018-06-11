import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { TicketManagerComponent } from './ticket-manager.component';
import { setCurrentTicket, getPendingTickets, updateTicketingError }  from '../../actions/ticket-manager/ticket-manager.actions';

const mapStateToProps = (state: IState) => (state.ticketManager);

export const mapDispatchToProps = {
  getPendingTickets,
  setCurrentTicket,
  updateTicketingError,
}

export const TicketManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketManagerComponent);
