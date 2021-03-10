import {
    Link
} from 'react-router-dom';

export default function BookDetail(props) {

    const { bookId, book } = props;

    return (
        <div className="book-detail">

            <div className="book-detail__left">

                <div className="book-detail__image">
                    <img src={ book.image } alt=""/>
                </div>

<<<<<<< HEAD
                <Link to={ `/book/${book.id}/review` }>Review this book</Link>
=======
                <Link to={ `/book/${book.id}/review`}>Review this Book</Link> 
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd

            </div>

            <div className="book-detail__right">

                {
                    props.success_message ? (
<<<<<<< HEAD
                        <div className="success-message">{ props.success_message }</div>
                    ) : ''
                }
=======
                        <div className="success-message">{props.success_message}</div>
                    ) : ''
                }
                
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd

                <h1 className="book-detail__title">{ book.title }</h1>

                <ul className="book-detail__authors">
                    {
                        book.authors.map(author => {
                            return (
                                <div key={ author.id } className="book-detail__author author">
                                    <div className="author__name">
                                        { author.name }
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>

                <div className="book-detail__description" dangerouslySetInnerHTML={{ __html: book.description }}></div>

                <div className="book-detail__reviews">
                    <h2>Reviews</h2>

                    {
                        book.reviews.length ? (
                            book.reviews.map(review => (
                                <div className="book-detail__review">
                                    <div className="book-detail__review-rating">{ review.rating }</div>
                                    <div className="book-detail__review-text">{ review.text }</div>
                                </div>
                            ))
                        ) : (
                            <p>There are no reviews yet. <Link to={ `/book/${book.id}/review` }>Be the first one to review this book.</Link></p>
                        )
                    }

                </div>
            </div>

        </div>
    )
}