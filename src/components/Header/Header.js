import './Header.css'

function Header(props) {
  return (
    <div>
        <h1>48</h1>
      <h1>{props.fsName}...{props.SecondName}</h1>
      <h1>{props.SecondName}</h1>

    </div>
  )
}

export default Header
