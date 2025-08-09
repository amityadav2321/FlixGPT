import React from 'react'
import Videobackground from './Videobackground';
import Videotitle from './Videotitle';
import { useSelector } from 'react-redux';

function Maincontainer() {
    const movies = useSelector(store=>store.movie?.nowPlayingMovie);

    if(!movies) return ;
    const mainMovie = movies[8];
    

    const {original_title, overview,id} = mainMovie;
  return (
    <div>
        
        <Videotitle title={original_title} overview={overview}/>
        <Videobackground movieId={id}/>
    </div>
  )
}

export default Maincontainer;