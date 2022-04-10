import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,
  ListGroup,
  Button
} from 'react-bootstrap';

class Showmoney extends React.Component
{



  render(){
  const {datetime,source,sourceAmount} =  this.props.item;
 return (
        <div style={{display:'inline-flex',margin:10}}>
        <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Time: {datetime}</ListGroup.Item>
    <ListGroup.Item>Source Name: {source}</ListGroup.Item>
    <ListGroup.Item>Amount In TK: {sourceAmount}</ListGroup.Item>
    <Button className='btn btn-danger' onClick={this.props.deleteadd.bind(this,this.props.item.id)}>delete</Button>
  </ListGroup>
</Card>

        </div>
  )
}


  }


export default Showmoney;
