import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './Firebass';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navi = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("User logged in Successfully ");
            navi("/home")
        } catch (error) {
            console.error();
            alert("Invalid Email Or Password")
        }

    }


    return (
        <div className='bg-black h-screen'>
        <div className='border-solid border-2 border-[#ff6d05]  shadow-white shadow-lg  bg-translate h-[450px] w-[30%] text-black text-center relative left-[30%] bottom-[-80px]'>
            <h1 className='text-center m-[10%] text-red-500 font-serif  text-[30px]' >
                USER LOGIN
            </h1>
            <div >
                <input type="email" className=' h-[40px] w-[70%] m-2.5 text-white bg-inherit border-b-2 border-solid border-[#A69080] '
                    placeholder='Enter the email'
                    onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div >
                <input type="password" className=' h-[40px] w-[70%] m-2.5 text-white border-b-2 bg-inherit border-solid border-[#A69080] '
                    placeholder='Enter the Password'
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <div className="relative right-24 m-2.5  text-white" >
                <input type="checkbox" required /> Remember me

            </div>

            <div >
                <button onClick={handleSubmit} className='m-[5%]  text-white bg-inherit h-[40px] w-[70%] border-solid border-2 border-[#A69080]  rounded-lg' >LOGIN</button>
            </div>
            <div className="">
                <h5 className='text-[15px] text-white '>Don't have an account?<Link to="/register" className=' m-2 decoration-none text-white '> Register Here </Link></h5>
                    
            </div>
        </div>
        </div>
    )
}
