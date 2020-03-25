import React from 'react';
import SiteLogo, { }  from '../universal_templates/buttons/site_logo';
import { faFacebook, faTwitter, faInstagram, faVk, faPinterest } from '@fortawesome/free-brands-svg-icons';
// import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SocialIconGray } from '../universal_templates/buttons/social_icons';
import './Footer.scss';



export default () => (
    <footer className="footer">
        <SiteLogo color="gray"></SiteLogo>
        <div className="footer-social-block">
            <SocialIconGray icon={ faFacebook }></SocialIconGray>
            <SocialIconGray icon={ faTwitter }></SocialIconGray>
            <SocialIconGray icon={ faInstagram }></SocialIconGray>
            <SocialIconGray icon={ faVk }></SocialIconGray>
            <SocialIconGray icon={ faPinterest }></SocialIconGray>
        </div>
        <div className="footer-copyright">
            <p className="footer-copyright__text">All Rights Reserved 2018 BehindMars</p>
        </div>
    </footer>
)
