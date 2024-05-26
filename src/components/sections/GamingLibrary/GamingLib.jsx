import "./GamingLib.css"
import { SectionWrapper,GamingLibraryCard } from "../../../components/index"

import GamingLibraryData from "../../../Data/GamingLibrary"


const GamingLib = () => {
  // const cards=GamingLibraryData.map(card=>{
  //   return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate}  download={card.download}/>
  // })

  return (
    <>
    <SectionWrapper>
        <div className='section-header'>
          <h4>Gaming Liberary</h4>
        </div>
        <div className='most-popular-items'>
          
          <GamingLibraryCard> </GamingLibraryCard>
        </div>
      </SectionWrapper></>
  )
}

export default GamingLib
