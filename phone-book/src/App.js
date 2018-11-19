import React, { Component } from 'react';
import PhoneForm from './components/PhoneFrom';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
 id=2
 state={
   information:[
     {
       id:0,
       name:'박성준',
       phone:'010-3496-5555'
     },
     {
       id:1,
       name:'박민국',
       phone:'010-2220-2222'
     }
   ]
  }
   handleCreate=(data)=>{
     const{information}=this.state;
     this.setState({
       information: information.concat({id:this.id++,...data})
     })
   }
 
 render(){
      return(
     <div>
       <PhoneForm onCreate={this.handleCreate}/>
       <PhoneInfoList data={this.state.information}/>
    </div>
   );
 }
 }
export default App;