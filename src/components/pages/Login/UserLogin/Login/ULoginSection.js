import React from 'react';
import './ULoginSection.css';
import {  GiAnatomy  } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function ULoginSection() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='user__section'>
        <div className='user__wrapper'>
          <h1 className='user__heading'>User</h1>
          <div className='user__container'>
            {/* //Here after clicking on buttonAd which page to open */}
            <Link to = "/login-user" className='user__container-card'>
              <div className='user__container-cardInfo'>
                <div className='image'>
                <GiAnatomy />
                </div>
            {/* LOGIN DETAILS */}
              <form action="action_page.php" method="post">
                <div class="container">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <buttonU type="submit">Login</buttonU>
                 </div>
              </form>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default ULoginSection;