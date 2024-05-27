import './GamingLibraryCard.css'


const GamingLibraryCard = (props) => {
  return (
 <>
 <ul>
  <li><img src={props.img} alt="" /></li>
  <li><h4>{props.title}</h4>   <span>{props.category}</span>    </li>
  <li><h4>Data Added</h4>      <span>{props.data_add}</span>    </li>
  <li><h4>Hourse Played</h4>   <span>{props.hours_played}</span></li>
  <li><h4>Currently</h4>       <span>{props.download}</span>    </li>
    <div className='main-button'>
      <a href="/#">download</a>
    </div>
 </ul>
 
 </>
  )
}

export default GamingLibraryCard
