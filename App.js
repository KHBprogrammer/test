// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component {

//   componentDidMount(){
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, CameraRoll,Image} from 'react-native';
import  {render} from 'react-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sec: 120,
      soc: 32,
    }
  }
  setVal(evt){
      alert(typeof(evt)+'-torliin type tai');
    //   this.setState(evt=>({
    //       alert(evt.evt);
    //       sec: parseInt(evt.evt)
    //   }))
      setInterval(()=>this.state.sec = this.state.sec + 1,1000)
  }
  componentDidMount(){
    //   this.setVal();
      setInterval(() => (
              this.setState(sac => (
                { sec: sac.sec - 1 }
              ))
            ), 1000);
  }
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.headTitle} onPress={()=>alert('Daragdlaa '+this.setVal(125)+this.state.soc)}>Multiplayer.io geshsh</Text>
      <Text style={styles.headTitle}>{this.state.sec}</Text>
      <Text style={styles.headTitle}>{this.state.soc}</Text>
      <Image
      style={{
        width: 100+'%',
        height: 20+'%'
      }}
      source={{uri: "https://vignette.wikia.nocookie.net/naruto/images/d/dd/Naruto_Uzumaki%21%21.png/revision/latest?cb=20161013233552"}}/>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'

  },
  headTitle: {
    color: 'white',
    backgroundColor: 'green',
    padding: 20,
    width: 100/3+'%',
    fontSize: 18,
  },
});
