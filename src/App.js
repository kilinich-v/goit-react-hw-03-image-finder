import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'

const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const changeQuery = newQuery => {    
    setQuery(newQuery);
  }

  const changePage = () => {
    setCurrentPage(currentPage + 1);
  }
  
  return (
    <>
      <SearchBar onSubmit={changeQuery} />
      <ImageGallery query={query} page={currentPage} changePage={changePage} />
    </>
  );
 }


export default App

