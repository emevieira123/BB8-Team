import React from 'react';
import './styles.scss';
import Logo from '../../assets/Logo.svg';

class MobileNavbar {
    constructor(mobileMenu, menu, menuButton) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menu = document.querySelector(menu);
        this.menuButton = document.querySelector(menuButton);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    // animateButton() {
    //     this.menuButton.forEach((link, index) => {
    //         link.style.animation
    //             ? (link.style.animation = "")
    //             : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    //     });
    // }

    handleClick() {
        console.log(this);
        this.menu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        // this.animateButton();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu button",
);
mobileNavbar.init();

const Header = () => {

    return (
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>BB8 Team</h2>
            </div>

            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <div className="menu">
                <button className="btnMenu" href="http://localhost:3000/">Contact</button>
                <button className="btnMenu" href="http://localhost:3000/">Register</button>
                <button className="btnLogin" href="http://localhost:3000/">Log In</button>
            </div>
        </div>
    );
}

export default Header;