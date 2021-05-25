import { render } from '@testing-library/react'

import MissionDetails from '.'
import mock from './mock'

describe('<MissionDetails />', () => {
  it('should render the heading', () => {
    render(<MissionDetails {...mock} />)
  })
})
