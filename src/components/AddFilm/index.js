/**
 * Created by pusti on 25.08.2017.
 */
import React from 'react';
import Input from '../Input';
import validators from '../Input/validators';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Formsy from 'formsy-react';
import IconButton from 'material-ui/IconButton';
import AddBtn from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import s from './AddFilm.scss';
import {addFilm} from '../../actions/change.api';
import show from '../../actions/set.message';

class AddFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {form:false,canSubmit: false};
        this.showform = this.showform.bind(this);
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
        dispatch(addFilm(model)).then(
            ({status})=> {
                switch (status){
                    case 201:
                        this.showform();
                        return dispatch(show("Film added"));
                    case 210:
                        return dispatch(show("Film already exist"));
                }
            }
        )
    }
    showform(){
        this.setState({form: !this.state.form});
    }
    render() {
        return (
            <Paper zDepth={2} className={s.center}>
                {
                    (!this.state.form) ?
                    <IconButton  onClick={this.showform} tooltip="Add new film">
                        <AddBtn />
                    </IconButton>:
                        <Formsy.Form
                            onValidSubmit={this.submit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}>
                            <Input
                                type="text"
                                name="title"
                                validations={{
                                    matchRegexp: validators.title
                                }}
                                placeholder={"Film title"}
                                hint="Type"
                                required/>
                            <Input
                                type="text"
                                name="format"
                                hint="Type"
                                validations={{
                                matchRegexp: validators.format
                            }}
                                placeholder={"Format"}
                                required/>
                            <Input
                                type="number"
                                name="year"
                                hint="Type"
                                validations={{
                                    matchRegexp: validators.year
                                }}
                                placeholder={"Release year"}
                                required/>
                            <Input
                                type="text"
                                name="stars"
                                hint="Type"
                                validations={{
                                    matchRegexp: validators.stars
                                }}
                                placeholder={"Stars"}
                                required/>
                            <div className={s.center}>
                                <RaisedButton
                                    label="Cancel"
                                    onClick={this.showform}/>
                                <RaisedButton
                                    label="Submit"
                                    primary={true}
                                    type="submit"
                                    disabled={!this.state.canSubmit}/>
                            </div>
                        </Formsy.Form>
                }
            </Paper>
        );
    }
}

export default connect()(AddFilm);