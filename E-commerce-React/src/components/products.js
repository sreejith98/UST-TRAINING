import React from 'react';



class Products extends React.Component{

    constructor(props) {
        super(props);
              this.state = {
            apiData: []
        }
              this.componentDidMount = this.componentDidMount.bind(this);
        
    }
  
    
    render() {
        <div>
        <button onClick={this.componentDidMount} >Fetch</button>
           </div>
                             
         var {isLoaded,items} = this.state;

         if(!isLoaded){
           return  <div><h1>Loading...</h1></div>
            
     
         } 
         else {
         
         
         return (
           <div className="App">
     
                <ul>
                <div class="row">
                 {items.map(item => (
                  <li key = {item.id}  >
                      <div class="column">
                      <img class='img' src={item.image}  width="150" height="200"></img> </div> 
                           <h2 > {item.title} </h2>
                          <h2 >$ {item.price}</h2> 
                           <h3 >{item.category}</h3>        
                  </li>
                 ))}
                </div>
                </ul>
     
     
           </div>
         )
         }
       
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
                  .then(res=>res.json())
                  .then(json=>{
                    this.setState({
                      isLoaded:true,
                      items: json,
                    })
                  })
      }
    
}

export default Products;