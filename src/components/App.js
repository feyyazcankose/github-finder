import axios  from 'axios';
import React, { Component } from 'react'
import Navbar from './Navbar';
import Users from './Users';
import Search from './Search';
import Alert from './Alert';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import UserMore from './UserMore';

export class App extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          users:[],
          loader:true,
          alert:null ,
          user:[],
          repo:[]
      }
      this.onSearch=this.onSearch.bind(this);
      this.clear=this.clear.bind(this);
      this.setAlert=this.setAlert.bind(this);
      this.userDetails=this.userDetails.bind(this);
  }

  onSearch(search){
      this.setState({loader:true,alert:false});
      axios
        .get(`https://api.github.com/search/users?q=${search}`)
        .then(res => {
          this.setState({users:res.data.items,loader:false})
        })
  } 

  clear(){
    this.setState({users:[]})
  }

  setAlert(msg,type)
  {
    this.setState({alert:{msg,type}}) 
    setTimeout(()=>{
      this.setState({alert:null})
     },3000)
  }

  userDetails(name){
    this.setState({loader:true,alert:false});
     axios
        .get(`https://api.github.com/users/${name}`)
        .then(res => this.setState({user:res.data}))
    
    axios
        .get(`https://api.github.com/users/${name}/repos`)
        .then(res => this.setState({repo:res.data,loader:false}));

        //https://api.github.com/users/mojombo/repos
  }

  componentDidMount(){
   
    
    setTimeout(()=>{
      axios.get("https://api.github.com/users")
      .then(res => this.setState({users: res.data, loader:false}))
    },3000)

 

  }

  render() {
    return (
        <BrowserRouter>
            <Navbar title="Github Finder"/>
            <Alert alert={this.state.alert}/>
            <Routes>
                <Route path="/" element={
                    <>
                    <Search onSearch={this.onSearch} setAlert={this.setAlert}/>
                    <Users users={this.state.users} loader={this.state.loader} clear={this.clear}/>
                    </>
                  }    
                />
                <Route path="/about" element={<About/>}    />
                <Route path="users">
                  <Route path=":idName" element={<UserMore  userDetails={this.userDetails} user={this.state.user} loader={this.state.loader} repo={this.state.repo}/>} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
  }
}

export default App