import React from 'react';
import { useContext, useEffect, useState } from "react";
import '../../style.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const onLogin = () => {
        console.log("login")
    }

    return (
        <div style={{padding: "7em 0"}}>
            <div className='container'>
                <div className='row justify-content-center align-items-center h-100'>
                
                    <div className='col-md-9 col-lg-6 col-xl-6 my-lg-5 py-lg-5'>
                        <img src={require("../../image/login.png")} class="img-fluid" style={{borderRadius:"1.5rem"}}></img>
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1 my-lg-5 py-lg-5 mt-3">
                        <div className='pb-3'>
                            <h3 style={{color: "#344054"}}>Culture Programmes</h3>
                            <h6 style={{color: "#667085"}}>Please fill your detail to access your account.</h6>
                        </div>
                        <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" style={{color: "#344054"}}>Username:</label>
                                <input onChange={text => setUsername(text)} value={username} name="username" type="text" class="form-control form-control-lg" placeholder="Enter your username" style={{borderRadius:"0.5rem"}}/>
                            </div>

                            <div class="form-outline mb-3">
                                <label class="form-label" style={{color: "#344054"}}>Password:</label>
                                <input onChange={text => setPassword(text)} value={password} name="password" type="password" class="form-control form-control-lg" placeholder="Enter your password" style={{borderRadius:"0.5rem"}}/>
                            </div>       
                            <div className='text-center pt-1 mt-5 pb-1'>
                                <button type='button' class="btn btn-block btn-primary w-100 buttonColor" style={{borderRadius:"0.5rem"}} onClick={onLogin()}>
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


export default Login;