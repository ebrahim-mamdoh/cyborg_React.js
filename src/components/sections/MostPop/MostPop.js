import './MostPop.css'

import { SectionHeader } from '../../../components/index'
import { SectionWrapper,Card } from '../../../components//index'
import MostPopularData from '../../../Data/MostPopularData'


const  MostPop=()=> {
const cards=MostPopularData.map(card=>{
return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate}  download={card.download}/>

})

  return (
    <>
      <SectionWrapper>
        <div className='section-header'>
          <h4>Most popular</h4>
        </div>
        <div className='most-popular-items'>
          
            {cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default MostPop