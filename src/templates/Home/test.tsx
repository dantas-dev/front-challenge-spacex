import { render, screen } from '@testing-library/react'
import mock from './mock'
import Home from '.'

jest.mock('components/LaunchCard', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock LaunchCard">{children}</div>
  }
}))

describe('<Home />', () => {
  it('should render the home page', () => {
    render(<Home launchesPast={mock} />)
    expect(screen.getAllByTestId('Mock LaunchCard')).toHaveLength(10)
  })
})
