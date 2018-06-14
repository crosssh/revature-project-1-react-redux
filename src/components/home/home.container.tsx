import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { clearHome, updateReimbursement } from '../../actions/home/home.actions';
import { HomeComponent } from './home.component';

const mapStateToProps = (state: IState) => (state.home);

export const mapDispatchToProps = {
  clearHome,
  updateReimbursement,
}

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
