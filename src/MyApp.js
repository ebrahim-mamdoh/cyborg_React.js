import './MyApp.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from './components/index'
import { Header, Footer, } from './components/sections/index'
import { Home, Profile } from './Pages/index'

const MyApp = () => {
    return (
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='profile' element={ <Profile/>}/>
                    </Routes>
                </Container>
                <Footer />
            </Router>

        </>
    )
}


export default MyApp;
