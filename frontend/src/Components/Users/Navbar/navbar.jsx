import React from 'react';
import './navbar.css'
import Logo from '../../../Images/logo.png'
import Location from '../../../Images/location.png'
import Cart from '../../../Images/cart.png'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../actions/userActions';



function Home() {

  const navigate = useNavigate()

  const dispatch = useDispatch()





  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const userSignIn = useSelector((state) => state.userSignin)
  const { userInfo } = userSignIn;

  const signOutHandler = () => {
    dispatch(signout());
  }


  return (
    <div className='navcontainer'>
      <div className='navbarContainer'>
        <header className="userHomeHeader">
          <div className="row logoRowHomeHeader">
            <div className='amazonNavLogoDiv'>
              <a onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}><img className='amazonNavLogo' src={Logo} alt="" /></a>
            </div>
            <div className="locationRowHomeHeader">
              <div className='locationNavLogoDiv'>
                <a onClick={(e) => {
                  e.preventDefault()
                  navigate('/')
                }}><img className='locationNavLogo' src={Location} alt="" /></a>
              </div>
              <div className="navShippingAddressDiv">
                <p className="navText">{shippingAddress ? 'Deliver to '+ shippingAddress.name : 'Hello'}<br /><span className="navHighText">{shippingAddress ? 'Deliver to '+ shippingAddress.name : 'Hel'}</span></p>
              </div>
            </div>
            <div className='navTextDivAccount'>
              <a> <p className='navText'>Hello, {userInfo ? userInfo.name : 'Sign in'} <br /><span className='navHighText'>Account & Lists </span><i class="fas fa-caret-down"></i></p></a>
              <ul className='dropdown-content' >
                <div className='navSignDiv'> <br /> {userInfo ? <button className='navSignOutBtn' onClick={signOutHandler} >Sign out</button> : <button className='navSignInBtn' onClick={(e) => {
                  e.preventDefault()
                  navigate('/login')
                }} >Sign in</button>}</div>
              </ul>
            </div>
            <div className='navTextDivOrders'>
              <Link to={'/orderhistory'}><p className='navText'>Returns <br /><span className='navHighText'>& Orders</span></p></Link>
            </div>
            <div className='navTextDivCart'>
              <Link to="/cart/:id"><img className='cartNavLogo' src={Cart} alt="" /><div className='navCartCountDiv'><span className='navCartCountText'>{cartItems.length}</span></div><p className='navHighText cartText'>Cart</p></Link>
            </div>
          </div>
          <div className="row departmentRowHomeHeader">

          </div>
        </header>
      </div>
    </div>
  )
}

export default Home;
