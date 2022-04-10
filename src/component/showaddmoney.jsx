import React from 'react';
import Showmoney from './showmoney'



class Showaddmoney extends React.Component
{
  state = {
    addmoney:[]
  }

  static getDerivedStateFromProps(props, state) {
  return {addmoney: props.addmoney };
}

  render(){
    return this.state.addmoney.map( item=>(
         <Showmoney item={item} key={item.id} deleteadd = {this.props.deleteadd} />
      )
    )

}

}
export default Showaddmoney;
