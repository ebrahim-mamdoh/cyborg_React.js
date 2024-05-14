import './Card.css'
import popular_1 from '../../assets/images/popular-01.jpg'



function Card(props) {
  return (
<div className='most-popular-item'>
              <div className='card-wrapper'>
                  <img className='most-popular-img' src={popular_1}/>
                  <div className='most-popualr-content'>
                    <h4 className='most-popular-title'>
                      {props.title} <br/>
                      <span>Sandbox</span>
                    </h4>
                    <ul>
                        <li><span>4.8</span></li>
                        <li><span>2.3M</span></li>
                      </ul>
                  </div>
              </div>
           </div>
  )
}

export default Card