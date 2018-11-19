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
   ],
   keyword:''
  }
  handleChange=(e)=>{
    this.setState({
      keyword:e.target.value,
    });
  }
   handleCreate=(data)=>{
     const{information}=this.state;
     this.setState({
       information: information.concat({id:this.id++,...data})
     })
   }

   handleRemove=(id)=>{
     const{information}=this.state;
     this.setState({
       information:information.filter(info=>info.id !==id)
     })
   }
 
   handleUpdate=(id,data)=>{
     const {information}=this.state;
     this.setState({
       information:information.map(
         info=>id===info.id
        ? {...info, ...data}//새 객체를 만들어서 기존의 값과
        //전달 받은 data  값을 덮었씀 
        : info//기존의 값을 그대로 유지
         )
     })
   }
 render(){
      const{information,keyword}=this.state;
      const filteredList=information.filter(
        info=>info.name.indexOf(keyword)!==-1
      );


      return(
     <div>
       <PhoneForm onCreate={this.handleCreate}/>
       <p>
          <input
          placeholder="검색 이름을 입력하세요."
          onChange={this.handleChange}
          value={keyword}
          
          />

       </p>
       <hr/>
       <PhoneInfoList 
       data={information} 
       onRemove={this.handleRemove}
       onUpdate={this.handleUpdate}
       />
    </div>
   );
 }
 }
export default App;