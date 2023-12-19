import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
	return (
		<header className='container-fluid p-0'>
			<Navbar
				collapseOnSelect
				expand='lg'
				className='bg-secondary'
			>
				<Container fluid>
					<Navbar.Brand href='#home'>{props.titolo}</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='#menu'>Menu</Nav.Link>
							<Nav.Link href='#About'>About</Nav.Link>
							<Nav.Link href='#Browse'>Browse</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
