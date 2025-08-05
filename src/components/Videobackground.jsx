import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

function Videobackground({ movieId }) {
  const trailerVideo = useSelector(store => store.movie?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div>
      <div className="absolute top-0 left-0  w-screen aspect-video -z-10">
      <iframe
        className="w-screen aspect-video pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
    
    <div className='bg-black h-280 mt-190 -z-20'>

    </div>

    </div>
    
  );
}

export default Videobackground;
