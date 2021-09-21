import Button from './Button'
import Form from './Form'

import { useState } from 'react'

const Header = ({ onSubmit }) => {
  
  const [showForm, setShowForm] = useState(false)

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
        Find out what happened on the latest SpaceX launches. Click on a card to see more
      </p>
      {showForm && <Form onSubmit={onSubmit} onClose={onCloseForm} />}
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
