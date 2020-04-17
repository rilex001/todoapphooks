import React, {useState} from 'react'

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$12',
            id: 432
        },
        {
            name: 'Game of Thrones',
            price: '$20',
            id: 32432
        },
        {
            name: 'Inception',
            price: '$45',
            id: 76575
        }
    ])
    return(
        <p>Proba213</p>
    )
}

export default MovieList