import utils from './utils';
// import $ from 'zepto';

const STORESERVER="http://127.0.0.1/my-store/index.php/Home/Store/",
ADDRESSSERVER="http://127.0.0.1/my-store/index.php/Home/Address/",
MYSERVER="http://127.0.0.1/my-store/index.php/Home/My/";
const initialArr = {
    url:'',
    data:{},
    async:true,
    type:'get',
    server:STORESERVER,
}

const ajaxData = (arr = initialArr,callback = function(){}) => {
    arr = {...initialArr,...arr}
    // $.ajax({
    //     url: arr.server + arr.url,
    //     data:arr.data,
    //     async:arr.async,
    //     type:arr.type,
    //     dataType:'json',
    //     success:function(res){
    //         console.log(res);
    //         callback(res.data)
    //     }
    // })
    utils.ajax({
        url: arr.server + arr.url,
        data:arr.data,
        async:arr.async,
        type:arr.type,
        dataType:'json',
    }).then(res => {
        console.log(res)
        callback(res.data)
    })
}

const TIMEOUT = 100


export default {
    //个人信息初始化
    myInfoInit:(cb) => {
        let data = {
            server:MYSERVER,
            url:'getMyInfo'
        }
        ajaxData(data,cb);
    },
    //首页初始化
    indexInit:(cb) => {
        let data = {
            url:'index',
        }
        ajaxData(data,cb);
    },
    //搜索页滚动加载更多
    getMorePro:(cb,count,load_num) => {
        let data = {
            url:'scrollLoadPro',
            data:{count:count,load_num:load_num}
        }
        ajaxData(data,cb)
    },
    //获取商品列表
    getProList:(cb) => {
        let data = {
            url:'proList',
            async:false
        }
        ajaxData(data,cb)
    },
    //添加地址
    addAddress:(cb,name,tel,address) => {
        let data = {
            server:ADDRESSSERVER,
            url:'add',
            type:'post',
            data:{consignee:name,tel:tel,address:address},
        }
        ajaxData(data,cb)
    },
    //设置默认地址
    setDefaultAddress:(aid,cb) => {
        let data = {
            server:ADDRESSSERVER,
            url:'choose',
            data:{id:aid},
        }
        ajaxData(data,cb)
    },
    //获取个人地址列表
    getMyAddresses:(cb,timeout) => setTimeout(() => {
        let data = {
            server:ADDRESSSERVER,
            async:false,
            url:'showList'
        }
        ajaxData(data,cb)
    },timeout || TIMEOUT),
    //获取默认地址
    getDefaultAddress:(cb, timeout, callback) => setTimeout(() => {
        let data = {
            server:ADDRESSSERVER,
            url:'getDefaultAddress',
            async:false
        }
        ajaxData(data,cb)
    },timeout || TIMEOUT),
    //获取购物车全部信息
    getProducts: (cb, timeout, arg) => setTimeout(() => {
        let data = {
            url:'getCartList',
            async:false
        }
        ajaxData(data,cb)
    }, timeout || TIMEOUT),
    //获取商品详情
    getProDetails:(cb,pid,timeout) => setTimeout(() => {
        let data = {
            url:'getProDetail',
            data:{pid:pid},
            async:false
        }
        ajaxData(data,cb)
    },timeout || TIMEOUT),
    //收藏商品
    collectionProduct:(pid,callback) => {
        let data = {
            url:'collection',
            data:{pid:pid},
            async:false
        }
        ajaxData(data,cb)
    },
    //添加购物车商品数量
    addCartProduct: (cart_id,cb,timeout) => setTimeout(() => {
        let data = {
            url:'addCartProduct',
            data:{cid:cart_id},
        }
        ajaxData(data,cb)
    },timeout || TIMEOUT),
    //减少购物车商品数量
    delCartProduct: (cart_id,cb, timeout) => setTimeout(() => {
        let data = {
            url:'delCartProduct',
            data:{cid:cart_id},
        }
        ajaxData(data,cb)
    },timeout || TIMEOUT),
    //删除购物车指定商品
    removeCartProById: (cart_id,cb) => {
        let data = {
            url:'deleteCartById',
            data:{cid:cart_id},
            type:'get'
        }
        ajaxData(data,cb)
        // utils.test();
        // utils.ajax({
        //     url: 'http://127.0.0.1/my-store/index.php/Home/Store/deleteCartById',
        //     type: 'post',
        //     data:{cid:cart_id}
        // }).then(res => {
        //     console.log(res);
        // })
    },
    //保存选择的购物车商品
    settleCart: (cart_ids,cb) => {
        let data = {
            url:'settleCart',
            data:{cart_ids:cart_ids.join(",")},
        }
        ajaxData(data,cb)
    },
    //加入购物车
    addCart: (pid,did,num,cb) =>{
        let data = {
            url:'addProductToCart',
            data:{pid:pid,did:did,num:num}
        }
        ajaxData(data,cb)
    },
    //提交订单
    handleSubmitOrder:(remark,cb) =>{
        let data = {
            url:'orderSave',
            data:{postscript:remark},
            type:'post',
            async:false
        }
        ajaxData(data,cb)
        // let return_data = ajaxData({url:'orderSave',data:{postscript:remark},async:false,type:'post'});
        // if(Object.keys(return_data).length > 0){
        //     cb(return_data.order_sn,return_data.user_name,return_data.total_fee)
        // }
    },
}
