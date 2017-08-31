/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import s from './Desk.scss';
import Login from '../Login';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

class Desk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogin: true, active: 0};
        this.handleLogOutClick=this.handleLogOutClick.bind(this);
        this.handleMenuClick=this.handleMenuClick.bind(this);
    }
    componentWillReceiveProps(newProps){
        if(!this.props.user && newProps.user)
            this.setState({showLogin:false});
    }
    handleLogOutClick(e){
        return this.setState({showLogin:true,active:0});
    }
    handleMenuClick(current){
        return (e)=>this.setState({active:current});
    }
    render() {
        const {menus,message,user}=this.props;
        return (
            <Paper className={s.container}>
                {
                    this.state.showLogin
                        ?
                        <Login/>
                        :
                        <div className={s.container}>
                            <Toolbar>
                                <ToolbarGroup>
                                    <ToolbarTitle text={user} />
                                </ToolbarGroup>
                                <ToolbarGroup>
                                    <RaisedButton
                                        onClick={this.handleLogOutClick}
                                        label="LogOut"
                                        primary={true} />
                                </ToolbarGroup>
                            </Toolbar>
                            <div className={s.main}>
                                <Menu
                                    className={s.menu}>
                                    {
                                        menus.map(
                                            (elem,i)=>
                                                <MenuItem
                                                    key={i}
                                                    onClick={this.handleMenuClick(i)}>
                                                    <span className={(this.state.active===i)?s.selected:''}>
                                                        {elem}
                                                    </span>
                                                </MenuItem>
                                        )
                                    }
                                </Menu>
                                <Paper className={s.content}>
                                    <p>
                                        {`${menus[this.state.active]} has been opened, Welcome to this page,${user}`}
                                    </p>
                                </Paper>
                            </div>
                        </div>
                }
                <Snackbar
                    open={!!(message && message.length)}
                    message={message || ''}
                    autoHideDuration={2000}/>
            </Paper>
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