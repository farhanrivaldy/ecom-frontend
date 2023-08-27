import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
function Header(){
    let user=JSON.parse(localStorage.getItem("user-info"));
    const history=useHistory();
    function logOut(){
    localStorage.clear();
    history.push("/login");
    }
    console.warn(user);
    return(
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">E-Commers</Navbar.Brand>
            <Nav className="me-auto navbar_wrapper">
                {
                  localStorage.getItem('user-info') ?
                  <>
                  <Link to = "/">Product List</Link>
                  <Link to = "/add">Add Product</Link>
                  <Link to = "/update">Update Product</Link>
                  </>
                  :
                  <>
                  <Link to = "/login">Login</Link> 
                  <Link to = "/register">Register</Link>
                  </>
                }      
            </Nav>  
            {localStorage.getItem('user-info')?
            <Nav>
              <NavDropdown title={user && user.name}>
              <NavDropdown.ItemText onClick={logOut}>Logout</NavDropdown.ItemText>
              </NavDropdown>
            </Nav>
            :null
            }
            </Container>
        </Navbar>
      </div>
        )
}
    
export default Header;