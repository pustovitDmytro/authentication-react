/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import s from './Menu.scss';
import Find from './Find';
import File from './File';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import unknown from './unknown.png';
import Sort from './Sort';


const Menu = ({num,src,user}) => (
    <Toolbar className={s.container}>
        <ToolbarGroup className={s.hidemobile}>
            <Avatar src={src||unknown} />
            <ToolbarTitle text={`${user||'User'}, ${num} films`}/>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
            <Sort/>
            <Find field="title" hint="input title" placeholder="Search by title"/>
            <Find field="stars" placeholder="Search by stars"/>
            <File/>
        </ToolbarGroup>
    </Toolbar>
);

export default Menu;