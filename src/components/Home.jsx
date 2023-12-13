import GamesListContainer from './GamesList/GamesListContainer'
import { Header, SearchBar } from './ui'

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <GamesListContainer />
    </>
  )
}

export default Home