import uniqid from 'uniqid'
import Card from './Card'

const CardList = ({ launches }) => {
  let cards = launches.map(launch => {
    return (
      <Card
        image={launch.image}
        name={launch.name}
        details={launch.details}
        date={launch.date}
        external_link={launch.ref_link}
        key={uniqid()}
      />
    )
  })

  if (cards.length === 0) {
    return <p>Loading data...</p>
  }

  return <ul className='card-list'>{cards}</ul>
}

export default CardList
