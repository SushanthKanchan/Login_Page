import React from 'react'
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import Lara from "../assets/lara.png";
import Lara1 from "../assets/Lara-1.png";
import thomos from "../assets/thomos.png";
import thomos1 from "../assets/thomos-1.png";
import like from "../assets/heart.png";
import comment from "../assets/comment.png";
import dots from "../assets/dots.png";
import share from "../assets/share.png";
import Slide from "./Slider";

export default function MidSlide() {
    const container = [
        {
            person: Lara,
            name: "Lara Leones",
            username: "@thewallart",
            menu: "",
            para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: Lara1
        },
        {
            person: thomos,
            name: "Thomas J.",
            username: "@thecustomcreater",
            menu: "",
            para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
            image: thomos1
        },
    ]
    return (
        <div className='h-screen'>
            <div className='w-[620px] border-2 bg-[#FFFFFF] p-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={search} alt="" />
                        <p className='font-Gilroy font-medium text-xs text-[#9A9A9E]' >search here</p>
                    </div>
                    <div className='flex items-center gap-2' >
                        <img src={filter} alt="" />
                        <p className='font-Gilroy font-medium text-xs text-[#303030]' >Filters</p>
                    </div>
                </div>
            </div>
            <div className='h-screen overflow-y-scroll'>
                {
                    container.map((items) => {
                        return (
                            <div className='w-[620px] h-[590px] border-2 bg-[#F5F5F5] p-5 mb-5 mt-6'>

                                <div className='flex ites-center justify-between'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div>
                                            <img src={items.person} height={48} width={48} alt="" />
                                        </div>
                                        <div className='flex items-left flex-col '>
                                            <p className='font-Gilroy font-semibold text-xl text-[#101010]'>{items.name}</p>
                                            <p className='font-Gilroy font-medium text-sm text-[#8D8D8D]'>{items.username}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <img src={dots} height={30} width={30} alt="" srcset="" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-Gilroy font-medium text-smtext-[#101010] mb-6'>{items.para}.Read More</p>
                                    <img src={items.image} alt="" />
                                </div>
                                <div className='flex items-center gap-8 mt-10'>
                                    <div className='flex items-center gap-2'>
                                        <img src={like} alt="" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>9.8k</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={comment} alt="" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>8.6k</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={share} alt="" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>7.2k</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Slide />
            </div>
        </div>
    )
}
