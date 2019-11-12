import React from 'react';
import CityLogo from './UI/logo';

const Footer = () => {
    return ( 
        <footer className="bck_blue">
            <div className="footer_logo">
            <CityLogo
                width="70px"
                height="70px"
                link={true}
                linkTo="/" />
            </div>
            <div className="footer_discl">
                Manchester City 2018 All rights res
            </div>

        </footer>
     );
}
 
export default Footer;