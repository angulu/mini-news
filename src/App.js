import { useEffect, useState } from 'react';
import axios from "axios";
import News from './components/news';
import Search from './components/search';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newsList, setNewsList] = useState({data: []});

useEffect(() => {
  if (!searchQuery) return;
  const config = {headers: {"x-api-key": process.env.REACT_APP_API_KEY}, params: {q: searchQuery} };
  axios.get("https://api.newscatcherapi.com/v2/search", config)
  .then((response) => {
      setNewsList({data: response.data.articles, isSuccess: true});
  })
  .catch((error) => {
    setNewsList({data: [], isError: true, error: error.response?.data?.message});
  });
}, [searchQuery]);

  return (
    <main>
    <Search handleUseSearchInput={setSearchQuery}/>
    <hr />
      <section className='news-section'>
      {newsList.isSuccess && (
        <>
        {newsList.data.map((news, index) => (
          <News key={index} newDetails={news}/>
        ))}
        </>
      )}
      {newsList.isError && (
        <p className='error-message'>{newsList.error}</p>
      )}
    </section>
    
    </main>
  );
}

export default App;
