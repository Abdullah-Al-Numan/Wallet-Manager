import React from 'react'
import Item from './item'

class Itemlist extends React.Component{



render()
  {
    return  this.props.items.map(item=>(
     <Item item={item} key={item.id} costitemfunc={this.props.costitemfunc} deletelistitem = {this.props.deletelistitem} />

    )

      )
}

}
export default Itemlist
