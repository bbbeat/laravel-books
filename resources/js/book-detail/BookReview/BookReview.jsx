<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import {useState, useEffect } from 'react'

>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
import {
    Redirect
} from "react-router-dom";

export default function BookReview(props) {

<<<<<<< HEAD
    const { book } = props;
=======
    let { book } = props;
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd

    const [values, setValues] = useState({
        rating: 0,
        text: ''
<<<<<<< HEAD
    })
=======
    });
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd

    const [errors, setErrors] = useState({});

    const [success_message, setSuccessMessage] = useState(null);

    const handleValueChange = event => {
<<<<<<< HEAD
        let name = event.target.name,
            value = event.target.value;

        if (name == 'rating') {
            value = Math.min(100, value);
        }

        if (name == 'text') {
            if (value.length > 100) {
                value = value.substr(0, 100);
            }
        }
=======
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd

        setValues(previous_values => {
            return ({
                ...previous_values,
<<<<<<< HEAD
                [name]: value
=======
                [event.target.name]: event.target.value
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
            })
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();

        setErrors({});

<<<<<<< HEAD
        //     /api/books/review/123
        const response = await fetch('/api/books/review/' + book.id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json', // tell Laravel that we want JSON as response
                'Content-type': 'application/json', // tell Laravel that we are sending JSON
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(values)
        })

        // determine if validation failed on the server
        // (server returned with code 422)
        const validation_failed = response.status == 422;

        // parse response as JSON (because we get JSON
        // both on success and failure)
        const data = await response.json();

        if (validation_failed) {
            // display the error messages
=======
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
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
            setErrors(data.errors);
        } else {
            // display success message
            props.setSuccessMessage(data.message);
            props.reloadBook();
            setSuccessMessage(data.message);
        }
<<<<<<< HEAD
=======

>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
    }

    const loadReview = async () => {
        const response = await fetch(`/api/books/review/${book.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();

<<<<<<< HEAD
        // if the review was found
        if (response.status == 200) {
            setValues({
                rating: data.rating,
                text: data.text
=======
        if (response.status == 200) {
            setValues(previous_values => {
                return {
                    ...previous_values,
                    ...data
                }
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
            })
        }
    }

    useEffect(() => {
        loadReview();
    }, []);
<<<<<<< HEAD

=======
    
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
    if (success_message) {
        return <Redirect to={ `/book/${book.id}` } />
    }

<<<<<<< HEAD
    return (
        <div className="book-review">

            <h1 className="book-review__headline">
                { book.title }
                <div className="book-review__headline-sub">Submit a review</div>
            </h1>

            <form action="" method="post" onSubmit={ handleSubmit }>

                {
                    success_message ? (
                        <div className="success-message">{ success_message }</div>
                    ) : ''
                }

                <div className="form-group">
                    <label>
                        <div className="form-group__label">Rating</div>
                        <input type="number" name="rating" value={ values.rating } onChange={ handleValueChange } />
                        {
                            errors.rating ? (
                                errors.rating.map(error => (
                                    <div key={ error } className="error-message">{ error }</div>
                                ))
                            ) : ''
                        }
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <div className="form-group__label">Text</div>
                        <textarea name="text" cols="30" rows="10" value={ values.text } onChange={ handleValueChange }></textarea>
                        {
                            errors.text ? (
                                errors.text.map(error => (
                                    <div key={ error } className="error-message">{ error }</div>
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
=======
    

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
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
}