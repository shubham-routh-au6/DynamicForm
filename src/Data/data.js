export const data = [{
    "uid": "First Name",
    "placeholder": "FirstName",
    "name": "First_Name",
    "required": "true",
    "type": "text",
}, {
    "uid": "Last Name",
    "placeholder": "LastName",
    "name": "Last_Name",
    "required": "true",
    "type": "text",
},
{
    "uid": "Email",
    "placeholder": "Email",
    "name": "Email",
    "required": "true",
    "type": "email",
}, {
    "uid": "Age",
    "placeholder": "Age",
    "name": "Age",
    "required": "true",
    "type": "number",
},
{
    "uid": "Gender",
    "type": "radio",
    "name": "Gender",
    "value": ["Male", "Female", "Other"],
    "required": "true",
},
{
    "uid": "Role",
    "type": "select",
    "name": "Role",
    "required": "true",
    "options": [
        {
            "label": "Select",
            "value": "Select"
        },
        {
            "label": "Front End",
            "value": "Front End"
        }, {
            "label": "Back End",
            "value": "Back End"
        }, {
            "label": "Full Stack",
            "value": "Full Stack"
        },
    ]

},
{
    "uid": "Address",
    "type": "address",
    "name": "Address",
    "value": ["State", "City", "Landmark"],
    "required": "true",
},

{
    "uid": "Overall Experience",
    "type": "textArea",
    "name": "Overall_Experience",
    "required": "true"
},
]