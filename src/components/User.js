import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class User extends Component {


    render() {
        const {login,avatar_url,html_url,id} = this.props.user;
       
            return ( 
                <div className="col-md-3 mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h5>{login}</h5>
                        </div>
                        <div className="card-body d-flex gap-3 flex-column">
                            <img src={avatar_url} className="img-responsive rounded w-100" alt={login} />
                            </div>
                        <div className="card-footer">
                            <Link to={`/users/${login}`}   className="btn btn-primary" >Görüntüle</Link>
                        </div>
                    </div>
                </div>                  
     
        );
        }
        
    
}

export default User;
