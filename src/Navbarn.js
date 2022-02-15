import React from 'react'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
 import InfoIcon from '@mui/icons-material/Info';
 import FormatShapesIcon from '@mui/icons-material/FormatShapes';

// import HomeIcon from '@material-ui/icons/Home';

 const Navbarn= () => {
  return (
    <div>
   <Nav >
   <Navbar bg="light " expand={false} style={{width:"100%"}}>
  {/* <Container fluid> */}
          <Nav class='nav' >
              <Nav.Link href="./">Home<HomeIcon /></Nav.Link>
              <Nav.Item><Nav.Link href='./About'>About<FormatShapesIcon/></Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href='./Contactus'> Contact<ContactPhoneIcon/></Nav.Link></Nav.Item>
              <Nav.Link href="./Infromation">Information<InfoIcon /></Nav.Link>

                 </Nav>
                 <Navbar.Toggle aria-controls="offcanvasNavbar" />
                 <Navbar.Offcanvas
                     id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel"
                     placement="start"
             >
                   <Offcanvas.Header closeButton>
                   <Offcanvas.Title style={{color:"success"}} id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                   </Offcanvas.Header>
                   <Offcanvas.Body>
        <Nav>
        <Nav.Link href="./">Home<HomeIcon /></Nav.Link>
                 <Nav.Link href="./about">About<FormatShapesIcon/></Nav.Link>
               <Nav.Link href="./Contactus"> Contactus<ContactPhoneIcon /></Nav.Link>
               <Nav.Link href="./Infromation">Information<InfoIcon /></Nav.Link>
        </Nav>
      </Offcanvas.Body> 
    </Navbar.Offcanvas>
  {/* </Container>                */}
</Navbar>



   </Nav>
    

   </div>
  )
}
export default Navbarn



// import React from 'react'
// import { Nav } from "react-bootstrap"
// import { Navbar, Offcanvas, NavDropdown , Container} from "react-bootstrap"

// import HomeIcon from '@mui/icons-material/Home';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import InfoIcon from '@mui/icons-material/Info';
// const Navbarn = () => {
//   return (
//     <>

//       <div >
       
//         <Navbar bg="light" expand={false}>

        
          

//           <Container fluid>
//           <Nav>

//            <Nav.Item> <Nav.Link href="#action1">Home</Nav.Link></Nav.Item>   
//            <Nav.Item><Nav.Link href="#action2">About</Nav.Link></Nav.Item>   
//           </Nav>
//           {/* <Navbar.Brand href="#">Menu</Navbar.Brand> */}
//           <Navbar.Toggle aria-controls="offcanvasNavbar" />

//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="start"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>

//               <Nav className="justify-content-start flex-grow-1 pe-3">
//                 <Nav.Link href="./">Home<HomeIcon /></Nav.Link>
//                 <Nav.Link href="./about">About</Nav.Link>
//                 <Nav.Link href="./Contactus"> Contactus<ContactPhoneIcon /></Nav.Link>
//                 <Nav.Link href="./infromation">Information<InfoIcon /></Nav.Link>

//                 <NavDropdown.Divider />
                
//               </Nav>

//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//           </Container>
//         </Navbar> 
     
//         {/* </Container> */}
//         {/* <Nav id='nav'  style={{backgroundColor:"black" , padding:"10px  "}}>
          
//         <Nav.Item id='nav1'>
//             <Nav.Link href='/' >Menu</Nav.Link>
//           </Nav.Item>
//           <Nav.Item class="">
//             <Nav.Link href='/' ><HomeIcon/></Nav.Link>
//           </Nav.Item>
//           <Nav.Item class="">
//             <Nav.Link href='/About' >About</Nav.Link>
//           </Nav.Item>
//           <Nav.Item class="">
//             <Nav.Link href='/ContactUS' >Contact US <ContactPhoneIcon/></Nav.Link>
//           </Nav.Item>
//           <Nav.Item >
//             <Nav.Link href='/infromation' >Information</Nav.Link>
//           </Nav.Item>
//           </Nav> */}
//       </div>
//     </>
//   )
// }

// export default Navbarn