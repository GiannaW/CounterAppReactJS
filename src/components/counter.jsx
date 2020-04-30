import React, { Component } from 'react';




class Counter extends Component {
    // state = {    
    //    value:this.props.counter.value
    // };


    // constructor(){
    //     super();
       
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    // handleIncrement = () =>{
        

       
    //     this.setState({value:this.state.value+1})
    // }


    doHandleIncrement=()=>{
        this.handleIncrement({id:1});



    };


   






    render() { 

       
        return ( <div>
            



            <span className={this.getBadgeClasses()}>{this.formatCount()}></span>
            <button 
            onClick ={()=>this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'
            >
                Increase</button>
            <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">
                Delete</button>
            
 

        </div> 
        );
    }



getBadgeClasses(){
    let classes="badge m-2 badge-"
    classes +=this.props.counter.value===0 ?"warning":"primary";
    return classes;
}

formatCount(){
    const {value}=this.props.counter;
    return value ===0 ? "Zero": value;
}

}
 
export default Counter;





























// import React, { Component } from 'react';

// class Counter extends Component {
//     state = { 
//        count:0
       


//      };
//      handleIncrement=()=>{
//          this.setState({count:this.count+1});
//      }


   
//     render() {
        
//         //let classes = this.getBadgeClasses();

       

//         return <div>

            
           
//             <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
//             <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
//            <ul>
//     {this.state.tags.map(tag=><li key ={tag}>{tag}</li>)}


//            </ul>
           
           
//             </div>    }

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

//             formatCount(){

//                 const {count}=this.state;
               
//                 return count === 0 ? 'Zero' : count;



//             }





// }
// export default Counter;