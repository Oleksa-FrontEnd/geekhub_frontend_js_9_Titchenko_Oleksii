import React from 'react';
import SiteLogo, { }  from '../universal_templates/buttons/site_logo';
import { faFacebook, faTwitter, faInstagram, faVk, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import {SocialIconGray, SocialIconWhite} from '../universal_templates/buttons/social_icons';
import './Header.scss';

export default () => (
    <header className="header">
        <div className="header-logo">
            <SiteLogo color="main"></SiteLogo>
        </div>

        {/*<div className="header-social-block">
            <SocialIconWhite icon={ faFacebook }></SocialIconWhite>
            <SocialIconWhite icon={ faTwitter }></SocialIconWhite>
            <SocialIconWhite icon={ faInstagram }></SocialIconWhite>
            <SocialIconWhite icon={ faVk }></SocialIconWhite>
            <SocialIconWhite icon={ faPinterest }></SocialIconWhite>
        </div>*/}
        {/*<div className="header-logo">
        <SiteLogo color="main"></SiteLogo>
        </div>*/}
        <div className="header-menu-block">
            <ul className="header-wrap">
                <li className="header-menu_item">Popular</li>
                <li className="header-menu_item">New</li>
                <li className="header-menu_item">Reading list</li>
                <li className="header-menu_item">Topics</li>
                <li className="header-menu_item">Subscribe</li>
            </ul>
            {/*<div className="menu-block">
                <SocialIconWhite icon={ faBars }></SocialIconWhite>
            </div>*/}
        </div>
        <div className="search-block">
            <SocialIconGray icon={ faSearch }></SocialIconGray>
        </div>
    </header>
)