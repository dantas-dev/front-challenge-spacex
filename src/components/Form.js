import Button from './Button'
import { IconX } from '@tabler/icons'
import uniqid from 'uniqid'
import { useState } from 'react'
import './../styles/Form.css'

const Form = ({ onSubmit, onClose }) => {
  const [launchesLimit, setLaunchesLimit] = useState(10)

  const changeLaunchesLimit = event => {
    const limit = parseInt(event.target.value) || 0
    setLaunchesLimit(limit)
  }

  function generateSelectOptions () {
    let options = []
    for (let i = 10; i <= 100; i += 10) {
      options.push(
        <option key={uniqid()} value={i}>
          {i}
        </option>
      )
    }
    return options
  }

  return (
    <form onSubmit={onSubmit.bind(null, launchesLimit)} className='search-form'>
      <h4>Search last launches</h4>
      <Button
        icon={IconX}
        onClick={onClose}
        type='button'
        className='close-form-button danger'
      />
      <label>
        Find
        <select
          onChange={changeLaunchesLimit}
          value={launchesLimit}
          className='search-latest-launches'
        >
          {generateSelectOptions()}
        </select>
        last launches
      </label>
      <Button text='Search' type='submit' className='search-form-button' />
    </form>
  )
}

export default Form
