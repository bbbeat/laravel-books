import {useState, useEffect } from 'react'

import {
    Redirect
} from "react-router-dom";

export default function BookReview(props) {

    let { book } = props;

    const [values, setValues] = useState({
        rating: 0,
        text: ''
    });

    const [errors, setErrors] = useState({});

    const [success_message, setSuccessMessage] = useState(null);

    const handleValueChange = event => {

        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            })
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();

        setErrors({});

       const response = await fetch('/api/books/review/' + book.id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(values) 
        })

        const validation_failed = response.status == 422;

        const data = await response.json();

        if (validation_failed) {
            // display error message
            setErrors(data.errors);
        } else {
            // display success message
            props.setSuccessMessage(data.message);
            props.reloadBook();
            setSuccessMessage(data.message);
        }

    }

    const loadReview = async () => {
        const response = await fetch(`/api/books/review/${book.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();

        if (response.status == 200) {
            setValues(previous_values => {
                return {
                    ...previous_values,
                    ...data
                }
            })
        }
    }

    useEffect(() => {
        loadReview();
    }, []);
    
    if (success_message) {
        return <Redirect to={ `/book/${book.id}` } />
    }

    

    // const [rating, setRating] = useState(0);
    // const [text, setText] = useState('');

    // const handleRatingChange = (event) => {
    //     setRating(event.target.value);
    // }

    // const handleTextChange = (event) => {
    //     setText(event.target.value);
    // }


    return (
        <div className="book-review">

        <h1 className="book-review__headline">
            { book.title }
            <div className="book-review__headline-sub">Submit a review</div>
        </h1>

        <form action="" method="post" onSubmit= {handleSubmit}>

            {
                success_message ? (
                    <div className="success-message">{success_message}</div>
                ) : ''
            }

            <div className="form-group">
                <label>
                    <div className="form-group__label">Rating (0-100)</div>
                    <input type="number" name="rating" max = "100" min ="0" value= {values.rating} onChange={handleValueChange} />
                    {/* handleRatingChange */}
                    {
                        errors.rating ? (
                            errors.rating.map(error=>(
                                <div className="error-message">{error} </div>
                            ))
                        ) : ''
                    }
                </label>
            </div>

            <div className="form-group">
                <label>
                    <div className="form-group__label">Text</div>
                    <textarea name="text" cols="30" rows="10" value= {values.text} onChange={handleValueChange}></textarea >
                    {/* handleTextChange */}
                    {
                        errors.text ? (
                            errors.text.map(error=>(
                                <div className="error-message">{error} </div>
                            ))
                        ) : ''
                    }
                </label>
            </div>

            <div className="form-group">
                <input type="submit" value="Submit review" />
            </div>

        </form>

    </div>
        )
}