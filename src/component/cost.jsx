
import React from 'react'

class Cost extends React.Component{

  state = {
    total:0
  }

  totalexpense = (items)=>{
    var total = 0;
    items.forEach((item)=> total += Number(item.cost));

    this.setState({
      total: total
    })
    console.log(this.state.total);

  }

timeStyle = ()=>{

}





render()
  {
    return(
      <div>
      <button onClick={this.totalexpense.bind(this, this.props.items)}>Total Expence</button>
      <h3 style={this.timeStyle()}> Expence: {this.state.total}</h3>
      </div>

    )
}

}
export default Cost
