import Header from './components/Header'
import CardList from './components/CardList'

import { useState, useEffect } from 'react'
import { getLaunches } from './api/query_data'

const App = () => {
  const [latestLaunchesLimit, setLatestLaunchesLimit] = useState(10)
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    setLaunches(() => [])
    getLaunches(latestLaunchesLimit).then(data => {
      setLaunches(() => data)
    })
  }, [latestLaunchesLimit])

  const onUpdateLatestLaunchesLimit = event => {
    event.preventDefault()
    const target = event.target.querySelector('.search-latest-launches')
    if (target) {
      setLatestLaunchesLimit(() => parseInt(target.value))
    }
  }

  return (
    <main>
      <Header onSubmit={onUpdateLatestLaunchesLimit} />
      <CardList launches={launches} />
    </main>
  )
}

export default App
