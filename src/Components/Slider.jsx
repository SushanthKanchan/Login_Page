

import React from 'react'
import images1 from "../assets/pixabay-3x.png";
import images2 from "../assets/Image 40@2x.png";
import images3 from "../assets/Image 39@2x.png";

import star from "../assets/star.svg";

export default function Slider() {
    const photo = [
        {
            image: images1,
            heading: "Modern Wall Decor Framed Painting",
            money: "$199.99",
            stars: star
        },
        {
            image: images2,
            heading: "Modern Wall Decor Framed Painting",
            money: "$199.99",
            stars: star
        },
        {
            image: images3,
            heading: "Modern Wall Decor Framed Painting",
            money: "$199.99",
            stars: star
        },
       

    ]
    return (
        <div>
            {
                photo.map((item) => {
                    return (
                        <div className='p-2 inline-block snap-x'>
                            <img src={item.image} style={{ width: 252, height: 180 }} alt="" className="rounded-box" />
                            <div className='flex item-center gap-3'>
                                <p className='font-Barlow font-semibold text-sm text-[#101010]'>{item.heading}</p>
                            </div>
                            <div className='flex items-center justify-around gap-14'>
                                <p className='font-Barlow font-semibold text-lg text-[#101010]'>{item.money}</p>
                                <div className='flex items-center gap-1 '>
                                    <img src={item.stars} alt="" />
                                    <img src={item.stars} alt="" />
                                    <img src={item.stars} alt="" />
                                    
                                   
                                   
                                </div>
                            </div>
                        </div>
                    )
                })
                
            }
        </div>
    

    )
}
