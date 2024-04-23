
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import './Style.css'




export const Header = () => {
  return (
    
    <header>
        <div className='g_top bg-white py-3'>
            <div className="container  p-1">
                <div className='row justify-content-between text-center mx-auto'>
                    <div className='col-12 col-md-7'>
                             <div className='row justify-content-between align-items-center'>
                                   <div className='logo col-12 col-md-3' >
                                      <img style={{width:100,mixBlendMode:'multiply'}} src="bookmyshowlogo.png" alt="bookmyshowlogo" />
                                   </div>
                                   <div className='col-12 col-md-9'>
                                       <div className='border d-flex align-items-center p-1 px-2 gap-1 rounded-2'>
                                       <CiSearch/>
                                         <input className='border-0' type="text" placeholder='Search for Movies, Events, Plays, Sport and Activites'style={{flex:1, outline:'none'}} />
                                        </div>
                                    </div>

                             </div>
                    </div>
                    <div className='col-12 col-md-3  align-item-center'>
                        <div className='row align-items-center text-end justify-content-end'>
                            <div className='col-12 col-md-2 align-items-center '>
                                <div className='d-flex  justify-content-end gap-2'>
                                    <span>selu </span>
                                    <span className='px-2'><FaAngleDown color="#6B7188" className="mt-1 "/></span>
                                </div>
                            </div>
                             <div className='col-12 col-md-5'>
                             <button className='g_sign_up_btn border-0 text-white px-2 pb-1'>sign up</button>

                             </div>
                            <div className='col-12 col-md-2'>
                                    <RxHamburgerMenu size={25}/>
                            </div>

                        </div>

                    </div>

                </div>
          </div>
        </div>
       

       <div className='g_bottom  py-2 border-bottom pb-3'>
          <div className="container ">
            <div className='row justify-content-between'>
                <div className='col-12 col-md-5 '>
                    <ul className='gap-3 d-flex justify-content-center'>
                         <li>
                             <NavLink to={"/"} >Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/stream'}>Stream</NavLink>   
                        </li>                       
                        <li>
                            <NavLink to={"/events"}>Events</NavLink>
                        </li>                      
                        <li>
                            <NavLink to={"/plays"}>Plays</NavLink>
                        </li>
                        <li>
                           <NavLink to={'/sports'}>Sports</NavLink>
                        </li>
                        <li>
                           <NavLink to={'/acitivities'}>Acitivities</NavLink>         
                        </li> 
                    </ul>
                </div>

                <div className='col-12 col-md-4'>
                    <ul className='d-flex gap-3 justify-content-end'>
                        <li>
                            <NavLink to={'/show'}> <span>ListYourShow</span></NavLink>
                        </li>
                        <li>
                        <NavLink to={'/corporates'}> <span>Corporates</span></NavLink>

                        </li>
                        <li>
                        <NavLink to={'/offers'}> <span>Offers</span></NavLink>
                        </li> 
                        <li>
                        <NavLink to={'/gift '}> <span>Gift Cards</span></NavLink>
                        </li>
                    </ul>
                </div>

            </div>
          </div>

       </div>
    </header>
    
    
  )
}
