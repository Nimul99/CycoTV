import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  
  const openMovie = () => {
    navigate('/movieDetails', { state: { movie } })
  };

  

  return (
    <div
      onClick={openMovie}
      className="card w-full mt-10 mb-20 h-80 md:w-[250px]"
    >
      <img
        className="w-full h-full object-cover rounded-sm hover:brightness-110"
        src={movie?.Poster}
        alt=""
      />
      <div className="p-2 text-white">
        <h2 className="text- font-semibold">{movie?.Title}</h2>
        <p className="mt-2 text-sm">{movie?.Runtime}</p>
        <p className="text-sm">Released: {movie?.Released}</p>
      </div>

      {isMovieOpen && (
        <div className="fixed items-center inset-0 z-50 top-0 flex justify-center backdrop-blur-xl">
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            width="80%"
            // height="264"
            poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
          >
            <source src="MY_VIDEO.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
