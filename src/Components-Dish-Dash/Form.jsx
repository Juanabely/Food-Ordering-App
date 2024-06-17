// LoginForm.jsx

import React, { useState } from 'react';
import '../LoginForm.css'


const LoginForm = ({styles,type,name,setValues,loading}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

 
  const values={"username":username,"password":password}
  const valuesSignOut ={
	"username":username,
	"email":email,
	"password":password,
	"phone":phone,
	"location":location,
  }
  const sendValues=()=>{
    setValues(type === 'sign-up' ? valuesSignOut : values)
  }
  return (
    <div className="section rounded-lg">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
					
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3 text-[20px] text-[#c4c3ca]">{name}</h4>
											{type === 'sign-in' ? <>
                    <div className="form-group">
                    <span className='flex justify-start mb-2 text-[#c4c3ca]'>Username</span>
                     <input type="text" name="username" className="form-style" placeholder="Your username" id="logemail" autoComplete="off" value={username} onChange={(e)=>{
                      setUsername(e.target.value);
                     }}/>
                     <i className="input-icon uil uil-at"></i>
                   </div>	

                   <div className="form-group mt-5">
                   <span className='flex justify-start mb-2 text-[#c4c3ca]'>Password</span>
                     <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" value={password} onChange={(e)=>{
                      setPassword(e.target.value);
                     }}/>
                     <i className="input-icon uil uil-lock-alt"></i>
                   </div>

                    </> :<>

                   <div className="form-group">
                       <span className='flex justify-start mb-2 text-[#c4c3ca]'>Email</span>
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"
												value={email} onChange={(e)=>{
													setEmail(e.target.value);
												   }}
												/>
												<i className="input-icon uil uil-at"></i>
											</div>	

											<div className="form-group mt-5">
                      <span className='flex justify-start mb-2 text-[#c4c3ca]'>Username</span>
												<input type="username" name="username" className="form-style" placeholder="Your username" id="logusername" autoComplete="off"
												value={username} onChange={(e)=>{
													setUsername(e.target.value);
												   }}
												/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<div className="form-group mt-5">
                      <span className='flex justify-start mb-2 text-[#c4c3ca]'>Password</span>
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"
												value={password} onChange={(e)=>{
													setPassword(e.target.value);
												   }}
												/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>

											<div className="form-group mt-5">
                      <span className='flex justify-start mb-2 text-[#c4c3ca]'>Phone</span>
												<input type="Phone" name="phone" className="form-style" placeholder="Your Phone number" id="logpass" autoComplete="off"
												value={phone} onChange={(e)=>{
													setPhone(e.target.value);
												   }}
												/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>

											<div className="form-group mt-5">
                      <span className='flex justify-start mb-2 text-[#c4c3ca]'>Location</span>
												<input type="location" name="location" className="form-style" placeholder="Your location" id="logpass" autoComplete="off"
												value={location} onChange={(e)=>{
													setLocation(e.target.value);
												   }}
												/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                   </>

                    }
											
											<button className="btn mt-4" disabled={loading} onClick={()=>{
                        sendValues();
                        
                        console.log(values)
                      }}>{loading ? <>loading....</> : <>Submit</>}</button>
                            				<p className="mb-0 mt-4 text-center"><a href={type === 'sign-in'? '/register' : '/login'}className="link">
												{
													type === 'sign-in' ? <span>
														Don't have an account Sign Up
													</span> : <span>
														Already have an account Sign In
													</span>
												}
												</a></p>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
  );
};

export default LoginForm;
