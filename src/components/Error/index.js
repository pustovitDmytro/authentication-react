/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import s from './Error.scss';
import robot from './robot.png';

export default Error = ({message}) => (
    <div className={s.container}>
        <h1 className={s.title}>Ooooops...</h1>
        <h3 className={s.description}>{message}</h3>
        <img className={s.robot} src={robot}/>
    </div>
);