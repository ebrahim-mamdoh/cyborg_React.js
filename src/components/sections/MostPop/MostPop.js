import './MostPop.css'
import Card from '../../Card/Card'
import popular_1 from '../../../assets/images/popular-01.jpg'
import popular_2 from '../../../assets/images/popular-02.jpg'
import popular_3 from '../../../assets/images/popular-03.jpg'
import popular_4 from '../../../assets/images/popular-04.jpg'



function MostPop() {
  return (
    <>
   
      <div className='section-wrapper'>
        <div className='section-header'>
            <h4>Most popular</h4>
        </div>
        <div className='most-popular-items'>
            <Card img={popular_1} title='Fortnite'  category='sandbox'     rate='3.8'  downloas='4.5M'/>
            <Card img={popular_2} title='Pubg'      category='stream-x'    rate='4.8'  downloas='1.1M'/>
            <Card img={popular_3} title='Dota2'     category='legendary'   rate='3.5'  downloas='5.3M'/>
            <Card img={popular_4} title='Cs-Go'     category='battle 5'    rate='4.6'  downloas='6.1M'/>
            <Card img={popular_1} title='Fortnite'  category='sandbox'     rate='3.8'  downloas='4.5M'/>
            <Card img={popular_2} title='Pubg'      category='stream-x'    rate='4.8'  downloas='1.1M'/>
            <Card img={popular_3} title='Dota2'     category='legendary'   rate='3.5'  downloas='5.3M'/>
            <Card img={popular_4} title='Cs-Go'     category='battle 5'    rate='4.6'  downloas='6.1M'/>
         
        </div>
      </div>
    </>
  )
}

export default MostPop