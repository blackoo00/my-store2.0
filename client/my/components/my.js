import React from 'react';
import styles from '../sass/_my.scss';
import CSSModules from 'react-css-modules';
import WeUI from 'react-weui';
const {TabBar,TabBarItem,TabBarIcon,TabBarLabel,Cells,Cell,CellBody,CellFooter,CellHeader} = WeUI;
import {Link} from 'react-router';

const App = ({info}) => (
    <div styleName="my-wrap">
        <div styleName="user">
            <div styleName="set-btn">
                <p>设置</p>
            </div>
            <div styleName="user-photo">
                <input type="file" id="headimgurl" name="headimgurl"/>
                <img src={info.headimgurl}/></div>
            <div styleName="user-nick">
                <p styleName="nick" id="J_myNick">{info.name}</p>
                <p styleName="level3"></p>
            </div>
        </div>
        <section styleName="user-behavior">
            <ul data-spm="1">
                <li>
                    <a href="#">
                        <p>41</p>
                        <p>收藏的宝贝</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>17</p>
                        <p>收藏的店铺</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>42</p>
                        <p>我的足迹</p>
                    </a>
                </li>
            </ul>
        </section>
        <TabBar style={{position:'initial'}}>
            <TabBarItem>
                <Link to="home">
                    <TabBarIcon>
                        <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                    </TabBarIcon>
                    <TabBarLabel>代付款</TabBarLabel>
                </Link>
            </TabBarItem>
            <TabBarItem>
                <Link to="cart">
                    <TabBarIcon>
                        <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                    </TabBarIcon>
                    <TabBarLabel>代付款</TabBarLabel>
                </Link>
            </TabBarItem>
            <TabBarItem>
                <Link to="search">
                    <TabBarIcon>
                        <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                    </TabBarIcon>
                    <TabBarLabel>代付款</TabBarLabel>
                </Link>
            </TabBarItem>
            <TabBarItem>
                <TabBarIcon>
                    <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                </TabBarIcon>
                <TabBarLabel>代付款</TabBarLabel>
            </TabBarItem>
            <TabBarItem>
                <TabBarIcon>
                    <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"/>
                </TabBarIcon>
                <TabBarLabel>代付款</TabBarLabel>
            </TabBarItem>
        </TabBar>
        <Cells>
                <Link to="qrcode">
            <Cell access>
                    <CellHeader>
                        <img src="http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png" style={{width:'25px'}}/>
                    </CellHeader>
                    <CellBody>
                        二维码
                    </CellBody>
                    <CellFooter/>
            </Cell>
                </Link>
        </Cells>
    </div>
)

export default CSSModules(App,styles)
