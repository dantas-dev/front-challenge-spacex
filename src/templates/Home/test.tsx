import { render } from '@testing-library/react'
import mock from './mock'
import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home launchesPast={mock} />)
  })
})
