import { render, screen, within } from '@testing-library/react'

import MissionDetails from '.'
import mock from './mock'

describe('<MissionDetails />', () => {
  it('should render the heading, the details, the ships and the links', () => {
    render(<MissionDetails {...mock} />)
    expect(
      screen.getByRole('heading', { name: 'Starlink-15' })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.'
      )
    ).toBeInTheDocument()

    const list = screen.getByRole('list', { name: /ships/i })
    const { getAllByRole } = within(list)
    const items = getAllByRole('listitem')
    expect(items.length).toBe(4)

    expect(
      screen.getByRole('link', { name: 'Article Link' })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Video Link' })).toBeInTheDocument()
  })

  it('should render without description', () => {
    render(<MissionDetails {...mock} details={null} />)
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
  })

  it('should render without article link', () => {
    const links = {
      article_link: null,
      video_link: 'https://youtu.be/J442-ti-Dhg'
    }
    render(<MissionDetails {...mock} links={links} />)
    expect(
      screen.queryByRole('link', { name: 'Article Link' })
    ).not.toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Video Link' })).toBeInTheDocument()
  })

  it('should render without video link', () => {
    const links = {
      article_link: 'https://youtu.be/J442-ti-Dhg',
      video_link: null
    }
    const { container } = render(<MissionDetails {...mock} links={links} />)
    expect(
      screen.queryByRole('link', { name: 'Video Link' })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Article Link' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
