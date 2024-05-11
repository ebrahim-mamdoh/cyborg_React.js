import './MyApp.css'

import {Container} from './components/index'
import {Header, Footer ,Hero,MostPop} from './components/sections/index'


const MyApp =()=>{
return(
    <>
    <Header />
    <Container>
    <Hero/> 
    <MostPop/> 

    </Container>

    {/* <Footer></Footer> */}
    </>
)
}


export default MyApp;
