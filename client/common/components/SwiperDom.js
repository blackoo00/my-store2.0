import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'

const SwiperDom = ({list}) => (
    <ReactSwipe className="carousel" swipeOptions={{auto: 2500}} id="swiper-dom">
        {list.map(item => (
            <div key={item.id}>
                <img src={item.url} />
            </div>
        ))}
    </ReactSwipe>
)


export default SwiperDom
