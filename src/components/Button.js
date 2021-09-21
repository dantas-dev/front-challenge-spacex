const Button = ({ text, icon, onClick, className, type }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && icon({})}
      {text}
    </button>
  )
}

export default Button
