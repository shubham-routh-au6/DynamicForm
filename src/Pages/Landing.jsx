import React from 'react'
import InputComponent from "../Components/inputCom";
import TextAreaComponent from "../Components/textAreaCom";
import { data } from '../Data/data'
import { validation } from '../Utility/Validation';

const Landing = () => {
    const [values, setValue] = React.useState({})
    const [error, setError] = React.useState([]);

    const handleChange = React.useCallback((event, editor) => {
        setError('');
        if (event.name) {
            const data = editor.getData();
            return setValue({ ...values, 'Overall_Experience': data });
        }
        setValue({ ...values, [event.target.name]: event.target.value });
    }, [values])

    const handleSubmit = (e) => {
        e.preventDefault();
        const validate = validation(data, values)
        if (validate.length) {
            return setError(validate)
        }
        console.log(values)
    }

    return (
        <div id="landingContainer">
            <h2>Dev Details Form</h2>
            <form onSubmit={handleSubmit} className="form">
                {error && error.map((e, i) => {
                    return (
                        <p className="error" key={i}>{e}</p>
                    )
                })}
                {data.map(value => {
                    return (<div key={value.uid}>
                        {
                            (
                                value.type === 'text' ||
                                value.type === 'radio' ||
                                value.type === 'select' ||
                                value.type === 'address' ||
                                value.type === 'email' ||
                                value.type === 'number'
                            )
                            &&
                            <InputComponent asset={value} handleChange={handleChange} />
                        }
                        {
                            value.type === 'textArea' &&
                            <TextAreaComponent asset={value} state={values} handleChange={handleChange} />
                        }
                    </div>)
                }
                )}
                <button>Submit your profile</button>
            </form>
        </div>
    )
}

export default Landing;