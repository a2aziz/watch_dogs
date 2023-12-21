import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import Home from './Home'
import Login from './Login'
import Register from './Register'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path='/Register' element={<Register />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                {/* <Route path="*" element={<NoPage />} /> */}
                <Route path="*" element={"404"} />
            </Route>
        </Routes>
    );
}

export default AllComponents;
