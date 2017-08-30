/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Desk from './Desk';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Error from './Error';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    getChildContext() {
        return {
            menu : this.props.store.getState().menu,
            session : this.props.store.getState().session,
            messages : this.props.store.getState().messages,
        };
    }
    render() {
        const apiError = this.props.store.getState().menu.error;
        return (
            <MuiThemeProvider>
                {
                    apiError ?
                        <Error message="looks like external API didn't respond..."/>
                        :
                        <Desk/>
                }
            </MuiThemeProvider>
        );
    }
}
App.childContextTypes = {
    menu: PropTypes.object,
    session: PropTypes.object,
    messages: PropTypes.object
};

export default App;