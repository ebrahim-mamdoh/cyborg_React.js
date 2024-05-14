import './MostPop.css'
import Card from '../../Card/Card'



function MostPop() {
  return (
    <>
   
      <div className='section-wrapper'>
        <div className='section-header'>
            <h4>Most popular</h4>
        </div>
        <div className='most-popular-items'>
            <Card title='Fortnite'  category='sandbox'     rate='3.8'  downloas='4.5M'/>
            <Card title='Pubg'      category='stream-x'    rate='4.8'  downloas='1.1M'/>
            <Card title='Dota2'     category='legendary'   rate='3.5'  downloas='5.3M'/>
            <Card title='Cs-Go'     category='battle 5'    rate='4.6'  downloas='6.1M'/>
        
         
        </div>
      </div>
    </>
  )
}

export default MostPop