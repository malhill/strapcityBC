import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
      <img
        alt=""
        src="./public/images/club-logo-mini.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>

        <Nav className="justify-content-end">

          <Nav.Link>
            <Link href="/">
              <a className='mx-4'>Home</a>
            </Link>
          </Nav.Link>

          <Nav.Link >
            <Link href="/coach">
              <a className='mx-4'>Coaches</a>
            </Link>
          </Nav.Link>

          <Nav.Link >
            <Link href="/news">
              <a className='mx-4'>News</a>
            </Link>
          </Nav.Link>

          <Nav.Link >
            <Link href="/gallery">
              <a className='mx-4'>Gallery</a>
            </Link>
          </Nav.Link>

          <Nav.Link >
            <Link href="/contact">
              <a className='mx-4'>Contact</a>
            </Link>
          </Nav.Link>

        </Nav>
      </Navbar>
    </>
  );
}
