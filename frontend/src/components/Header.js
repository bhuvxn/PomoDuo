


import React from 'react'

const Header = () => {
  return (
    <div class="HeaderBar">
        <div class="LogoHeader">
            <img src="https://mockflow.com/images/home-images2/mfLogoWhite.png" alt="Logo co."/>
        </div>
        <div class="MenuMobile None" id="MenuMobile">
            <div class="BoxMenuMobile">
                <div class="LogoMenu">
                    <img src="https://mockflow.com/images/home-images2/mfLogoWhite.png" alt="Logo co."/>
                </div>
                <div class="MenuHeader">
                    <ul>
                        <li class="MenuTitle">
                            <a href="">Menu(1)</a>
                        </li>
                    </ul>
                </div>
                <div class="ButtonHeader">
                    <ul>
                        <li>
                            <button class="Loginbtn">Login</button>
                        </li>
                        <li>
                            <button class="Registerbtn">Signup</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header