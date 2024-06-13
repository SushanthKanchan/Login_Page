import React from 'react'
import Home from "../assets/home.svg";
import Notification from "../assets/notification.svg";
import Shop from "../assets/shop.svg";
import Chatbox from "../assets/chatbox.svg";
import Wallet from "../assets/wallet.svg";
import Sub from "../assets/subscription.svg";
import Profile from "../assets/profile.svg";
import Setting from "../assets/setting.svg";
import Log from "../assets/logout.svg";

export default function Header() {
    const sideShow = [
        {
            logos: Home,
            heading: "Home",
        },
        {
            logos: Notification,
            heading: "Notifications",
        },
        {
            logos: Shop,
            heading: "Shop",
        },
        {
            logos: Chatbox,
            heading: "Conversation",
        },
        {
            logos: Wallet,
            heading: "wallet",
        },
        {
            logos: Sub,
            heading: "Subscription",
        },
        {
            logos: Profile,
            heading: "My profile",
        },
        {
            logos: Setting,
            heading: "Setting",
        }
    ]
    return (
        <div>
            <div className='w-64 max-h-screen border-2 rounded-lg bg-[#FFFFFF] overflow-hidden'>
                <h1 className='font-mono font-normal text-4xl text-left p-4 text-[#101010]' >LOGO</h1>
            </div>
            <div className='flex itms-center justify-between flex-col w-64 h-[600px] border-2 bg-[#FFFFFF] mt-6'>
                <div>
                    {
                        sideShow.map((ele) => {
                            return (
                                <div className='flex items-center gap-3 p-4'>
                                    <img src={ele.logos} alt="" />
                                    <h1 className='font-semibold text-base text-[#8D8D8D]'>{ele.heading}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center gap-3 p-4'>
                    <img src={Log} alt="" />
                    <h1 className='font-semibold text-base text-[#8D8D8D]'>Log out</h1>
                </div>
            </div>
        </div>
    )
}
