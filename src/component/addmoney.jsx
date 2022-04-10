import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";


import {Accordion,
  Card,
  Button
} from 'react-bootstrap';


class Addmoney extends React.Component
{
 componentDidMount(){
   this.setState({...this.state,
      addmoney: this.props.addmoney,
      expencemoney:this.state.expencemoney
    })
 }
  state ={
    addmoney:{
      source:'',
      sourceAmount:0
    },
    expencemoney:{
      id:Date(),
      datetime: moment().format("DD-MM-YYYY hh:mm:ss"),
      expence:'',
      expenceAmount:0

    }
  }

  sourceValue = (e)=>{
    this.setState({
      ...this.state,
      addmoney:{
        ...this.state.addmoney,
        source: e.target.value
      }
    })
  }

  sourceAmountValue = (e)=>{

    this.setState({
      ...this.state,
      addmoney:{
        ...this.state.addmoney,
        sourceAmount: e.target.value

      }
    })
  }

  saveSource = (e)=>{
    e.preventDefault()
  this.props.source(this.state.addmoney)
  }

  //expence
  expenceValue = (e)=>{
    this.setState({
      ...this.state,
      expencemoney:{
        ...this.state.expencemoney,
        expence: e.target.value
      }
    })
  }

  expenceAmountValue = (e)=>{

    this.setState({
      ...this.state,
      expencemoney:{
        ...this.state.expencemoney,
        expenceAmount: e.target.value
      }
    })
  }

  saveExpence = (e)=>{
    e.preventDefault()
    var date = new Date();
    var idt = date.getTime();
     var timestame = -1 * idt;
    this.setState({
      ...this.state,
      expencemoney:{
        ...this.state.expencemoney,
        datetime: moment().format("DD-MM-YYYY hh:mm:ss"),
        id: timestame
      }
    })

  this.props.expence(this.state.expencemoney)
  }


render(){
    return(
      <div>
      <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Add Money To Wallet
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <form  noValidate autoComplete="off" >
           <TextField style={{display:'block',marginBottom:10}} type='text' id="outlined-basic" label=" Source Name" variant="outlined" name='source' onChange={this.sourceValue} />
           <TextField style={{display:'block',marginBottom:10}} type='number' id="outlined-basic1" label="Amount In TK" variant="outlined" name='sourceAmount' onChange={this.sourceAmountValue} />
            <Button style={{display:'block'}} variant="primary" type='submit' className='btn btn-lg' onClick={this.saveSource}>SAVE</Button>{' '}
         </form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Expense Money From Wallet
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
         <form  noValidate autoComplete="off" >
         <TextField style={{display:'block',marginBottom:10}} type='text' id="outlined-basic2" label=" Expense Name" variant="outlined" name='source' onChange={this.expenceValue} />
         <TextField style={{display:'block',marginBottom:10}} type='number' id="outlined-basic3" label="Amount In TK" variant="outlined" name='sourceAmount' onChange={this.expenceAmountValue} />
          <Button style={{display:'block'}} variant="primary" type='submit' className='btn btn-lg' onClick={this.saveExpence}>SAVE</Button>{' '}
       </form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>

    )
  }
}
export default Addmoney;
