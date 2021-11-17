import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function CarouselHome(props) {
    return (
        <Carousel effect="fade">
            <div>
                <h3 style={contentStyle}>
                    <img src='./img/1559986792-post.jpeg' alt='...' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src='./img/danang.jpg' alt='...' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src='./img/hochiminh.jpg' alt='...' />
                </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                    <img src='./img/vinhhalong.jpg' alt='...' />
                </h3>
            </div>
            <h3 className='text-dark text-center'>Nhờ có Host, mọi điều đều có thể</h3>
        </Carousel>
    )
}





