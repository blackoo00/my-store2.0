// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/containers/App'))
                }, 'home')
            }
        },
        childRoutes: [{
            path: 'pdetail/:id',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./pdetail/containers/PdetailsController'))
                }, 'pdetail')
            }
        },{
            path: 'cart',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./cart/containers/CartContainer'))
                }, 'cart')
            }
        },{
            path: 'confirmOrder',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./confirmOrder/containers/SettleController'))
                }, 'confirmOrder')
            }
        },{
            path: 'address',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./address/containers/ListController'))
                }, 'address')
            }
        },{
            path: 'addAddress',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./address/containers/AddController'))
                }, 'addAddress')
            }
        },{
            path: 'wxpay',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./wxpay/containers/WxpayController'))
                }, 'wxpay')
            }
        },{
            path: 'search',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./search/containers/SearchController'))
                }, 'search')
            }
        },{
            path: 'my',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./my/containers/MyController'))
                }, 'my')
            }
        },{
            path: 'qrcode',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./my/containers/QrcodeController'))
                }, 'qrcode')
            }
        }]
    }]
}

export default routes
