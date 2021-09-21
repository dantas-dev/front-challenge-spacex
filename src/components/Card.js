import { useState } from 'react'
import { IconX } from '@tabler/icons'
import LinkButton from './LinkButton'
import Button from './Button'

const Card = ({ image, name, details, date, external_link }) => {
  const [expanded, setExpanded] = useState(false)

  const onClick = event => {
    setExpanded(prevExpanded => !prevExpanded)
    event.stopPropagation()
  }

  return (
    <div onClick={onClick} className={expanded ? 'card expanded' : 'card'}>
      {image && <img src={image} alt={name} />}
      {name && <h3>{name}</h3>}
      {details && <p>{details}</p>}
      {date && <small>{date}</small>}
      {expanded && (
        <LinkButton
          onClick={event => event.stopPropagation()}
          text='See more'
          href={external_link}
          rel='noreferrer'
          target='_blank'
        />
      )}
      {expanded && (
        <Button
          icon={IconX}
          onClick={onClick}
          type='button'
          className='close-card-button'
        />
      )}
    </div>
  )
}

export default Card
