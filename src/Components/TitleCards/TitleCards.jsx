import { useEffect, useRef } from 'react'
import styles from './TitleCards.module.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className={styles.titleCards}>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className={styles.cardList} ref={cardsRef} >
        {cards_data.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards