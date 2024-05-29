import { useState } from "react"

export default function Register(){
    const [UserName,setUserName] = useState("");
    const[PassWord,setPassWord] = useState("");
    return (
        <div className="bg-red-300 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
                <input 
                value={UserName}
                onChange={ev => setUserName(ev.target.value)}
                type="text" 
                placeholder="UserName" 
                className="block w-full rounded-sm p-2 mb-2 border"></input>
                <input
                value={PassWord}
                onChange={ev => setPassWord(ev.target.value)} 
                type="password" 
                placeholder="PassWord" 
                className="block w-full rounded-sm p-2 mb-2 border"></input>
                <button className="bg-red-500 text-white block w-full rounded-sm p-2">Register</button>
            </form>

        </div>
    )
}