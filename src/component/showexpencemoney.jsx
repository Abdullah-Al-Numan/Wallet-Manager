import React from 'react';
import Showexpence from './showexpence'



class Showexpencemoney extends React.Component
{

  render(){
        return  this.props.expencemoney.map( items=>(
         <Showexpence items={items} key={items.id} deleteexpence = {this.props.deleteexpence} />
      )
    )
}

}
export default Showexpencemoney;
