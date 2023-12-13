import './Card.css';

function Card({ children, title, imgUrl }) {
  return (
    <div className='card'>
      <h2 className='card-title'>Card Title</h2>
      <div className='card-content'>
        <img
          src='https://picsum.photos/300/200'
          alt='Card Image'
          className='card-image'
        />
        <div className='card-text-container'>
          <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className='view-more-btn'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Card