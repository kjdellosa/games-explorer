import { useNavigate } from 'react-router-dom'
import { Card } from '../ui'

function GameCard({ data }) {
  const navigate = useNavigate()

  const onViewMore = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <Card
      title={data.title}
      imgUrl={data.thumbnail}
      text={data.shortDescription}
      onBtnClick={() => onViewMore(data.id)}
    />
  )
}

export default GameCard