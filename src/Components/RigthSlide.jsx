import React from 'react'
import image1 from "../assets/ekaterina-1.png";
import image2 from "../assets/servín-2x.png";
import image3 from "../assets/pixabay-3x.png";
import image4 from "../assets/fiona-art-4.png";
import profile1 from "../assets/piacquadio2.png";
import profile2 from "../assets/shuraeva.png";
import profile3 from "../assets/shkraba3.png";
import profile4 from "../assets/shkraba-4.png";

export default function RigthSlide() {
    const sets = [
        {
            image: image1,
            profile: profile1,
            Pname: "Thomas Edward",
            username: "@thewildwithyou"
        },
        {
            image: image2,
            profile: profile2,
            Pname: "Chris Doe",
            username: "@thewildwithyou"
        },
        {
            image: image3,
            profile: profile3,
            Pname: "Emilie Jones",
            username: "@thewildwithyou"
        },
        {
            image: image4,
            profile: profile4,
            Pname: "Jessica Williams",
            username: "@thewildwithyou"
        }
        
      

    ]
    return (
        <div>
            <div className='w-64 h20- border-2 rounded-lg bg-[#88C2BB] overflow-hidden'>
                <p className='font-Gilroy font-semibold text-base text-[#FFFFFF] text-center py-6'>Become a Seller</p>
            </div>
            <div className='flex items-center gap-6'>
                <p className='font-Gilroy font-semibold text-base text-[#101010]'>Artist</p>
                <p className='font-Gilroy font-semibold text-base text-[#8D8D8D]'>Photographers</p>
            </div>
            <div>

        
                {
                    sets.map((element) => {
                        return (
                            <div>
                                <div style={{ background:`transparent URL(${element.image}) 0% 0%`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "120px", width: "244px", borderRadius: "10px" }}>
                                    <div className='flex items-center gap-4 py-14 p-2 mt-6'>
                                        <img src={element.profile} height={48} width={48} alt="" />
                                        <div className='flex items-center flex-col'>
                                            <p className='font-Gilroy font-semibold text-base text-[#FFFFFF]'>{element.Pname}</p>
                                            <p className='font-Gilroy font-medium text-xs text-[#FFFFFF]'>{element.username}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
