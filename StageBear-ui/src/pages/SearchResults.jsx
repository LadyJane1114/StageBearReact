import { useParams } from 'react-router-dom';

const SearchResults = ({ shows }) => {
  const { query } = useParams();
  const filteredShows = shows.filter(show =>
    show.Title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search results for "{query}"</h2>
      {filteredShows.length === 0 ? <p>No shows found.</p> : (
        <ul>
          {filteredShows.map(show => <li key={show.ShowID}>{show.Title}</li>)}
        </ul>
      )}
    </div>
  )
}

export default SearchResults;
