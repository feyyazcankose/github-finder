import React, { Component } from 'react'
import User from './User';
import Loader from './Loader'

class Users extends Component {
 
    render() {

      if(this.props.loader)
          return <Loader/>
      else
      {
        return (
        <div className="container mt-2">
                  {this.props.users.length>0 && <button className="btn btn-danger w-100" onClick={this.props.clear}>Temizle</button>}
                  <div className="row">
                    {
                        this.props.users.map( (user)=>{
                            return <User user={user} key={user.id}/>
                        } )
                    }
                  </div>
          </div>
        )
     }
  }
}

export default Users