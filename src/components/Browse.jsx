
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Navbar from './Navbar'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Navbar/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse