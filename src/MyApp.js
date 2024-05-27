import './MyApp.css'

import {Container} from './components/index'
import {Header, Footer ,Hero,MostPop, GamingLib} from './components/sections/index'


const MyApp =()=>{
return(
    <>
    <Header />
    <Container>
    {/* <Hero/>  */}
    {/* <MostPop/>  */}
    <GamingLib/> 

    </Container>

    {/* <Footer></Footer> */}
    </>
)
}


export default MyApp;
