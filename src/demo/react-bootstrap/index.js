import React, { Component } from 'react';
import Chart from './fusioncharts/Chart';
import LineChart from './fusioncharts/LineChart';
import Guage from './fusioncharts/Guage';
import Pie from './fusioncharts/Pie';
import Pie3D from './fusioncharts/Pie3D';
import InteractiveCandlestickChart from './fusioncharts/InteractiveCandlestickChart';
//import SimpleCandlestickChart from './demo/fusioncharts/SimpleCandlestickChart';
import GoogleGaugeChart from './google-charts/GoogleGaugeChart';
import GoogleTableChart from './google-charts/GoogleTableChart';
import AtomButton from '../../atom/common/button';
import { Tabs, Tab, Row, Col, Nav, Spinner, Image, Container, Card, Button } from 'react-bootstrap';

//https://www.fusioncharts.com/react-charts
class BootStrap extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showId:1,
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
      this.setState({
        showId:id
      });
    }

    render() {
      const {showId} = this.state;
      console.log(showId);


      const sources = [ // Declare an array of video sources
              //{ url: '/videos/video.webm', type: 'video/webm' },
              { url: 'coco/pic//xvideo/VR/112-czechvrcasting-JenniferMendez.mp4', type: 'video/mp4' }
      ];
      const keys = { // If you want to re-define the keys, here are the defaults
          left: 'A',
          right: 'D',
          up: 'W',
          down: 'S',
          rotateLeft: 'Q',
          rotateRight: 'E',
          fullScreen: 'F',
          zeroSensor: 'Z',
          playPause: ' '
      };
      return (
        <div>


          <Tabs defaultActiveKey="fusioncharts" id="tab-demo">
            <Tab eventKey="fusioncharts" title="FusionCharts">

              <a href="https://www.fusioncharts.com/react-charts" target="_blank">fusioncharts</a>
              <div style={{paddingBottom: "120px"}}>
                <AtomButton name="Chart" active={showId === 1} handleClick={()=>this.handleChange(1)} />
                <AtomButton name="Guage" active={showId === 2} handleClick={()=>this.handleChange(2)} />
                <AtomButton name="Pie" active={showId === 3} handleClick={()=>this.handleChange(3)} />
                <AtomButton name="Pie3D" active={showId === 4} handleClick={()=>this.handleChange(4)} />
                <AtomButton name="LineChart" active={showId === 5} handleClick={()=>this.handleChange(5)} />
                <AtomButton name="Candlestick" active={showId === 6} handleClick={()=>this.handleChange(6)} />
              </div>
              {
                showId === 1 ? <Chart/>:
                showId === 2 ? <Guage/>:
                showId === 3 ? <Pie/>:
                showId === 4 ? <Pie3D/>:
                showId === 5 ? <LineChart/>:
                showId === 6 ? <InteractiveCandlestickChart/>:
                ""
              }
            </Tab>
            <Tab eventKey="Card" title="React Bootstrap">
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  <a href="https://react-bootstrap.github.io/components/images/" target="_blank"> Visit react-bootstrap</a>
                </Card.Body>
              </Card>
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
              <Spinner animation="border" variant="info" />
              <Spinner animation="border" variant="light" />
              <Spinner animation="border" variant="dark" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />

               <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src="http://coco/pic/thumbnail/TWISTYS/Mia%20Malkova/www.imagefap.com.pictures.7366499.Mia-Malkova-02$mia-malkova-052215-p01_012.jpg" rounded />
                  </Col>
                  <Col xs={6} md={4}>
                    <Image src="http://coco/pic/thumbnail/TWISTYS/Mia%20Malkova/www.imagefap.com.pictures.7366499.Mia-Malkova-02$mia-malkova-052215-p01_012.jpg" roundedCircle />
                  </Col>
                  <Col xs={6} md={4}>
                    <Image src="http://coco/pic/thumbnail/TWISTYS/Mia%20Malkova/www.imagefap.com.pictures.7366499.Mia-Malkova-02$mia-malkova-052215-p01_012.jpg" thumbnail />
                  </Col>
                </Row>
              </Container>
            </Tab>

            <Tab eventKey="Google" title="Google Chart">
              <a href="https://react-google-charts.com/" target="_blank" > react-google-charts</a>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Google Gauge Chart</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Google Table Chart</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <GoogleGaugeChart/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <GoogleTableChart/>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>

            <Tab eventKey="ant" title="Ant Design">
              <div>
                <img src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg" width="100"/>
                +
                <img src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg" width="100"/>
                <br/>
                <iframe src="https://2x.ant.design/components/button-cn/" width="80%" height="600px"/>
              </div>
            </Tab>
            <Tab eventKey="Popup" title="17 Popup Examples">
              <iframe src="https://react.rocks/tag/Popup" width="80%" height="700px"/>
            </Tab>
            <Tab eventKey="React-Toastr" title="React-Toastr">
              <iframe src="https://tomchentw.github.io/react-toastr/#!/ToastContainer" width="80%" height="700px"/>
            </Tab>
            <Tab eventKey="DemoVLCPlayer" title="DemoVLCPlayer">
              <div>import DemoVLCPlayer from './vlcplayer'</div>
            </Tab>
            <Tab eventKey="VrPlayer" title="React VR Player">
                <iframe src="https://antoinejaussoin.github.io/" width="80%" height="700px"/>
            </Tab>
          </Tabs>

        </div>

      )

    }
}

export default BootStrap;
