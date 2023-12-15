import { useParams } from 'react-router-dom'
import { useGamesList } from '../hooks'
import { Header } from './ui'

function GamePage() {
  const { id } = useParams()
  const { useGetQuery } = useGamesList()
  const { data } = useGetQuery(id)

  return (
    <>
      <Header />
    </>
  )
}

export default GamePage