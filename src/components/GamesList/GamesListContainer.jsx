import GameCard from './GameCard'

function GamesListContainer({ list }) {
  return (
    <div className='card-container'>
      {
        list.games.map(game => {
          return (<GameCard key={game.id} data={game} />)
        })
      }
    </div>

  )
}

export default GamesListContainer