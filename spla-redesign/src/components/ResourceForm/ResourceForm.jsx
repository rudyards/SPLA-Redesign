import React, { Component } from 'react';

class ResourceForm extends Component {

    render(){
        return(
            <select name="Service Planning/Geographical Area" onChange={this.props.handleAreaChange} value={this.props.area}>
              <option value="1 - Antelope Valley">1 - Antelope Valley</option>
              <option value="2 - San Clarita Valley">2 - San Clarita Valley</option>
              <option value="3 - San Gabriel Valley">3 - San Gabriel Valley</option>
              <option value="4 - Metro LA">4 - Metro LA</option>
              <option value="5 - West LA">5 - West LA</option>
              <option value="6 - Central LA">6 - Central LA</option>
              <option value="7 - South East LA">7 - South East LA</option>
              <option value="8 - South Bay">8 - South Bay</option>
            </select>
        )
    }
}

export default ResourceForm;