import React from 'react';
import { useContext, useEffect, useState } from "react";
import '../../style.css'
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    
    async function onLogin(event) {
        console.log("Attempted to login")
        // event.preventDefault()
        // const response = await fetch('http://localhost:3000/login/admin, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		username,
		// 		password,
		// 	}),
		// })

		// const data = await response.json()

		// if (data.user) 
        // {
		// 	localStorage.setItem('authenticated', data.user)
		// 	alert('Login successful')
         navigate('/admin', {replace: true})
		// } 
        // else {
		// 	alert('Please check your username and password')
		// }
    }

    return (
        <div style={{padding: "7em 0"}}>
            <div className='container'>
                <div className='row justify-content-center align-items-center h-100'>
                
                    <div className='col-md-9 col-lg-6 col-xl-6 my-lg-5 py-lg-5'>
                        <img src={require("../../image/admin.png")} className="img-fluid" style={{borderRadius:"1.5rem"}}></img>
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1 my-lg-5 py-lg-5 mt-3">
                        <div className='pb-3'>
                            <h3 style={{color: "#344054"}}>Culture Programmes (Admin)</h3>
                        </div>
                        <form>
                            <div className="form-outline mb-4">
                                <label className="form-label" style={{color: "#344054"}}>Username:</label>
                                <input onChange={text => setUsername(text.target.value)} value={username} name="username" type="text" className="form-control form-control-lg" placeholder="Enter your username" style={{borderRadius:"0.5rem"}}/>
                            </div>

                            <div className="form-outline mb-3">
                                <label className="form-label" style={{color: "#344054"}}>Password:</label>
                                <input onChange={text => setPassword(text.target.value)} value={password} name="password" type="password" className="form-control form-control-lg" placeholder="Enter your password" style={{borderRadius:"0.5rem"}}/>
                            </div>       
                            <div className='text-center pt-1 mt-4'>
                               <span style={{color: "#667085"}}>
                                Click <a href='/login/user'>here</a> to back to User Login.                               
                               </span>
                            </div>
                            <div className='text-center pt-1 mt-4 pb-1'>
                                <button type='button' className="btn btn-block btn-primary w-100 buttonColor" style={{borderRadius:"0.5rem"}} onClick={(e)=> {onLogin()}}>
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AdminLogin;