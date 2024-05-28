import "./GamingLib.css"
import { SectionWrapper,GamingLibraryCard } from "../../../components/index"
import GamingLibraryData from "../../../Data/GamingLibrary"


const GamingLib = () => {
  const cards=GamingLibraryData.map(card=>{
   return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added}  hours_played={card.hours_played}  download={card.download}/>
  })


  return (
    <>
    <SectionWrapper>
        <div className='section-header'>
          <h4>Gaming Liberary</h4>
        </div>
        <div className='gaming-library-cards'>
          {cards}
        </div>
      </SectionWrapper></>
  )
}

export default GamingLib
