import { render } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    render(<Container />)
  })
})
