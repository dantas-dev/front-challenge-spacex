const LinkButton = ({ text, className, href, rel, target, onClick }) => {
  return (
    <a
      className={'button ' + (className || '')}
      onClick={onClick}
      href={href}
      rel={rel}
      target={target}
    >
      {text}
    </a>
  )
}

export default LinkButton
