/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav, } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import data from './components/data';
import Best from './pages/Best';
import Main from './pages/Main';
import About from './pages/About';
import History from './pages/History';
import Inform from './pages/Inform';
import Cart from './pages/Cart';



function App() {

  const navigate = useNavigate()
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>삼진어묵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/about')}}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/best')}}>베스트</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to={'/'}>home</Link>
      <Link to={'/best'} targer='_blank'>best</Link> */}

      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />}> 
          <Route path='history' element={<History />} />
          <Route path='inform' element={<Inform />} />
        </Route>
        <Route path='/best' element={<Best />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>



      
    
    </div>
  );
}

export default App;
