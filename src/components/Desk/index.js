/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import s from './Desk.scss';
import Login from '../Login';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

class Desk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogin: true, aciveItem: -1};
    }
    componentWillReceiveProps(props){
        console.log(props);
    }
    render() {
        const {menus,message,user}=this.props;
        return (
            <div className={s.container}>
                {
                    this.state.showLogin
                        ?
                        <Login/>
                        :
                        <div>
                            <Header></Header>
                            <div>
                                <Section>
                                </Section>
                                <MainWindow/>
                            </div>
                        </div>
                }
                <Snackbar
                    open={!!(message && message.length)}
                    message={message || ''}
                    autoHideDuration={2000}/>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        menus: state.menu.array,
        message: state.message.text,
        user: state.session.user
    }
}
export default connect(mapStateToProps)(Desk);