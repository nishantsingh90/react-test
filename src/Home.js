import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native';
import Question from './addQuestion';
import Quiz from './Quiz';

const config = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
  }
class Home extends React.Component {
    render() {
        return (
    
        <View style={styles.container}>
              
        
        <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('Question')
          } style={styles.styleButton1}>
            <Text style={styles.buttonText}>Add question</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('Quiz')
          }  style={styles.styleButton2}>
            <Text style={styles.buttonText}>Poll</Text>
        </TouchableOpacity>
          
             
        </View>
            
            
          );
    }
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      justifyContent: 'center',
    },
    
    styleButton1: {
      backgroundColor: "#009688",
      borderRadius: 10,
      padding: 10,
      marginLeft: config.deviceWidth * 0.1,
      marginBottom:16,
      width : config.deviceWidth * 0.8
    },
    styleButton2: {
      backgroundColor: "#3254a8",
      borderRadius: 10,
      padding: 10,
      marginLeft: config.deviceWidth * 0.1,
      marginBottom:16,
      width : config.deviceWidth * 0.8
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

  export default Home;