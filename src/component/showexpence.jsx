import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,
  ListGroup,
  Button
} from 'react-bootstrap';

class Showexpence extends React.Component
{



  render(){
  const {datetime,expence,expenceAmount} = this.props.items;
 return (
        <div style={{display:'inline-flex',margin:10}}>
        <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Time: {datetime}</ListGroup.Item>
    <ListGroup.Item>Expense Name: {expence}</ListGroup.Item>
    <ListGroup.Item>Amount In TK: {expenceAmount}</ListGroup.Item>
    <Button className='btn btn-danger' onClick={this.props.deleteexpence.bind(this,this.props.items.id)} >delete</Button>
  </ListGroup>
</Card>

        </div>
  )

  }

}
export default Showexpence;
