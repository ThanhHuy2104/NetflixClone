import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import styles from './Player.module.css'
import back_arrow_icon from '../../../assets/back_arrow_icon.png'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTNhMGMyOGM1MmJiYThmMWNhN2Y2MzlmYTQwMmVhZiIsIm5iZiI6MTc2ODA1MTQ0NS41MjYsInN1YiI6IjY5NjI1MmY1NDZhYjU2YWJhZWQxNGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bv5tHeDFbKyDdgu-0co3j9MTm_2N-0PjZtrrM39JjxE'
    }
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])
  console.log(apiData)
  return (
    <div className={styles.player}>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate('/')}}/>
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen></iframe>
      <div className={styles.playerInfo}>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player