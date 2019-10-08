import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';

const msp = ({session, entities: {users} }) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(msp, mdp)(Navbar)