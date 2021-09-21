import Header from './components/Header'
import CardList from './components/CardList'

import { useState, useEffect } from 'react'

const App = () => {

  const [latestLaunches, setLatestLaunches] = useState(10)
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    //call query api to update card list
  }, [latestLaunches])

  const onHeaderSubmit = event => {
    event.preventDefault()
    const target = event.target.querySelector('.search-latest-launches')
    if (target) {
      setLatestLaunches(() => parseInt(target.value))
    }
  }
  
  return (
    <main>
      <Header onSubmit={onHeaderSubmit} />
      <CardList launches={launches}/>
    </main>
  )
}

export default App
