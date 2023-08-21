
import { useState } from 'react';
import TrailerCard from '../../components/trailerCard/TrailerCard';


const Trailer = () => {
    const movies = [
        {
            title: 'GARGOYLE OF GOTHAM Official Trailer (2023)',
            genre: 'Gargoyle of Gotham.',
            releaseYear: '2023',
            image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/710fb97a-cf47-4b68-826c-50d7eeab6be4/Screen+Shot+2023-07-20+at+2.50.46+PM.jpg',
            video:'https://www.youtube.com/embed/atnW4D6pc-w',
            rating: 8.8,
            director: 'Gargoyle of Gotham.',
            duration: '2h 58m',
        },
        {
            title: 'DEADPOOL 3 "Wolverine Fight" Teaser Trailer (2024)',
            genre: 'Drama',
            releaseYear: '2024',
            image: 'data:image/jpeg;base64,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',
            video:'https://www.youtube.com/embed/zgRMAiP8ls0',
            rating: 9.3,
            director: 'Frank Darabont',
            duration: '2h 22m',
        },
        {
            title: 'THE WOMAN IN THE WALL Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://static.standard.co.uk/2023/08/11/15/newFile-5.jpg?width=1200&auto=webp&quality=75',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Classic Fighters Best Moview 2023',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://i.ytimg.com/vi/vKQi3bBA1y8/sddefault.jpg',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Soloman The Warrior 2024',
            genre: 'Action, Crime, Drama',
            releaseYear: '2024',
            image:'https://film-book.com/wp-content/uploads/2013/01/ben-drew-ray-winstone-hayley-atwell-the-sweeney-01-350x164.png',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Mission Impossible Trailer (2024)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2024',
            image:'https://cdn.vox-cdn.com/thumbor/PzR02nc02l5WcaFQBO1sErRuX4I=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10858599/mi6_c_353e_532.jpg',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'GARGOYLE OF GOTHAM Official Trailer (2023)',
            genre: 'Gargoyle of Gotham.',
            releaseYear: '2023',
            image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/710fb97a-cf47-4b68-826c-50d7eeab6be4/Screen+Shot+2023-07-20+at+2.50.46+PM.jpg',
            video:'https://www.youtube.com/embed/atnW4D6pc-w',
            rating: 8.8,
            director: 'Gargoyle of Gotham.',
            duration: '2h 58m',
        },
        {
            title: 'KingMaster Pro Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'data:image/jpeg;base64,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',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Cyber 71  Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://cdn.trendhunterstatic.com/phpthumbnails/158/158128/158128_1_800.jpeg',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'THE WOMAN IN THE WALL Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://static.standard.co.uk/2023/08/11/15/newFile-5.jpg?width=1200&auto=webp&quality=75',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = movies.slice(firstIndex, lastIndex);
  const npage = Math.ceil(movies.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


  function prePage() {
    if(currentPage !=1)
    {
      setCurrentPage(currentPage-1);
    }
      }
      function nextPage() {
        if(currentPage !=npage)
        {
          setCurrentPage(currentPage+1);
        }
      }
      function changePage(id) {
        setCurrentPage(id);
      }

 
 

    return (
        <>
         <div className="w-full flex flex-wrap gap-1">
        {records.map((movie, index) => (
          <TrailerCard key={index} movie={movie} />
        ))}
      </div>

      <nav>
        <ul className="flex justify-center space-x-2 mt-4">
          <li>
            <button
              className={`bg-gray-800 px-2 py-1 rounded ${
                currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={prePage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li key={i}>
              <button
                className={`bg-red-500 text-white px-2 py-1 rounded ${
                  currentPage === n ? 'bg-red-700' : ''
                }`}
                onClick={() => changePage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`bg-gray-800 px-2 py-1 rounded ${
                currentPage === npage ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={nextPage}
              disabled={currentPage === npage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
        </>
    );
};

export default Trailer;