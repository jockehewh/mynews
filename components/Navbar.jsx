import React from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import SearchBar from '../components/SearchBar';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src='/Logo_BBS.png'></img>
                    </Link>
                </div>
                <div>
                    <SearchBar />
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