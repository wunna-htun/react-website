
import React from "react"




class Item extends React.Component{

    render(){
        return (
            <li>
                {this.props.name},${this.props.price},{this.props.type}
            </li>
        )
    }

}

class Signup extends React.Component{


    state={
        items:[
            {id:1,name:"apple",price:2.0},
            {id:2,name:"orange",price:2.0},
            
        ]
    }

   add=()=>{
       console.log("add");
      let id =this.state.items.length+1;
      
       this.setState({
              items:[  ...this.state.items,
                {id,name:`Items ${id}`,price: 0.01* id}]
          });

  
  }  
   
  
  render(){
    return (
        <section>
        This is Signup

        <ul>
            {
                this.state.items.map(i=>{
                    return (
                        <Item key={i.id} name={i.name} price={i.price}/>
                    )
                })
        }
        </ul>
        <button onClick={this.add}> Add</button>
        
    </section>
    )

  }
    

   
   
}

export default Signup