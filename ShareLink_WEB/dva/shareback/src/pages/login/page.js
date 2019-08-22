import React from 'react'
import style from './page.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter} from 'react-router-dom';
import { connect } from "dva"

const FormItem = Form.Item;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			username:"",
			password:""
		} 
	}

    handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err){
				this.props.dispatch({
					type: 'logins/goin',
					payload: true,
				  });
				//window.sessionStorage.setItem("userId",values.userName);
				if(values.remember){
					window.localStorage.setItem('userName',values.userName);
					window.localStorage.setItem('password',escape(values.password));
				}else{
					window.localStorage.removeItem('userName');
					window.localStorage.removeItem('password')
				}
				this.props.history.push('/')
			}
		}); 
	}
  
    componentDidMount(){
		if(window.localStorage.getItem('userName')){
			var userName = window.localStorage.getItem('userName')
			var password = window.localStorage.getItem('password')
			this.setState({
				username:userName,
				password:password
			})
		}
	}
	render() {
		const  { islogin } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<div className={style.bg}>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form" style = {{margin:'auto',padding: "60px 90px",  maxWidth:"600px" ,border: "1px groove white" }}>
					<FormItem className='username'>
						{getFieldDecorator('userName', {
							initialValue:this.state.username,
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" autoComplete = 'off'/> 
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('password', {
							initialValue:this.state.password,
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  autoComplete = 'off' />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(
								<Checkbox>Remember me</Checkbox>
						)}
						{/*  eslint-disable-next-line */}
						<a className="login-form-forgot" href="#" style ={{ float: "right"}}>Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button" loading={islogin ? true : false} style={{width: "100%"}}>
							{islogin ? 'Loging' : 'Login'}
						</Button>
						{/*  eslint-disable-next-line */}
						Or <a href="#">register now!</a>
					</FormItem>
				</Form>
			</div>	
		);
	}
}
const WrappedNormalLoginForm = Form.create()(Login);

function loginState(state) {
    console.log(state)
    const { islogin } = state.logins;
    return {
      loading: state.loading.models.users,
      islogin
    };
  }
export default withRouter(connect(loginState)(WrappedNormalLoginForm))
/* export default withRouter(connect(loginState,{Logins})(WrappedNormalLoginForm)) */

