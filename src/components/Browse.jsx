import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Navbar from './Navbar'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Navbar />
      {showGptSearch ? ( <GptSearch/> ):(<>
      <div>
        <Maincontainer />
      </div>

   
      <div className="relative -mt-340 z-20 bg-gradient-to-b from-transparent to-black">
        <SecondaryContainer />
      </div>
      </>)}
      
        
      
      
    </div>
  );
};

export default Browse;
