import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some((item) => item === currentUser._id);
  const cardLikeButtonClassName = (
    `elements__like-button ${isLiked && 'elements__like-button_active'}`
  );

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card, props.id);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.id);
  }

  return (
    <>
      <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      {isOwn && <button className="elements__basket-button" type="button" onClick={handleDeleteClick}></button>}
      <h2 className="elements__title">{props.card.name}</h2>
      <div className="elements__like">
        <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
        <p className="elements__like-count">{props.card.likes.length}</p>
      </div>
    </>
  )
}

export default Card;