import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand='lg' className='bg-black' data-bs-theme='dark'>
      <Container fluid={true}>
        <Navbar.Brand href='#home'>
          <img
            src='https://i.pinimg.com/736x/30/b1/1a/30b11a92a85361de088b6d668785f0aa.jpg'
            width='100'
            height='55'
            className='img-fluid d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
