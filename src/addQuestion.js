import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput,View,TouchableOpacity,ScrollView,Dimensions,Picker,KeyboardAvoidingView,Platform,TouchableWithoutFeedback} from 'react-native';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'




const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

export default function Question() {
  const [selectedValue, setSelectedValue] = useState("datepicker");
  const [value, onChangeText] = React.useState('');
  const [date, setDate] = useState();
  
  
  const Formdata={type:selectedValue,question:value,text:date}



  const handleSubmit=()=>{
    console.log(Formdata)
//     axios.post(`https://nishantsingh910.pythonanywhere.com/add-question`, { "headers": {

//       "content-type": "application/json",
      
//       },Formdata })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
    
    fetch('https://nishantsingh910.pythonanywhere.com/add-question/', {
      method: 'POST',
      
      mode: 'cors',
      
      
      body:JSON.stringify(Formdata),
      })
      .then((response) =>  {
          console.log('Posted successfully')
      })
      .catch((error) => {
        console.error(error);
      });
  
  

}
  
    return (
      <ScrollView>
        <View style={styles.container}>
     
        
        <View style={styles.container2}>
        <Text style={styles.styleText}>Select Question Type*</Text>
        </View>
        <View style={styles.container3}>
        <Picker
        selectedValue={selectedValue}
        style={{ height:25,color: "#722f9e",fontSize: 16, width: 250,textAlign:"center", }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="datepicker" value="datepicker" />
        <Picker.Item label="radio" value="Radio" />
        <Picker.Item label="Dropdown" value="Dropdown" />
        
      </Picker>
        </View>
        
      {selectedValue==="datepicker" ?
     
      <KeyboardAvoidingView
   
      style = {{ flex: 1 ,paddingTop:30,paddingBottom:30,}}
      behavior = "padding" >
      <Text style={styles.styleText}>Add Question*</Text>
        
    <TextInput
      style={{ height: 80, borderColor: 'gray',width: 255,justifyContent: 'flex-start',marginLeft:config.deviceWidth * 0.1,paddingTop:0, borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <View style={styles.container2} ><Text style={styles.styleText}>Add Text*</Text>
    <DatePicker
        style={{width: 200,padding:5}}
        date={date}
        mode="date"
        placeholder="2022-06-01"
        format="YYYY-MM-DD"
        minDate="2018-06-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date) =>setDate(date) }
      /> 
      
    </View>
    <TouchableOpacity  style={styles.styleButton1}>
        <Text style={styles.buttonText}  onPress={handleSubmit}>Submit</Text>
    </TouchableOpacity> 
    </KeyboardAvoidingView>
   
      :
      <Text>Working</Text>
        }
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      
    },
    container1: {
      flex: 1,
      
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    container2:{
      flexDirection:'column',
      padding:10,
      borderColor:'black',
      marginLeft: config.deviceWidth * 0.1,
      
      width : config.deviceWidth * 0.8
      
    },
    container3:{
      flexDirection:'column',
      padding:10,
      borderColor:'#722f9e',
      borderWidth:1,
      marginLeft: config.deviceWidth * 0.1,
      marginBottom:16,
      width : config.deviceWidth * 0.8
      
    },
    container4:{
      flexDirection:'column',
      marginLeft: config.deviceWidth * 0.5,
      marginBottom:16,
      width : config.deviceWidth * 0.8
      
    },
    styleText:{

      fontSize: 16,
      color: "#722f9e",
      fontWeight: "normal",
      textAlign:"center",
    },
    styleButton1: {
      backgroundColor: "#009688",
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
  
