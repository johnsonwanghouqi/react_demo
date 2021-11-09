import React, { Component } from 'react';
import { ApiCall } from './../common/api/ApiCall.js';
class UrlGalleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          page:1000,
          cocoData: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.load = this.load.bind(this);
      }



    load(p) {
      ApiCall("http://coco:8082//urlg/page?p={1}",
              (response) => {
                this.setState({
                  error: null,
                  isLoaded: true,
                  cocoData: response.content
                })},
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  })},
                  p
              );
    }

    handleChange(event) {
        this.setState({page: event.target.value});
        this.load(event.target.value);
        console.log(this.state.page);
        console.log(event.target.value);
    }

    componentDidMount() {
       //this.load(this.state.page);
    }

    render() {
      const { error, isLoaded, page, cocoData } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
         <ul>

          <li><a href='https://www.xvideos.com/video21437387/brunette_likes_doggystyle' target='_blank' rel="noopener noreferrer">brunette_likes_doggystyle</a></li>
          <li><a href='https://www.xvideos.com/video24320101/evie_olson' target='_blank' rel="noopener noreferrer">evie_olson</a></li>
          <form onSubmit={this.handleChange}>
              <label>
                Source:
                <input type="text" value={page} onChange={this.handleChange} />
              </label>
          </form>
            {cocoData.map(cocoSource => (
              <li key={cocoSource.id}>
              <strong>{cocoSource.link.split("/")[4].split('-').join(' ')}</strong> {cocoSource.timestamp}<br/>
                {
                  cocoSource.pics.map(cocoSourcePic => (
                    <a href={cocoSource.link} target='_blank' key={cocoSourcePic.id} rel="noopener noreferrer">
                        <img style={{height:150+'px'}} src={cocoSourcePic.link} alt={cocoSourcePic.title}/>
                    </a>
                  ))
                }
              </li>
            ))}
          <form onSubmit={this.handleChange}>
              <label>
                Source:
                <input type="text" value={page} onChange={this.handleChange} />
              </label>
          </form>
         </ul>

        );
      }
    }
}

export default UrlGalleries;
