import request from 'superagent'

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
    const defaults = {
        url: null,
        type: 'post',
        data: {},
    }
    let promise, action

    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url)
    // .withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key])
        }
    })
    action = options.type === 'get' ? 'query' : 'send'

    return new Promise(resolve => {
        promise[action](options.data).type('form').then(res => {
            resolve(res.body)
        }).catch(err => {
            console.log(err)
        })
    })
}
function test(){
    let url ='http://127.0.0.1/my-store/index.php/Home/Store/test'
    request
       .post(url)
       .send({ name: 'Manny', species: 'cat' })
       .set('X-API-Key', 'foobar')
       .set('Accept', 'application/json')
       .end(function(res){
         if (res.ok) {
           alert('yay got ' + JSON.stringify(res.body));
         } else {
           alert('Oh no! error ' + res.text);
         }
       });
}

/**
 * @return {Object} Return url params
 */
function getURLParams() {
    const search = location.search.slice(1),
        rParam = /([^&]*)=([^&]*)/g
    let ret = {},
        param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

export default {
    ajax,
    getURLParams,
    test
}
