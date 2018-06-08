import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { updateReimbursement } from '../../actions/home/home.actions';
import { HomeComponent } from './home.component';

const mapStateToProps = (state: IState) => (state.home);

export const mapDispatchToProps = {
  updateReimbursement,
}

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
