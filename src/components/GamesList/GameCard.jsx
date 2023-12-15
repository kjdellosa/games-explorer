import { Card } from '../ui'

function GameCard({ data }) {
  return (
    <Card
      title={data.title}
      imgUrl={data.thumbnail}
      text={data.shortDescription}
    />
  )
}

export default GameCard