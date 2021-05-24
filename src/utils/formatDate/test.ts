import { formatDate } from '.'

describe('formatDate()', () => {
  it('should format the isoDate to normal format', () => {
    const dateFormated = formatDate('2020-09-09T11:31:00-04:00')
    expect(dateFormated).toStrictEqual('09/09/2020')
  })
})
