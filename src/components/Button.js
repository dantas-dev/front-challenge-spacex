import './../styles/Button.css'
import './../styles/IconButton.css'

const Button = ({ text, icon, type, className, onClick }) => {
  className = 'button'.concat(' ', className || '').concat(' ', icon && (!text || text.length === 0) ? 'icon' : '')

  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && icon({})}
      {text}
    </button>
  )
}

export default Button
