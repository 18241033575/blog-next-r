import React, { Component } from 'react'
/*import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route
} from 'react-router-dom';*/
import {Layout, Menu, Breadcrumb, Avatar, Badge } from 'antd';
// import { Icon } from '@ant-design/compatible';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link'
import User from './User'

import 'antd/dist/antd.css'

const { SubMenu } = Menu;



// import Login from '../Login/Login'
// import Register from '../Register/Register'
// import './Index.css'
// import Home from '../Home/Home';
// import Note404 from '../Note404/Note404';
// import NetUser from '../NetUser/NetUser';
// import NewsCenter from '../NewsCenter/NewsCenter';
// import CategorySysterm from '../CategorySysterm/CategorySysterm';
// import ArticleList from '../ArticleList/ArticleList';
// import CommentManage from '../CommentManage/CommentManage';
// import Administor from '../Administor/Administor';
// import Schedule from '../Schedule/Schedule';
// import NetSetting from '../NetSetting/NetSetting';
// import ChangePassword from '../ChangePassword/ChangePassword';
// import Disclaimer from '../Disclaimer/Disclaimer';
// import BaseMsg from '../BaseMsg/BaseMsg';
// import AboutMe from '../AboutMe/AboutMe';
// import Login from '../Login/Login'


const {Header, Content, Footer, Sider} = Layout;


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            openKeys: [],
            userMsg: {
                name: '',
                age: ''
            },
            changeLogin: true
        }
    }

    // 登陆
    getLogin = (state) => {
        this.setState({
            isLogin: state
        })
    };

    componentWillMount() {
        // 处理思路：拿到账号和密码请求后台，通过给登录状态
        // let userInfo = JSON.parse(localStorage.getItem('USER'));
        // 登陆过期时间3天
        // userInfo && (new Date().getTime() - userInfo.validityDate) < 3 * 24 * 3600 * 1000 ? this.setState({isLogin: true}) : this.setState({isLogin: false});
    }

    loginState = (state) => {
        this.setState({
            changeLogin: state
        })
    };

    rootSubmenuKeys = ['sub1', 'sub4', 'sub5', 'sub8'];

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    onItem1 = () => {
        this.setState({
            openKeys: [],

        })
    };
    onCollapse = ()=> {
        this.setState({
            collapsed: !this.state.collapsed
        })
    };



    render() {
        return (

                        <div>
                            <Layout style={{minHeight: '100vh'}}>
                                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                                    <div className="logo">
                                        <img src="/static/img/logo.jpg" alt="logo"/>
                                    </div>
                                    <Menu
                                        theme="dark"
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        openKeys={this.state.openKeys}
                                        onOpenChange={this.onOpenChange}
                                        inlineCollapsed={this.state.collapsed}
                                    >
                                        <Menu.Item
                                            key="1"
                                            onClick={this.onItem1}
                                        >
                                           {/* <NavLink exact to={'/'}>
                                                <Icon type="home"/>
                                                <AppstoreOutlined />
                                                <span>首页</span>
                                            </NavLink>*/}
                                            <Link href={"/"}>
                                                {/*<AppstoreOutlined />*/}
                                                <span>首页</span>
                                            </Link>
                                        </Menu.Item>
                                        <SubMenu
                                            key="sub1"
                                            title={
                                                <span>
                                                  <AppstoreOutlined />
                                                  <span>应用</span>
                                                </span>
                                            }
                                        >
                                            <SubMenu
                                                key="sub2"
                                                title={
                                                    <span>
                                                  <AppstoreOutlined />
                                                  <span>内容系统</span>
                                                </span>
                                                }
                                            >
                                                <Menu.Item key="2">
                                                    <Link href={'/system/article'}>
                                                        文章列表
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item key="3">
                                                    <Link href={'/system/category'}>
                                                        分类管理
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item key="4">
                                                    <Link href={'/system/comment'}>
                                                        评论管理
                                                    </Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <SubMenu
                                                key="sub3"
                                                title={
                                                    <span>
                                                  <AppstoreOutlined />
                                                  <span>社区系统</span>
                                                </span>
                                                }
                                            >
                                                <Menu.Item key="5">帖子列表</Menu.Item>
                                                <Menu.Item key="6">回帖列表</Menu.Item>
                                            </SubMenu>
                                            <Menu.Item key="7">
                                                <Link href={'/system/news'}>
                                                    消息中心
                                                </Link>
                                            </Menu.Item>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub4"
                                            title={
                                                <span>
                                                  <AppstoreOutlined />
                                                  <span>用户</span>
                                                </span>
                                            }
                                        >
                                            <Menu.Item key="8">
                                                <Link href={'/User'}>
                                                    网站用户
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="9">
                                                <Link href={'/user/administor'}>
                                                    后台管理员
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="10">
                                                <Link href={'/user/schedule'}>
                                                    我的日程
                                                </Link>
                                            </Menu.Item>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub5"
                                            title={
                                                <span>
                                                  <AppstoreOutlined />
                                                  <span>设置</span>
                                                </span>
                                            }
                                        >
                                            <SubMenu
                                                key="sub6"
                                                title={
                                                    <span>
                                                 <AppstoreOutlined />
                                                  <span>系统设置</span>
                                                </span>
                                                }
                                            >
                                                <Menu.Item key="11">
                                                    <Link href={'/setting/netsetting'}>
                                                        网站设置
                                                    </Link>
                                                </Menu.Item>
                                            </SubMenu>
                                            <SubMenu
                                                key="sub7"
                                                title={
                                                    <span>
                                                  <AppstoreOutlined />
                                                  <span>我的设置</span>
                                                </span>
                                                }
                                            >
                                                <Menu.Item key="12">
                                                    <Link href={'/myset/basemsg'}>
                                                        基本资料
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item key="13">
                                                    <Link href={'/myset/changepassword'}>
                                                        修改密码
                                                    </Link>
                                                </Menu.Item>
                                            </SubMenu>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub8"
                                            title={
                                                <span>
                                                  <AppstoreOutlined />
                                                  <span>其他</span>
                                                </span>
                                            }
                                        >
                                            <Menu.Item key="14">
                                                <Link href={'/disclaimer'}>
                                                    免责声明
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="15">
                                                <Link href={'/aboutme'}>
                                                    个人信息
                                                </Link>
                                            </Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </Sider>
                                <Layout>
                                    <Header style={{background: '#fff', padding: 0}}>
                                        <Avatar size={36} icon="user"/>
                                        <span>{this.state.userMsg.name}</span>
                                        <Badge count={this.state.userMsg.age} showZero>
                                            <Avatar size={36} icon="message">
                                                <span className="head-example" />
                                            </Avatar>
                                        </Badge>
                                    </Header>
                                    <Content style={{margin: '0 16px'}}>
                                        <Breadcrumb style={{margin: '16px 0'}}>
                                            <Breadcrumb.Item>User</Breadcrumb.Item>
                                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                        </Breadcrumb>
                                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                            <User />
                                        </div>
                                    </Content>
                                    <Footer style={{textAlign: 'center'}}>Blog Manage ©2019 Created by Jayshi</Footer>
                                </Layout>
                            </Layout>
                        </div>

              /*  {
                    !this.state.isLogin && this.state.changeLogin && (
                        <div className={'router'}>
                            <Login changeLogin={this.loginState} getLogin={this.getLogin} />
                        </div>
                    )
                }
                {
                    !this.state.isLogin && !this.state.changeLogin && (
                        <div className={'router'}>
                            <Register changeLogin={this.loginState} getLogin={this.getLogin} />
                        </div>
                    )
                }*/
        );
    }
}