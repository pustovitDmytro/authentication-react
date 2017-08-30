/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import unknown from './film.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {deleteFilm} from '../../actions/change.api';
import setMessage from '../../actions/set.message';

class Film extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    handleDelete = () => {
        const {dispatch,id}=this.props;
        dispatch(deleteFilm(id)).then(
            ({status}) =>
                dispatch(setMessage(status===200?'Film was successfully deleted':'Try to reload'))
        ).catch(err => console.log(err));
    };

    render() {
        const {title, src, year, format, stars}= this.props;
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    subtitle={year+" year"}
                    actAsExpander={true}
                    showExpandableButton={true}/>
                <CardMedia
                    overlay={
                        <CardTitle
                            title={title}
                            subtitle={year + " year"}/>
                    }
                    expandable={true}>
                    <img src={src||unknown} alt={title} />
                </CardMedia>
                <CardTitle title={`${title} (${year})`} subtitle={`available on ${format}`} expandable={true} />
                <CardText expandable={true}>
                    In the film {title}, launched in {year} a brilliant play of actors: {stars} has been marked by all famous critics.
                    This film is available on {format} at our <a href="/">site</a>
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onClick={this.handleExpand} />
                    <FlatButton label="Reduce" onClick={this.handleReduce} />
                    <FlatButton label="Delete" onClick={this.handleDelete} />
                </CardActions>
            </Card>
        );
    }
}
export default connect()(Film);