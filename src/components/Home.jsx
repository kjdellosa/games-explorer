import GamesListContainer from './GamesList/GamesListContainer'
import { Header, SearchBar } from './ui'
import { useGamesList } from '../hooks'

function Home() {
  const { list, search } = useGamesList()

  return (
    <>
      <Header />
      <SearchBar onSearch={search.onSearch} />
      <GamesListContainer list={list} />
    </>
  )
}

export default Home