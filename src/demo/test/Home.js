import React, { Component } from 'react';
import './../../App.css';
import './coco.css';

class CocoHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocoData: [],
      mouseIn: false,
      timeBlock: false,
      className: ["coco-image-so","coco-image-so","coco-image-so"],
      cssStyleLeft:[0,-320,-640],
      cssStyleLeftActived:[0,-320,-640],
      cssStyleLeftPrepare:[320,0,-320],
      activeIndex:1,
      display:["block","none","none"],
      transform:["","",""],
      zindex:[1,2,1]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateSlides = this.updateSlides.bind(this);
  }

  componentDidMount() {
    this.setState({
      cocoData: [
        "hentai/Title/Dynasty warriors 8(shin sangoku musou 7) characters art/Zhangchunhua_dw8art.jpg",
        "TWISTYS/Mia Malkova/www.imagefap.com.pictures.7366499.Mia-Malkova-02$mia-malkova-052215-p01_012.jpg",
        "hentai/Warriors/Great Artwork 03/g.e-hentai.org.g.635993.3cacb3aec0$rogue_color_by_marcioabreu7_d51ypio.jpg"
      ]
    });
    setInterval(() => this.updateSlides(), 20);
  }

  updateSlides(){
    let style = this.state.cssStyleLeft;
    if(!this.state.mouseIn) {
      if(!this.state.timeBlock) {
        let styleLeftActived = style[this.state.activeIndex];
        if(styleLeftActived <= this.state.cssStyleLeftActived[this.state.activeIndex]) {
          this.setState({
            timeBlock: true
          });
          setTimeout(()=>{
            let style1 = this.state.activeIndex === 0 ? this.state.cssStyleLeftActived[0] : this.state.cssStyleLeftPrepare[0];
            let style2 = this.state.activeIndex === 1 ? this.state.cssStyleLeftActived[1] : this.state.cssStyleLeftPrepare[1];
            let style3 = this.state.activeIndex === 2 ? this.state.cssStyleLeftActived[3] : this.state.cssStyleLeftPrepare[2];
            let zindex = [1,1,1];
            zindex[this.state.activeIndex] = 2;

            let activeIndex = this.state.activeIndex + 1;
            activeIndex = activeIndex > 2 ? 0 : activeIndex;
            zindex[activeIndex] = 3;

            this.setState({
              cssStyleLeft: [style1,style2,style3],
              timeBlock: false,
              activeIndex: activeIndex,
              zindex : zindex
            });
          }, 2000);
        } else {
          style[this.state.activeIndex] = style[this.state.activeIndex] -10;
          this.setState({
            cssStyleLeft: style
          });
        }
      }
    }
  }


  render() {
    const { cocoData, cssStyleLeft, zindex } = this.state;
    return (
    <div id="test1" className="coco-image-home" style={{width : "1320px", height: "480px",overflow: "hidden"}}>

      {cocoData.map((pic, index) => (
          <div className="coco-image-home" style={{zIndex : zindex[index], left : cssStyleLeft[index]+"px", display:"inline"}}>
            <img src={"http://coco/pic/"+pic}/>
          </div>
        ))}

    </div>
    );
  }
}

export default CocoHome;
