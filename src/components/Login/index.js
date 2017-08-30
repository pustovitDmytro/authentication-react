/**
 * Created by pusti on 30.08.2017.
 */
import React from 'react';
import Input from '../Input';
import validators from '../Input/validators';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import s from './Login.scss';
import {authenticate} from '../../actions/change.api';
import {getMenu} from '../../actions/load.api';
import show from '../../actions/set.message';
import setUser from '../../actions/set.user';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.submit=this.submit.bind(this);
        this.enableButton=this.enableButton.bind(this);
        this.disableButton=this.disableButton.bind(this);
    }
    enableButton(){
        this.setState({
            canSubmit: true
        });
    }
    disableButton() {
        this.setState({
            canSubmit: false
        });
    }
    submit(model) {
        const {dispatch} = this.props;
        dispatch(authenticate(model))
            .then(data=>{
                dispatch(show(data.message))
                if(data.success){
                    console.log(data.username,data.token);
                    dispatch(setUser(data.username,data.token));
                    dispatch(getMenu());
                }
            });
    }
    render() {
        return (
            <Paper zDepth={2} className={s.center}>
                <Formsy.Form
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <Input
                        type="text"
                        name="name"
                        validations={{
                            matchRegexp: validators.name
                        }}
                        placeholder={"Film title"}
                        hint="Type"
                        required/>
                    <Input
                        type="password"
                        name="password"
                        hint="Type"
                        validations={{
                            matchRegexp: validators.password
                        }}
                        placeholder={"Format"}
                        required/>
                    <RaisedButton
                        label="Submit"
                        primary={true}
                        type="submit"
                        disabled={!this.state.canSubmit}/>
                </Formsy.Form>
            </Paper>
        );
    }
}

export default connect()(Login);