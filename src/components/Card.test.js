import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Card from './Card'

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

it('Card starts with basic content and className not contains expanded', () => {
  const cardDATA = {
    name: 'Space',
    details: 'Space basic',
    date: '11-03-1983',
    image: 'rdn/url'
  }

  act(() => {
    render(
      <Card
        name={cardDATA.name}
        details={cardDATA.details}
        date={cardDATA.date}
        image={cardDATA.image}
      />,
      container
    )
  })

  const card = container.querySelector('.card')
  expect(card.children.length).toBe(4)
  expect(card.className).toBe('card')
})

it('Expand the card', () => {
  act(() => {
    render(<Card />, container)
  })

  const card = container.querySelector('.card')
  expect(card.className).toBe('card')

  act(() => {
    card.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(card.className).toBe('card expanded')
})

it('Close the card', () => {
  act(() => {
    render(<Card />, container)
  })

  const card = container.querySelector('.card')
  expect(card.className).toBe('card')

  act(() => {
    card.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    card.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(card.className).toBe('card')
})
