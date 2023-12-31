import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const stringContains = (a, b) => {
  return a.toLowerCase().includes(b.toLowerCase())
}

export const useGamesList = () => {
  async function getGames() {
    const { data: response } = await axios.get('/api/games')
    return response
  }

  async function getGame(id) {
    const { data: response } = await axios.get('/api/game', { params: { id } })
    return response
  }

  const { data: games = [], isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: getGames
  })

  const useGetQuery = (id) => {
    return useQuery({
      queryKey: ['game', id],
      queryFn: async () => getGame(id)
    })
  }

  const [searchValue, setSearchValue] = useState('')

  const onSearch = (value) => {
    setSearchValue(value)
  }

  const filterGames = (games) => {
    return games.filter(({ title }) => {
      return stringContains(title, searchValue)
    })
  }

  return {
    list: {
      games: filterGames(games),
      isLoading
    },
    search: {
      value: searchValue,
      onSearch
    },
    useGetQuery
  }
}