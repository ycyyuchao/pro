import React,{Component} from 'react';
import { NavLink , withRouter,Redirect} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon ,Avatar} from 'antd';
import './index.scss';
import 'antd/dist/antd.css'
import { Logout } from '../../redux/actions/index'
import { connect } from 'react-redux'
import {menus} from '../../router/index';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Index extends Component{
      
      state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };

      goHome(e){
        this.props.history.push("/data");
      }
      logout(e){
        this.props.Logout(false)
       // console.log(window.sessionStorage.getItem('userId'))
        window.sessionStorage.removeItem('userId')
        window.localStorage.removeItem('persist:aa') 
        this.props.history.push("/login");
        /* localStorage.clear();
        console.log("cliasdk");
        return(
            <Redirect to="/login"/>
        ) */
      }
      componentDidUpdate(){
        var arr = [];
        for(var i = 0;i<menus.length;i++){
          arr.push(menus[i].path)
        }
       let pathname = this.props.location.pathname
        let index = arr.indexOf(pathname)
        if(index === -1){
          console.log('not')
          this.props.history.push("/notfound", { some: "state" })
        }
      }

      componentWillMount () {
        // 拦截判断是否离开当前页面
        
       // window.addEventListener('beforeunload', this.beforeunload);
      }
      componentWillUnmount () {
        // 销毁拦截判断是否离开当前页面
       // window.removeEventListener('beforeunload', this.beforeunload);
       window.localStorage.removeItem('persist:aa') 
      }
     beforeunload (e) {
        console.log(e)
        localStorage.clear()
        let confirmationMessage = '你确定离开此页面吗?';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      }


      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >{/*  */}
                <Menu.Item key="1" className='li'>
                  <Icon type="pie-chart" />
                  <span>
                    <NavLink to='/data' className='a' onClick={()=>document.title = '数据监控'}> 数据监控</NavLink>
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span> <NavLink to='/indent' className='a' onClick={()=>document.title = '订单管理'}> 订单管理</NavLink></span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                  <Menu.Item key="3">
                    <NavLink to='/authpage' className='a' onClick={()=>document.title = '权限管理'}>用户权限</NavLink>
                  </Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="team" /><span>Team</span></span>}>
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
              <div className="header">
                <span>小程序后台</span>
                <span style={{float:'right'}}>
                  <span>
                    <Avatar icon="user" />　　欢迎您　{sessionStorage.getItem('userId')}
                  </span>
                  <Icon type="home" onClick={this.goHome.bind(this)} style={{padding:'15px'}} />
                  <Icon type="logout"  onClick={this.logout.bind(this)} style={{padding:'15px'}}/>
                </span>
              </div>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
      }
}

const loginState = (state)=>{
 // console.log(state)
  return {
    islogin:state.Loginpath.islogin
  }
}
export default withRouter(connect(loginState,{Logout})(Index))
