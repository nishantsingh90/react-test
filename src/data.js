export default[
    {
        "questionId": 1,
        "formId": 1,
        "question": "When was your first ultrasound?",
        "typeId": 3,
        "type": "datepicker",
        "text": "1/1/2020",
        "options": [],
        "Name": "",
    },
    {
        "questionId": 2,
        "formId": 1,
        "question": "Did your health care provider give you an estimated date of delivery (EDD) based on ultrasound?",
        "typeId": 4,
        "type": "radio",
        "text": "",
        "Name": "",
        "options": [
            {
                "optionId": 1,
                "text": "Yes",
                "checked": false,
                "questions": []
            },
            {
                "optionId": 2,
                "text": "No",
                "checked":true,
                "questions": [
                    {
                        "questionId": 6,
                        "formId": 1,
                        "question": "Did you have an ultrasound during this pregnancy ?",
                        "typeId": 6,
                        "type": "dropdown",
                        "text": "",
                        "Name": "",
                        "options": [
                            {
                                "optionId": 1,
                                "text": "Yes",
                                "checked": true,
                            },
                            {
                                "optionId": 2,
                                "text": "No",
                                "checked": false,
                            },
                            {
                                "optionId": 3,
                                "text": "I dont know",
                                "checked": false,
                            }

                        ]
                    }
                ]
            }
        ]
    }
   
]