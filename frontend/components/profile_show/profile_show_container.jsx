import {connect} from 'react-redux';
import Profile from './profile_show';
import { logout } from '../../actions/session_actions';

// const msp = ({session, entities: {users} }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mdp)(Profile)