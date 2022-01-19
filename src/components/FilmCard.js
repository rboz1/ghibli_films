import React from 'react';
import '../styles/FilmCard.css'

export class FilmCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoading: false,
          films: []
        };
      }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoading: true,
                films: result
              });
            },
            (error) => {
              this.setState({
                isLoading: true,
                error
              });
            }
          )
          
      }
      render() {
        const { error, isLoading } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoading) {
          return <div>Loading...</div>;
        } else {
          return (
            <main>
              {this.state.films.map((film) => 
              (
                <section>
                  <h1> { film.title } </h1>
                  <h2> { film.original_title } </h2>
                  <p> { film.description } </p>
                </section>
              ))}
            </main>
          );
        }
      }
    }