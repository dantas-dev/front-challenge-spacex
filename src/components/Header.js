import { useState } from 'react'
import Button from './Button'
import Form from './Form'
import './../styles/Header.css'

const Header = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = event => {
    setShowForm(() => false)
    onSubmit(event)
  }

  const onHeaderButtonClick = () => {
    setShowForm(() => true)
  }

  const onCloseForm = () => {
    setShowForm(() => false)
  }

  return (
    <header>
      <h1 className='app-title'>Last Launches</h1>
      <p className='app-description'>
        Find out what happened on the latest SpaceX launches. Click on a card to
        see more
      </p>
      {showForm && <Form onSubmit={handleSubmit} onClose={onCloseForm} />}
      {!showForm && (
        <Button
          onClick={onHeaderButtonClick}
          text='New search'
          className='search-button'
        />
      )}
    </header>
  )
}

export default Header
