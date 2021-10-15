import React from 'react';
import { Button } from './Button';
import './UserSection.css';
// import image1 from '.../public/image/patient1.jpg'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function UserSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='services__section'>
        <div className='services__wrapper'>
          <h1 className='services__heading'>SERVICES</h1>
          <div className='services__container'>
            <Link to='/sign-up' className='services__container-card'>
              <div className='services__container-cardInfo'>
                <div className='image'>
                <BsXDiamondFill />
                </div>
                <h3>TICKET BOOKING </h3>
                <br></br>
                <p>Ticket Booking is one of the services we offer </p>
                <ul className='services__container-features'>
                  <li>EASY and FAST SERVICE</li>
                  <li>CONVINENT</li>
      
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  SIGN UP
                </Button> */}
              </div>
            </Link>
            <Link to='/sign-up' className='services__container-card'>
              <div className='services__container-cardInfo'>
                <div className='image'>
                  <BsXDiamondFill />
                </div>
                <h3>HOTEL BOOKING</h3>
                <br></br>
                <p>Hotel Booking is one of the services we offer</p>
                <ul className='services__container-features'>
                <li>EASY and FAST SERVICE</li>
                  <li>CONVINENT</li>
                 
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                  SIGN UP
                </Button> */}
              </div>
            </Link>
            <Link to='/sign-up' className='services__container-card'>
              <div className='services__container-cardInfo'>
                <div className='image'>
                <BsXDiamondFill />
                </div>
                <h3>FLIGHT BOOKING</h3>
                <br></br>
                <p> FLIGHT Booking is one of the services we offer</p>
                <ul className='services__container-features'>
                <li>EASY and FAST SERVICE</li>
                  <li>CONVINENT</li>
                  
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  SIGN UP
                </Button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default UserSection;