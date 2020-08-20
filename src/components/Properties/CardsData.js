import React from 'react'
import { SmallCarousel } from './SmallCarousel'
import img1 from '../../images/Properties/image1.jpg'
import img2 from '../../images/Properties/image2.jpg'
import img3 from '../../images/Properties/image3.jpg'
import img4 from '../../images/Properties/image4.jpg'
import img5 from '../../images/Properties/image5.jpg'
import img6 from '../../images/Properties/image6.jpg'


export const CardsData = [
    {
        id: 1,
        carousel: <SmallCarousel />,
        imgUrl: img1
    },
    {
        id: 2,
        carousel: <SmallCarousel />,
        primary: true,
        imgUrl: img2,
    },
    {
        id: 3,
        carousel: <SmallCarousel />,
        secondary: true,
        imgUrl: img3,
    },
    {
        id: 4,
        carousel: <SmallCarousel />,
        imgUrl: img4,
    },
    {
        id: 5,
        carousel: <SmallCarousel />,
        primary: true,
        imgUrl: img5,
    },
    {
        id: 6,
        carousel: <SmallCarousel />,
        secondary: true,
        imgUrl: img6,
    },
]
