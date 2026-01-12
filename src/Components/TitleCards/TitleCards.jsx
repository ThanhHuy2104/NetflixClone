import { useState, useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import styles from './TitleCards.module.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTNhMGMyOGM1MmJiYThmMWNhN2Y2MzlmYTQwMmVhZiIsIm5iZiI6MTc2ODA1MTQ0NS41MjYsInN1YiI6IjY5NjI1MmY1NDZhYjU2YWJhZWQxNGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bv5tHeDFbKyDdgu-0co3j9MTm_2N-0PjZtrrM39JjxE'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className={styles.titleCards}>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className={styles.cardList} ref={cardsRef} >
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className={styles.card} key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards