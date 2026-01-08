import React from 'react'
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <img src={search_icon} alt="" className={styles.icon} />
        <p>Children</p>
        <img src={bell_icon} alt="" className={styles.icon} />
        <div className={styles.navbarProfile}>
          <img src={profile_img} alt="" className={styles.profile}/>
          <img src={caret_icon} alt=""/>
          <div className={styles.dropdown}>
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar