/**
 * Created by pusti on 27.08.2017.
 */
import React from 'react';
import s from './File.scss';
import { connect } from 'react-redux';
import {addMany} from '../../../actions/change.api';
import show from '../../../actions/set.message';
import {handleFile} from './files';
import Upload from 'material-ui/svg-icons/file/file-upload';

class File extends React.Component{
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.send = this.send.bind(this);
    }
    send(film){
        const {dispatch} = this.props;
        dispatch(addMany(film)).then(
            arr=>{
                let {'210':duplicate,'201':ok} = arr.reduce((obj,{status}) => {
                    obj[status]++;
                    return obj;
                },{'201':0,'210':0});
                dispatch(show(
                    duplicate>0?`${ok} films added, ${duplicate} films duplicated`:`${ok} films added`
                ));
            }).catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <input type="file" name="file" id="file" onChange={handleFile(this.send)} className={s.input}/>
                <label htmlFor="file" className={s.label}>
                    <Upload/>
                </label>
                </div>
        );
    }
}
export default connect()(File);