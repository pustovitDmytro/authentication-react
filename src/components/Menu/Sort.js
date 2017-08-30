/**
 * Created by pusti on 27.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import sort from '../../actions/sort.films';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/av/sort-by-alpha';

class Sort extends React.Component{
    constructor(props) {
        super(props);
        this.state = {order: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            order: !this.state.order
        });
        this.props.dispatch(sort(this.state.order,'title'));
    }
    render() {
        return (
            <IconButton tooltip="Sort by title">
                <SortIcon onClick={this.handleClick}/>
            </IconButton>
        );
    }
}
export default connect()(Sort);