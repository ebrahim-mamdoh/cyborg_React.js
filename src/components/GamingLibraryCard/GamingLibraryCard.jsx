import './GamingLibraryCard.css'

import { SecondaryButton } from '../index'


const GamingLibraryCard = (props) => {
  return (
 <>
<div className="gaming-library-item">
   <ul>
  <li className='gaming-library-item-image' ><img src={props.image} alt="" /></li>
  <li><h4>{props.title}</h4>   <span>{props.category}</span>    </li>
  <li><h4>Data Added</h4>      <span>{props.date_added}</span>    </li>
  <li><h4>Hourse Played</h4>   <span>{props.hours_played}</span></li>
  <li><h4>Currently</h4>       <span>{props.download}</span>    </li>
  <li className='gaming-library-item-btn'>
  <SecondaryButton>download</SecondaryButton>

  </li>
    
 </ul>
</div>

 
 </>
  )
}

export default GamingLibraryCard
