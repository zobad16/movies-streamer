import logo from './logo.svg';
import Row from './Row.js';
import './App.css';
import requests from './Requests';

function App() {
  return (
    <div className="App">
      {/*Navbar */}
      {/*Banner*/}
      
      <Row 
        title="Popular" 
        fetchUrl={requests.fetchPopular}
        isLargeRow/>
      <Row 
        title="Trending" 
        fetchUrl={requests.fetchTrending}
        />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchAction}/>
      <Row title="Drama" fetchUrl={requests.fetchDrama}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
      <Row title="Anime" fetchUrl={requests.fetchAnime}/>
    </div>
  );
}

export default App;
