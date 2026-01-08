import React from 'react'
import clsx from 'clsx'
import styles from './Home.module.css'
import NavBar from '../../NavBar/NavBar'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'


const Home = () => {
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.hero}>
        <img src={hero_banner} alt="" className={styles.bannerImg} />
        <div className={styles.heroCaption}>
          <img src={hero_title} alt="" className={styles.captionImg} />
          <div className={styles.heroBtns}>
            <button className={styles.btn}>
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className={clsx(styles.btn, styles.darkBtn)}>
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home