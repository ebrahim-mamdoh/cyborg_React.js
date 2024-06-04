import './MyApp.css'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import {Container} from './components/index'
import {Header, Footer ,Hero,MostPop, GamingLib} from './components/sections/index'


const MyApp =()=>{
return(
    <>
    <Header />
    <Container>
    
    </Container>

    <Footer/>
    </>
)
}


export default MyApp;
