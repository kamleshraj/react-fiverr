import React, { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom';
import './navbar.scss';
import Logo from '../logo/Logo';

const Navbar = () => {
const[active,setActive]=useState(false)
const [open, setOpen] = useState(false);
const { pathname } = useLocation();

const isActive=()=>{
    window.scrollY > 0 ? setActive(true):setActive(false)
}
useEffect(()=>{
    window.addEventListener('scroll', isActive);
    return()=>{
        window.removeEventListener('scroll',isActive)
    }
},[])

const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
};

  return (
    <div className={active || pathname !== "/" ? "navbar active":'navbar'}>
        <div className='container'>
           <Logo/>
            <div className='nav-links'>
                <ul>
                    <li>Fiverr Business</li>
                    <li>Explore</li>
                    <li>English</li>
                    <li>Sign In</li>
                    {!currentUser?.isSeller && <li>Become a Seller</li>}
                    {currentUser?(
                        <li className='profile-user' onClick={()=>setOpen(!open)}>{ 
                        <>
                          <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                          <span>{currentUser?.username}</span>
                        </>
                        }
                        {open && <div className="options">
                            <>
                                <Link className="link" to="/mygigs">
                                Gigs
                                </Link>
                                <Link className="link" to="/add">
                                Add New Gig
                                </Link>
                                <Link className="link" to="/orders">
                                Orders
                                </Link>
                                <Link className="link" to="/messages">
                                Messages
                                </Link>
                                <Link className="link" to="/">
                                Logout
                                </Link>
                            </>
                        </div>}
                        </li>
                    ):
                    <button className='join-btn'>Join</button>}
                </ul>
            </div>
        </div>
        {(active || pathname !== "/") && (
            <>
            <hr/>
                <div className='menu'>
                    <ul>
                        <li> Graphics & Design</li>
                        <li>Video & Animation</li>
                        <li>Writing & Translation</li>
                        <li>AI Services</li>
                        <li>Digital Marketing</li>
                        <li> Music & Audio</li>
                        <li>Programming & Tech</li>
                        <li>Business</li>
                        <li>Lifestyle</li>
                    </ul>
                </div>
            </>
        )}
    </div>
  )
}

export default Navbar