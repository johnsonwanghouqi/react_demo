import React, { Component } from 'react';
import { VLCPlayer } from 'react-native-yz-vlcplayer';

export default class DemoVLCPlayer extends Component {
  render () {
    return (
      <VLCPlayer
        source="http://coco/movie/bxjg/变形金刚17——汽车人斯派克.flv"
      />
    );
  }
}
