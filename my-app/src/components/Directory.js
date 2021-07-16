import React, {Component} from "react"

const Directory = (props) => {
    const {person} = props
    return (
        <div className="text">
            <div className="container">
                <h1 className="name">{person.name.first} {person.name.last}</h1>

                <ul className="middle-text">
                    <li>From: {person.city}, {person.country}</li>
                    <li>Job Title: {person.title}</li>
                    <li>Employer: {person.employer}</li>
                </ul>
            </div>

            <div className="movies">
                <h1>Favorite Movies:</h1>
                <ol className="movie-list">
                    <li>{person.favoriteMovies[0]}</li>
                    <li>{person.favoriteMovies[1]}</li>
                    <li>{person.favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}

export default Directory