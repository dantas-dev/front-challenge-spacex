import Button from './Button'

const LinkButton = ({ text, href, rel, target, onClick }) => {
  return (
    <a onClick={onClick} href={href} rel={rel} target={target}>
      <Button text={text} />
    </a>
  )
}

export default LinkButton
