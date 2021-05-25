import { render, screen } from '@testing-library/react'
import mock from 'components/MissionDetails/mock'

import Mission from '.'

jest.mock('components/MissionDetails', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Details">{children}</div>
  }
}))

describe('<Mission />', () => {
  it('should render the heading', () => {
    render(<Mission {...mock} />)
    expect(screen.getByTestId('Mock Details')).toBeInTheDocument()
  })
})
