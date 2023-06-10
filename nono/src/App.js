import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate, outlet } from 'react-router-dom';


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>우리 모두 A+</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/hi') }}>B</Nav.Link>
              <Nav.Link onClick={() => { navigate('/Cba') }}>C</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


        {/* 페이지 설정 */}
      <Routes>
        <Route path='/' element = {
          <> 
            <div className='main-bg'></div>
            {hihi()}
          </>
        }></Route>
        <Route path='/hi' element = { hihi() } />
        <Route path='/Cba' element = { Bbb() } />
        <Route path='*' element = { <div> 에러에요.. </div> } />
      </Routes>

    </div>
  );
}

function hihi() {
  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => { alert('이번 학기 A+ 나오세요~~') }}>
          여기 한번 눌러보세요!!
        </Button>
        <Button variant="secondary" size="lg" onClick={() => { alert('이번 학기 A+ 나오세요~~') }}>
          여기는 두번 눌러보세요~~
        </Button>
      </div>
    </>
  )
}

function Bbb() {
  return (
    <>
    <Button variant="danger" onClick={() => { alert('왜누름 너 C') }}>Danger</Button>{' '}
  </>
  )
}

export default App;
