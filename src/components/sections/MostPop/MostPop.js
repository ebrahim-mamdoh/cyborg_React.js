import './MostPop.css'
import popular_1 from '../../../assets/images/popular-01.jpg'



function MostPop() {
  return (
    <>
      <div className='section-wrapper'>
        <div className='section-header'>
            <h4>Most popular</h4>
        </div>
        <div className='most-popular-items'>
           <div className='most-popular-item'>
              <div className='card-wrapper'>
                  <img className='most-popular-img' src={popular_1}/>
                  <div className='most-popualr-content'>
                    <h4 className='most-popular-title'>
                      Fortnite <br/>
                      <span>Sandbox</span>
                      <ul>
                        <li><span>4.8</span></li>
                        <li><span>2.3M</span></li>
                      </ul>
                    </h4>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default MostPop