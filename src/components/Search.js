import React, { Component } from 'react'

export class Search extends Component {
  constructor(props) {
      super(props);
      this.onSubmit=this.onSubmit.bind(this);      
  }

  onSubmit(e) {
    e.preventDefault();
    const value =e.target.search.value;
    if(value=="")
        this.props.setAlert("Arama için değer girilmedi!","warning");
    else
    {
        this.props.onSearch(value);
        e.target.search.value="";
    }

  }

  render() {
    return (
      <div className="container my-4">
          <form onSubmit={this.onSubmit}>
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Ara.." name="search"/>
                  <div className="input-append">
                      <input type="submit" className="btn btn-primary" value="Ara" />
                  </div>
              </div>
          </form>

      </div>
    )
  }
}

export default Search