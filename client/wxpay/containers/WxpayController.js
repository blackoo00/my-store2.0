import React,{Component} from 'react';
import CommonHeader from '../../common/components/weui/';
import Details from '../components/wxpay';

class App extends Component{
    jsApiCall(){
        $.getJSON(STORESERVER+'wxPay', function(json, textStatus) {
                var b=json.data;
        });
        // var b={wghd:$parameters};
        WeixinJSBridge.invoke(
                'getBrandWCPayRequest',
                {
                     "appId":b.appId,
                     "nonceStr":b.nonceStr,
                     "package":b.package,
                     "paySign":b.paySign,
                     "signType":b.signType,
                     "timeStamp":b.timeStamp
                },
                function(res){
                    if(res.err_msg == 'get_brand_wcpay_request:ok'){
                        alert('恭喜您，支付成功!更新可能会有5～10秒延迟，请稍后查看电子票!');
                        window.location.href = '<?php echo ROOT ?>/index.php?r=index/index&c=1';     //登录成功 跳转到主要页面

                    }else{
                         alert(JSON.stringify(res));
                    }
                }
        );
    }
    callpay(){
        if (typeof WeixinJSBridge == "undefined"){
            if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', this.jsApiCall,false);
            }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
                document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
            }
        }else{
            this.jsApiCall();
        }
    }
    render(){
        var order_sn = this.props.location.query.order_sn;
        var user_name = this.props.location.query.user_name;
        var total_fee = this.props.location.query.total_fee;
        return(
            <div style={{background:'#fff',height:'100%',position:'fixed',width:'100%'}}>
                <CommonHeader value="付款详细"/>
                <Details
                    order_sn = {order_sn}
                    user_name = {user_name}
                    total_fee = {total_fee}
                    callpay = {() => {this.callpay()}}
                />
            </div>
        )
    }
}

export default App
