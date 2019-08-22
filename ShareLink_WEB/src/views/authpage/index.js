import React,{Component} from 'react';
import wrapAuth from '../../components/auth'
import {Button} from 'antd';

/* const AuthButton = wrapAuth(Button); */
const AuthButton = Button

export default class Page extends Component{
    render() {
        return (
        <div>
            <AuthButton  auth="createUser">创建用户</AuthButton>
        </div>
        );
    }
}
