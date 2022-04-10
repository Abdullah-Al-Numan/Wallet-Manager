import React from 'react'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,
  ListGroup,
  Button
} from 'react-bootstrap';

class Item extends React.Component{

  state = {
    cost:''
  }

 costStyle = (cost)=>{
     if(cost > 0)
      {
        return{
          display : 'none',
        }
      }
 }
 costliStyle = (cost)=>{
     if(cost <= 0)
      {
        return{
          display : 'none',
        }
      }
 }


  itemStyle = (cost)=>{
      if(cost > 0)
       {
         return{
           display:'inline-flex',
           margin:10,
           backgroundColor: 'blue',
           color: 'green',
         }
       }
       else{
         return{
           display:'inline-flex',
           margin:10
         }
       }
  }

costfunc = (e)=>{
  this.setState({
    cost:e.target.value
  })
}
costClick = (obj)=>{
 this.props.costitemfunc(this.state.cost,obj)
}

render()
  {

    return (

        <div style= {this.itemStyle(this.props.item.cost)} >
        <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Item Name: {this.props.item.ItemName}</ListGroup.Item>
    <ListGroup.Item>Quantity: {this.props.item.Quantity}</ListGroup.Item>
    <ListGroup.Item style= {this.costliStyle(this.props.item.cost)}>Cost: {this.props.item.cost}</ListGroup.Item>
    <ListGroup.Item style= {this.costStyle(this.props.item.cost)}>
              <input style={{width:120, marginRight:10}} type='number'  name='cost' onChange={this.costfunc} placeholder="Add Cost"/>
              <Button  className='d-inline btn-md' type ="submit" onClick={this.costClick.bind(this,this.props.item)}>Save</Button>
              </ListGroup.Item>
    <Button className='btn btn-danger'  onClick={()=>this.props.deletelistitem(this.props.item.outoId)}>delete</Button>
  </ListGroup>
</Card>

        </div>

      )


      }

}
export default Item
