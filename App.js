import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TextProps from './TextProps';

class Home extends Component {
  state = {
    myState: 'Day one',
    titleButton: 'click me',
    clickCount: 0
  }
  updateState = () => {
    if (this.state.myState == 'Day one') {
      this.setState({ myState: 'Day two' })
    } else {
      this.setState({ myState: 'Day one' })
    }
    this.setState({ titleButton: `Clicked ${this.state.clickCount++}` });

  }

  render() {
    return (

      <View style={styles.container}>
        <TextProps
          myState={this.state.myState}
          updateState={this.updateState} />

        <Text>{this.state.myState}</Text>

        <Button
          onPress={this.updateState}
          title={this.state.titleButton}
        />
        <View style={styles.horizontalView}>

          <View style={styles.redbox} />
          <View style={styles.bluebox} />
          <View style={styles.blackbox} />
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    padding: 10,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalView: {
    margin: 40,
    flexDirection: 'column',
    width: 100,

  },
  redbox: {

    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {

    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {

    height: 100,
    backgroundColor: 'black'
  }

});
export default Home
