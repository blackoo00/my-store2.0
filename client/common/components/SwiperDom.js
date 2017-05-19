import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'

const SwiperDom = ({list}) => (
    <ReactSwipe className="carousel" swipeOptions={{auto: 2500}}>
        {list.map(item => (
            <div key={item.id}>
                <img src={item.url} />
            </div>
        ))}
    </ReactSwipe>
)

// SwiperDom.PropTypes = {
//     list:PropTypes.array.isRequired
// }



export default SwiperDom
