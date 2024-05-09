import './NaveItem.css'


const NaveItem=(props) =>{
  return (
    <li className='nav-item'>
      {props.chilren}
    </li>
  )
}


const NaveItemDropDown=(props) =>{
  return (
    <li className='nav-item'>
      {props.chilren}
    </li>
  )
}




export default NaveItem
export {NaveItemDropDown}

