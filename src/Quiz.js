import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';



export default function Quiz() {
  
  

  const apiUrl = 'https://nishantsingh910.pythonanywhere.com/api-question';
         fetch(apiUrl)
           .then((response) => response.json())
           .then((data) => setQuestions(data));
      
  


  const [checked, setChecked] = React.useState('first');
  const [nestedchecked, nestedsetChecked] = React.useState(1);
  const [date, setDate] = useState();
  const [questions, setQuestions] = useState([]);

  




  const nestedQuestion = (question) => {
    
    if(checked==="second")
    return (<View><Text>{question.options[1].nestedquestions[0].question}</Text>
    
    {question.options[1].nestedquestions[0].nestedoptions.map(option => (
    <>
    <View style={{flexDirection:"row"}}>   
    <RadioButton key={option.optionId} style={{flexDirection:"column"}}
        value={option.optionId}
        status={ nestedchecked === option.optionId ? 'checked' : 'unchecked' }
        onPress={() => nestedsetChecked(option.optionId)}
        
      />
    <Text>{option.text}</Text>
    </View> 
    </>
    ))}
    </View>)
    else
    return <Text></Text>   
}

  
//   const questions=[
//     {
//         "questionId": 1,
//         "formId": 1,
//         "question": "When was your first ultrasound?",
//         "typeId": 3,
//         "type": "datepicker",
//         "text": "2020-05-01",
//         "options": [],
//         "Name": "",
//     },
//     {
//       "questionId": 2,
//       "formId": 1,
//       "question": "Did your health care provider give you an estimated date of delivery (EDD) based on ultrasound?",
//       "typeId": 4,
//       "type": "radio",
//       "text": "",
//       "Name": "",
//       "options": [
//           {
//               "optionId": 1,
//               "text": "Yes",
//               "checked": false,
//               "questions": []
//           },
//           {
//               "optionId": 2,
//               "text": "No",
//               "checked":true,
//               "questions": [
//                   {
//                       "questionId": 6,
//                       "formId": 1,
//                       "question": "Did you have an ultrasound during this pregnancy ?",
//                       "typeId": 6,
//                       "type": "dropdown",
//                       "text": "",
//                       "Name": "",
//                       "options": [
//                           {
//                               "optionId": 1,
//                               "text": "Yes",
//                               "checked": true,
//                           },
//                           {
//                               "optionId": 2,
//                               "text": "No",
//                               "checked": false,
//                           },
//                           {
//                               "optionId": 3,
//                               "text": "I dont know",
//                               "checked": false,
//                           }

//                       ]
//                   }
//               ]
//           }
//       ]
//   }
   
// ];





    return (
      
      
          
      <View style={styles.container}>

        {
         
        questions.map(question => (
         <>
         

         {/* <Text key={question.questionId}>{question.questionId}. {question.question}</Text> */}

        <Text > {question.question}</Text>


        { question.type===1 ? 
  <>

       <DatePicker
        style={{width: 200,padding:10}}
        date={date}
        mode="date"
        placeholder={question.text}
        format="YYYY-MM-DD"
        minDate={question.text}
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
   </>
      

        : question.type===2 ?
        (


    <>
        <View style={{flexDirection:"row"}}>
        <RadioButton  style={{flexDirection:"column",}}
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}></RadioButton>
        <Text style={{padding:5}}>Yes</Text>
        <RadioButton style={{flexDirection:"column"}}
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{padding:5}}>No</Text></View>
      
      
      
      <View>{nestedQuestion(question)}</View>



   </>
      )
  
        
      :(
      <Text>Dropdown</Text> 

      )}  
   </>
      ))} 
      
    </View>
       
      )}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
  });