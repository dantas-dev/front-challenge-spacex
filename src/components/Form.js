import Button from './Button'
import { IconX } from '@tabler/icons'
import uniqid from 'uniqid'
import './../styles/Form.css'

const Form = ({ onSubmit, onClose }) => {
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
    <form onSubmit={onSubmit} className='search-form'>
      <Button
        icon={IconX}
        onClick={onClose}
        type='button'
        className='close-form-button danger'
      />
      <label>
        Find{' '}
        <select className='search-latest-launches'>
          {generateSelectOptions()}
        </select>{' '}
        most recent launches
      </label>
      <Button text='Search' type='submit' className='search-form-button' />
    </form>
  )
}

export default Form
