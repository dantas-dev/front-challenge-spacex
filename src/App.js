import Header from './components/Header'
import { useState, useEffect } from 'react'

const App = () => {

  const [latestLaunches, setLatestLaunches] = useState(10)

  useEffect(() => {
    //call query api to update card list
  }, [latestLaunches])
  
  const onHeaderSubmit = (event) => {
    event.preventDefault()
    const target = event.target.querySelector('.search-latest-launches')
    if(target) {
      setLatestLaunches(() => parseInt(target.value))
    }
  }

  return (
    <main>
      <Header onSubmit={onHeaderSubmit}/>
    </main>
    )
}

export default App
