import React, { Component } from 'react';
import API from './config/API.json';

class RawPorn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          isSwitched: true,
          page:1000,
          cocoData: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.pageList = this.pageList.bind(this);
        this.list = this.list.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.display = this.display.bind(this);
        this.handleTrash = this.handleTrash.bind(this);
        this.handlePass = this.handlePass.bind(this);
      }

    pageList(p) {
        fetch(API["API-RAW-TOPIC-PAGE-ACTIVE"]+p,
            {headers: {
                  'Access-Control-Allow-Origin': '*',
                }}
          )
          .then(response => response.json())
          .then(
              (response) => {
                this.setState({
                  error: null,
                  isLoaded: true,
                  cocoData: response
                });

              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
          )
    }

    list() {
            fetch("http://coco:8082/rawp/topic/list",
                {headers: {
                      'Access-Control-Allow-Origin': '*',
                    }}
              )
              .then(response => response.json())
              .then(
                  (response) => {
                    this.setState({
                      error: null,
                      isLoaded: true,
                      cocoData: response
                    });

                  },
                  // Note: it's important to handle errors here
                  // instead of a catch() block so that we don't swallow
                  // exceptions from actual bugs in components.
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
              )
        }

    handleChange(event) {
        this.setState({page: event.target.value});
        this.pageList(event.target.value);
    }

    handleSwitch(event) {
      this.setState(prevState => ({isSwitched: !(this.state.isSwitched)}) );
      console.log(event.target.value);
      console.log(this.state.isSwitched);
      this.display();
      if(this.state.isSwitched) {
        this.list();
      }
    }

    componentDidMount() {
       //this.load(this.state.page);
    }

    display() {
      var x = document.getElementById("page_text");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    handleTrash(cocoSourceId) {
      console.log(cocoSourceId);
      var x = document.getElementById(cocoSourceId);
      x.style.display = "none";
      let xx = fetch("http://coco:8082/rawp/topic/trash?id="+cocoSourceId,
          {headers: {
                'Access-Control-Allow-Origin': '*',
              }}
        )
        .then(response => {console.log(xx, "test inside"); return response});
        console.log(xx, "test outside");
    }

    handlePass(cocoSourceId) {
      console.log(cocoSourceId);
      var x = document.getElementById(cocoSourceId);
      x.style.display = "none";
      let xx = fetch("http://coco:8082/rawp/topic/pass?id="+cocoSourceId,
          {headers: {
                'Access-Control-Allow-Origin': '*',
              }}
        )
        .then(response => {console.log(xx, "test inside"); return response});
        console.log(xx, "test outside");
    }

    render() {
      const { error, isLoaded, page, cocoData } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return (
          <form onSubmit={this.handleChange}>
                        <label>
                          <a href='http://coco:8082/rawp/load' target='_blank' rel='noopener noreferrer'>load</a> :
                          <input type="text" value={page} onChange={this.handleChange} />
                        </label>
          </form>
        )

      } else {
        return (
         <ul>
          <form onSubmit={this.handleChange}>
              <label>
                <button onClick={this.handleSwitch} type="button">Passed</button>:
                <input id="page_text" type="text" value={page} onChange={this.handleChange} />
              </label>
          </form>
            {cocoData.map(cocoSource => (
               cocoSource.previews.length>0 ?
                <li key={cocoSource.id} id={cocoSource.id} style={{borderColor:"blue", borderWidth:"1px"}}>
                    <div><a href={cocoSource.link} target="_blank">{cocoSource.link.split("/")[4].split('-').join(' ')}</a><br/></div>
                  {
                    cocoSource.previews.map(preview => (
                      <img key={preview.id} style={{height:5+'em'}} src={preview.src} />
                    ))
                  }
                    <div>
                    <a onClick={()=>this.handlePass(cocoSource.id)} target="_blank" style={{color:"green"}}>{cocoSource.previews.length>0 ? "[Pass]":""}</a>
                    <a href={cocoSource.link} target="_blank">[------------Review------------]</a>
                    <a onClick={()=>this.handleTrash(cocoSource.id)} target="_blank" style={{color:"red"}}>{cocoSource.previews.length>0 ? "[Trash]":""}</a>  <br/>

                    </div>
                </li> : ""

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

export default RawPorn;
