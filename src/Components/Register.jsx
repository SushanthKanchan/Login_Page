import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from './Firebass';
import { setDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';


export default function Register() {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                })
            }
            console.log("User Registered Successfully!!");
            alert("User Registered Successfully!!")
        } catch (error) {
            console.error();
            alert(error.message)
        }
    }


    return (
        <div className='h-screen bg-slate-700	'>
           

        
        <div className="h-[500px] w-[30%] border-2 border-solid  border-[#ff6d05] bg-translate shadow-white shadow-lg  text-center relative left-[30%] bottom-[-80px]">
            <h1 className='text-center m-[6%] font-serif text-yellow-500 text-[30px]'>Register Page</h1>

            <div  >
                <input type="text"
                    placeholder='Enter first Name '
                    className='border-b-2  text-white bg-inherit border-solid border-blue-400 h-[40px] m-[10px] w-[70%] text-white p-2'
                    onChange={(e) =>
                        setfname(e.target.value)}


                />
            </div>

            <div >

                <input type="text"
                    placeholder='Enter last Name'
                    className='border-b-2  text-white bg-inherit border-solid border-blue-400 h-[40px] m-[10px] w-[70%] text-white p-2'
                    onChange={(e) => setlname(e.target.value)}
                />

            </div>
            <div >

                <input type="email"
                    placeholder='Enter Email'
                    className='border-b-2  text-white bg-inherit border-solid border-blue-400 m-[10px] h-[40px] w-[70%] text-black p-2'
                    onChange={(e) => setemail(e.target.value)}
                    required

                />

            </div>
            <div >

                <input type="password"
                    placeholder='Enter Password'
                    className='border-b-2  text-white bg-inherit border-solid border-blue-400 h-[40px] m-[10px] w-[70%] text-white p-2'
                    onChange={(e) => setpassword(e.target.value)}
                    required
                />

            </div>

            <div >
                <button type='submit' onClick={handleRegister} className='m-[5%] h-[50px] text-white w-[70%] bg-blue-500 rounded-[5px] border-2 border-solid  border-blue-400 shadow-white shadow-md ' >Sign up</button>
            </div>

            <div >
                <h3 className='text-white text-[18px]' >Already registered :-  <Link to="/login" className='decoration-none m-2  text-white'>Login </Link></h3>
            </div>
        </div>
        </div>

    )
}
