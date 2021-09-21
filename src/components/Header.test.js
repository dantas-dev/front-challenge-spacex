import Header from './Header'

import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'

function validateIfHeaderIsWithDefaultComponents (header) {
  expect(header.children.length).toBe(3)
  expect(header.querySelectorAll('.app-title').length).toBe(1)
  expect(header.querySelectorAll('.app-description').length).toBe(1)
  expect(header.querySelectorAll('.search-button').length).toBe(1)
}

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('The header is created with only: 1 header, 1 paragraph and 1 button', () => {
  act(() => {
    render(<Header />, container)
  })

  const header = container.querySelector('header')
  validateIfHeaderIsWithDefaultComponents(header)
})

it('The header shows the search form after clicking the search button', () => {
  act(() => {
    render(<Header />, container)
  })

  const button = container.querySelector('.search-button')

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  const header = container.querySelector('header')
  expect(header.children.length).toBe(3)
  expect(container.querySelectorAll('.app-title').length).toBe(1)
  expect(container.querySelectorAll('.app-description').length).toBe(1)
  expect(container.querySelectorAll('.search-form').length).toBe(1)
})

it('The form is closed after clicking the close button', () => {
  const onSubmit = event => {
    event.preventDefault()
  }

  act(() => {
    render(<Header onSubmit={onSubmit} />, container)
  })

  const header = container.querySelector('header')
  const searchButton = container.querySelector('.search-button')

  act(() => {
    searchButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  const form = container.querySelector('.search-form')
  const closeButton = form.querySelector('.close-form-button')

  act(() => {
    closeButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  validateIfHeaderIsWithDefaultComponents(header)
})

it('The Header calls onSumbit callback after submit form', () => {
  const onSubmit = jest.fn()

  act(() => {
    render(<Header onSubmit={onSubmit} />, container)
  })

  const searchButton = container.querySelector('.search-button')

  act(() => {
    searchButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  const submitButton = container.querySelector('[type=submit]')

  act(() => {
    submitButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(onSubmit).toHaveBeenCalled()
})
