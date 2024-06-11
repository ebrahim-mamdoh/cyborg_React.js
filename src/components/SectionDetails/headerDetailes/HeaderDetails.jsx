import Container from "../../Container/Container"
import img_1 from '../../../assets/images/feature-left.jpg'
import img_2 from '../../../assets/images/feature-right.jpg'

import './HeaderDetails.css'


const HeaderDetails = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-4" >
          <img src={img_1} alt="" className="image_1" />
        </div>
        <div class="col-md-8">
          <div class="thumb">
            <img src={img_2} alt="" className="image_2" />
            <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i class="fa fa-play"></i></a>
          </div>
        </div>
      </div>


    </>
  )
}

export default HeaderDetails
