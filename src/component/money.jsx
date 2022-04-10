import React from 'react';
import Addmoney from './addmoney'
import Showaddmoney from './showaddmoney'
import Showexpencemoney from './showexpencemoney'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Head from './nav';
import Addlist from './adlist';
import firebase from '../firebase.js'
import moment from "moment";
import {
  Button
} from 'react-bootstrap';

class Money extends React.Component {
  componentDidMount() {
    var starCountRef = firebase.database().ref("addmoney").orderByChild("id");
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      var result = [];
      for (var item in data) {
        result.push(data[item]);
      }
      this.setState({
        ...this.state,
        addmoney: result
      })

    });

    var starCountRe = firebase.database().ref("expencemoney").orderByChild('id');
    starCountRe.on('value', (snapshot) => {
      const data = snapshot.val();
      var result = [];
      for (var item in data) {
        result.push(data[item]);
      }
      this.setState({
        ...this.state,
        expencemoney: result
      })
    });

  }

  state = {
    addmoney: [],

    expencemoney: [],
    cash: 0,
    display: 'none'
  }
  expence = (obj) => {
    firebase.database().ref("expencemoney").push(obj)

  }

  source = (obj) => {
    var date = new Date();
    var idt = date.getTime();
     var timestame = -1 * idt;
    obj = {
      ...obj,
      id: timestame,
      datetime: moment().format("DD-MM-YYYY hh:mm:ss")
    }
    firebase.database().ref("addmoney").push(obj)
  }

  deleteadd = (id) => {
    var starCountRef = firebase.database().ref("addmoney")
    starCountRef.orderByChild('id')
      .equalTo(id)
      .once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          //remove each child
          starCountRef.child(childSnapshot.key).remove();
        });
      });
      }

  deleteexpence = (id) => {

    var starCountRef = firebase.database().ref("expencemoney")
    starCountRef.orderByChild('id')
      .equalTo(id)
      .once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          //remove each child
          starCountRef.child(childSnapshot.key).remove();
        });
      });
  }

  cash = () => {
    var totalsource = 0;
    this.state.addmoney.forEach((item) => totalsource += Number(item.sourceAmount));
    var totalexpenses = 0;
    this.state.expencemoney.forEach((item) => totalexpenses += Number(item.expenceAmount));
    var cash = totalsource - totalexpenses;

    this.setState({
      ...this.state,
      cash: cash,
      display: 'block'
    })

  }


  render() {
    return ( <
      Router >
      <
      div >
      <
      Head / >
      <
      div style = {
        {
          display: 'inline-flex',
          backgroundColor: '#f4f4f4',
          width: '100%',
          marginTop: 10
        }
      } >
      <
      Button onClick = {
        this.cash
      }
      className = 'btn btn-primary btn-lg ml-3 mr-3 mt-0'

       >Cash in wallet < /Button> <
      h4 style = {
        {
          display: this.state.display,
          marginTop:10
        }
      } >
      &nbsp;
       {
        this.state.cash
      } &nbsp;
      TK < /h4> <
      /div> <
      Route exact path = '/'
      render = {
        props => ( <
          React.Fragment >
          <
          Addmoney source = {
            this.source
          }
          addsource = {
            this.state.addmoney
          }
          expence = {
            this.expence
          }
          addexpence = {
            this.state.expencemoney
          }
          /> <
          /React.Fragment>

        )
      }
      /> <
      Route exact path = '/income'
      render = {
        props => ( <
          React.Fragment >
          <
          Showaddmoney addmoney = {
            this.state.addmoney
          }
          deleteadd = {
            this.deleteadd
          }
          /> <
          /React.Fragment>

        )
      }
      /> <
      Route exact path = '/expence'
      render = {
        props => ( <
          React.Fragment >
          <
          Showexpencemoney expencemoney = {
            this.state.expencemoney
          }
          deleteexpence = {
            this.deleteexpence
          }
          /> <
          /React.Fragment>

        )
      }
      /> <
      Route exact path = '/list'
      render = {
        props => ( <
          React.Fragment >
          <
          Addlist / >
          <
          /React.Fragment>

        )
      }
      />



      <
      /div> <
      /Router>
    )
  }

}
export default Money;
