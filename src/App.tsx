import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MainPage from "./Components/MainPage";
import Career from "./Components/Career";
import ApplicationForm from "./Components/ApplicationForm";
import AboutUs from "./Components/AboutUs";
import ProductPage from "./Components/ProductsPage";
import ContactPage from "./Components/ContactPage";

{
}
function App() {
  return (
    <BrowserRouter>
      {/*Navbar*/}
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand
            href="/Components/MainPage"
            className="m-4 fs-2 d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 text-primary"
          >
            TechNova
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="/Components/MainPage"
                className=" text-white fs-5"
              >
                Home
              </Nav.Link>
              <Nav.Link href="/Components/AboutUs" className=" text-white fs-5">
                About Us
              </Nav.Link>
              <Nav.Link
                href="/Components/ProductsPage"
                className="text-white fs-5"
              >
                Products
              </Nav.Link>
              <Nav.Link href="/Components/Career" className=" text-white fs-5">
                Careers
              </Nav.Link>
              <Nav.Link
                href="/Components/ContactPage"
                className=" text-white fs-5"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/*Navigation Routing*/}
      <Routes>
        <Route path="/Components/MainPage" element={<MainPage />} />
        <Route path="/Components/AboutUs" element={<AboutUs />} />
        <Route path="/Components/ProductsPage" element={<ProductPage />} />
        <Route path="/Components/Career" element={<Career />} />
        <Route path="/ApplicationForm" element={<ApplicationForm />} />
        <Route path="/Components/ContactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
