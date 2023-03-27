import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';

const greatWall = require('./images/wall.png');
const petra = require('./images/petra.png');
const redeemer = require('./images/redeemer.png');
const machuPicchu = require('./images/machu.png');
const chichenItza = require('./images/chichen.png');
const colosseum = require('./images/colosseum.png');
const tajMahal = require('./images/taj.png')

const timeline = [
  { title: 'Great Wall of China', image: greatWall },
  { title: 'Petra', image: petra },
  { title: 'The Redeemer', image: redeemer },
  { title: 'Machu Picchu', image: machuPicchu },
  { title: 'Chichen Itza', image: chichenItza },
  { title: 'Colosseum', image: colosseum },
  { title: 'Taj Mahal', image: tajMahal },
];

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default class App extends Component {
  splashLogic = () => {
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);
  }

  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  render() {
    return(
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
          {
            timeline.map((post, index) =>
              <PostContainer key={index} post={post}
              onPress={this.showImage} />
            )
          }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    )
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});