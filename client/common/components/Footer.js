import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const {TabBar,TabBarItem,TabBarIcon,TabBarLabel} = WeUI;

const App = () => (
    <TabBar style={{position:"fixed"}}>
        <TabBarItem>
            <Link to="home">
                <TabBarIcon>
                    <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                </TabBarIcon>
                <TabBarLabel>首页</TabBarLabel>
            </Link>
        </TabBarItem>
        <TabBarItem>
            <Link to="cart">
                <TabBarIcon>
                    <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                </TabBarIcon>
                <TabBarLabel>购物车</TabBarLabel>
            </Link>
        </TabBarItem>
        <TabBarItem>
            <Link to="search">
                <TabBarIcon>
                    <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                </TabBarIcon>
                <TabBarLabel>搜索</TabBarLabel>
            </Link>
        </TabBarItem>
        <TabBarItem>
            <TabBarIcon>
                <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
            </TabBarIcon>
            <TabBarLabel>我的</TabBarLabel>
        </TabBarItem>
    </TabBar>
)

export default App
