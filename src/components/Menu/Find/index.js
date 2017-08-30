/**
 * Created by pusti on 24.08.2017.
 */
import React from 'react';
import s from './Find.scss';
import cx from "classnames";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import searchFilm from '../../../actions/search.films';
import Input from '../../Input';
import validators from '../../Input/validators';
import {getFilms} from '../../../actions/load.api';

class Find extends React.Component{
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
    submit({query=''}) {
        const {field,dispatch} = this.props;
        dispatch(searchFilm(query,field));
    }
    render() {
        const {placeholder,field} = this.props;
        return (
                <Formsy.Form
                    className={s.container}
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <Input
                        type="text"
                        name="query"
                        validations={{
                            matchRegexp: validators[(field=='title')?'title':'actor']
                        }}
                        hint="Input"
                        placeholder={placeholder}/>
                </Formsy.Form>
        );
    }
}
export default connect()(Find);