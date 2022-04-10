import React from 'react';
import Itemlist from './itemlist'
import TextField from '@material-ui/core/TextField';
import {
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase.js'



class Addlist extends React.Component {

  componentDidMount() {
    var starCount = firebase.database().ref("listitem").orderByChild("id");
    starCount.on('value', (snapshot) => {
      const data = snapshot.val();
      var result = [];
      for (var item in data) {
        result.push(data[item]);
      }
      this.setState({
        ...this.state,
        items: result
      })
    });
  }

  state = {
    items: [],
    total: 0,
    display: 'none'
  }

  itemdata = (e) => {
    e.preventDefault()
    var date = new Date();
    var idt = date.getTime();
    var  timestame = -1 * idt;

    var obj = {
      id: timestame,
      ItemName: e.target.name.value,
      Quantity: e.target.Quantity.value,
      cost: 0
    }

    var root = firebase.database().ref("listitem");
    var outoId = root.push().key;
    root.child(outoId).set({
      ...obj,
      outoId: outoId
    })

  }


  costitemfunc = (cost, obj) => {
    firebase.database().ref("listitem").child(obj.outoId).set({
      ...obj,
      cost: cost
    })

    //window.location.reload();
  }

  deletelistitem = (outoId) => {
    firebase.database().ref("listitem").child(outoId).remove();

  }

  totalexp = () => {
    var total = 0;
    this.state.items.forEach((item) => total += Number(item.cost));
    this.setState({
      ...this.state,
      total: total,
      display: 'block'

    })

  }

  render() {
    return ( <
      div style = {
        {
          backgroundColor: '#f4f4f4'
        }
      } >
      <
      div style = {
        {
          display: 'inline-flex',
          backgroundColor: '#f4f4f4',
          width: '100%',
          marginTop: 10,
          marginBottom: 10
        }
      } >
      <
      Button onClick = {
        this.totalexp
      }
      className = 'btn btn-primary btn-lg ml-3 mr-3'
       > Marketing cost < /Button> <
      h4 style = {
        {
          display: this.state.display,
          marginTop: 5
        }
      } >
      &nbsp;
      {
        this.state.total
      } &nbsp;
      TK < /h4> <
      /div> <
      div style = {
        {
          marginLeft: 20,
          borderBottom: '1px solid #ccc'
        }
      } >
      <
      form noValidate autoComplete = "off"
      onSubmit = {
        this.itemdata
      } >
      <
      TextField style = {
        {
          display: 'block',
          marginBottom: 10
        }
      }
      type = "text"
      name = 'name'
      id = "outlined-basic"
      label = " Item Name"
      variant = "outlined" / >
      <
      TextField style = {
        {
          display: 'block',
          marginBottom: 10
        }
      }
      type = "text"
      name = 'Quantity'
      label = "Quantity"
      variant = "outlined" / >
      <
      Button style = {
        {
          display: 'block'
        }
      }
      variant = "primary"
      type = 'submit'
      className = 'btn btn-lg' > SAVE < /Button>{' '} <
      /form> <
      /div> <
      Itemlist items = {
        this.state.items
      }
      costitemfunc = {
        this.costitemfunc
      }
      deletelistitem = {
        this.deletelistitem
      }
      /> <
      /div>
    )
  }
}
export default Addlist
