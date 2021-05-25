import { render } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = render(
      <Container>
        <h1>Container</h1>
      </Container>
    )
    expect(container.firstChild).toHaveStyleRule('max-width', '538px')
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 538px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      }

      <div
        class="c0"
      >
        <h1>
          Container
        </h1>
      </div>
    `)
  })
})
