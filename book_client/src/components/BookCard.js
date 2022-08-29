import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

// Change image soure for production

function BookCard(props) {
    const book = props.book;

  return (
    <div className='card-container'>
        <img src='https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2Fmax_width_960%2Fpublic%2Fblogs%2FsJ3CT4V.gif%3Fitok%3D0SCQuwls&w=2048&q=90' alt=''/>
        <div className='desc'>
            <h2>
                <Link to={`/show-book/${book._id}`}>
                    { book.title }
                </Link>
            </h2>
            <h3>{ book.author }</h3>
            <p>{ book.description }</p>
        </div>
    </div>
  )
}

export default BookCard