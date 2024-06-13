import React from 'react'
import Header from './Header';
import MidSlide from './MidSlide';
import RigthSlide from './RigthSlide';

export default function IndexMain() {
    return (
        <div>
            <div className='flex gap-6 p-4 h-screen w-screen ites-center justify-center overflow-x-auto'>
                <Header />
                <MidSlide />
               <RigthSlide />
            </div>
        </div>
    )
}
