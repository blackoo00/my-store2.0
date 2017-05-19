import {combineReducers} from 'redux'
import userInfo from './userInfo'
import home from './home'
import pdetails from './pdetails'
import carts from './carts'
import address from './address'
import search from './search'
import my from './my'

const rootReducer = combineReducers({
    userInfo,
    home,
    pdetails,
    carts,
    address,
    search,
    my
})

export default rootReducer
