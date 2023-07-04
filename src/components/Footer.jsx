import React from 'react';
import Logo from '../img/article.png'

const Footer =  () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <img src={Logo} alt='logo-img' />
            <span>
                Anime Blog
            </span>
            <p>
                Copyright ⓒ {currentYear} Setthanat Kladee
            </p>
        </footer>
    )
}

export default Footer;