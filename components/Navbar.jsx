import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div className="logo">
                    <Link href="/">
                        Mon Logo
                    </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder="Rechercher" />
                </div>
                <div className={styles.social_icons}>
                    <Link href="#">
                        <FaTwitter />
                    </Link>
                    <Link href="#">
                        <FaFacebook />
                    </Link>
                    <Link href="#">
                        <FaInstagram />
                    </Link>
                </div>
                <div className={styles.favorite_icon}>
                    <Link href="#">
                        <FaHeart />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;