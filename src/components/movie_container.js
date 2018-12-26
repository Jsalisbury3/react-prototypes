import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class Container extends Component {
    constructor(props){
        super(props)
        this.state={
            movies: []
        }
    }
    render(){
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return(
                <Movie info={movieInfo} key={index}/>
            )
        });
        return(
            <div>
                {movieList}
            </div>
        )
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((result)=>{
            this.setState({
                movies:result.data.feed.entry
            })
        });
    }
}
export default Container