import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import MapView from 'react-native-maps';
export default class GoogleMapsDemo extends Component {

  constructor(props){
    super(props);
    this.state = {latitude: 40.3802769, longitude:-74.5101174}
  }
  render() {
    return (
      <View style={styles.container}>


       <TextInput
          style={{bottom: 800}}
          placeholder="Latitude"
          onChangeText={(latitude) => this.setState({latitude})}
          value={this.state.latitude}
        />

        <TextInput
          style={{bottom: 750}}
          placeholder="Longitude"
          onChangeText={(longitude) => this.setState({longitude})}
          value={this.state.longitude}
        />
      
       <MapView style = {styles.map}
       region = {{
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         latitudeDelta: .1,
         longitudeDelta: .1
       }} 
       mapType = "hybrid"
       >
         <MapView.Marker 
         coordinate = {{
          latitude: this.state.latitude,
          longitude: this.state.longitude
         }}

         title = {'ScoopHouse'}
         description = {'Homebase'}
         />
       </MapView>
 
      </View>
    );
  }
}
const styles = StyleSheet.create({
container: {
position: 'absolute',
flexDirection: 'collumn',
 top: 0,
 bottom: 0,
 left: 0,
 right: 0, justifyContent: 'flex-end',
 alignItems: 'center'
}, 
map: {
  position: 'absolute',
  top: 200,
  bottom: 0,
  left: 0,
  right: 0
}

})