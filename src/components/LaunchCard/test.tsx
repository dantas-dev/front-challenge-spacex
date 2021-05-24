import { render, screen } from '@testing-library/react'

import LaunchCard from '.'

const props = {
  mission_name: 'Starlink-15',
  mission_link: 'https://www.google.com.br',
  launch_date: '2020-10-24T11:31:00-04:00'
}

describe('<LaunchCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<LaunchCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Starlink-15/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
