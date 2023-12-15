import './Card.css';

function Card({ text, title, imgUrl }) {
  return (
    <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <div className='card-content'>
        <img
          // src={`/api${imgUrl}`}
          className='card-image'
        />
        <div className='card-text-container'>
          <p className='card-text'>
            {text}
          </p>
          <button className='view-more-btn'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Card