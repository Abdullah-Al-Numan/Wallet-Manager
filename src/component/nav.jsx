import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


import {Navbar,
  Nav
} from 'react-bootstrap';



class Head extends React.Component {
  getstylhead =()=> {
    return{
    background:'#343a40',
    padding:'30px',
    //borderBottom:'2px solid #ccc',
    marginBottom:'0px',
    textAlign:'center',
    color:'white'
 }
}



  render(){
    return (
      <div>
      <h3 style={this.getstylhead()}>Wallet Manager </h3>
      <Navbar bg="dark" variant="dark">
   <Navbar.Brand href="#"></Navbar.Brand>
   <Nav className="mr-auto">
     <Link to='/' className='text-white mr-3 active'>
      Add Transaction
    </Link>
     <Link to='/income' className='text-white mr-3'>
     Source History
     </Link>
     <Link to='/expence' className='text-white mr-3'>
     Expense History

     </Link>
     <Link to='/list' className='text-white mr-3'>
     Marketing list
     </Link>

   </Nav>
 </Navbar>

     </div>
     );
  }
}
export default Head;
