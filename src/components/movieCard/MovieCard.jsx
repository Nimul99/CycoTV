import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const isMovieOpen = false;
  // console.log(movie);

  const openMovie = () => {
    navigate('/movieDetails', { state: { movie } });
  };

  return (
    <div
      onClick={openMovie}
      className="card w-full mt-10 mb-14 border border-zinc-600 rounded-sm backdrop-blur-sm backdrop-opacity-80 backdrop-brightness-10"
    >
      <img
        className="w-full h-full object-cover rounded-sm hover:brightness-110"
        src={movie?.Poster}
        alt=""
      />
      <div className="p-2 text-white">
        <h2 className="text- font-semibold">{movie?.Title}</h2>
        <p className="mt-2 text-xs">{movie?.Runtime}</p>
        <p className="text-xs">Released: {movie?.Released}</p>
      </div>

      {/* {isMovieOpen && (
        <div className="fixed items-center inset-0 z-50 top-0 flex justify-center backdrop-blur-xl">
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            width="80%"
            poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
          >
            <source src="MY_VIDEO.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
          </video>
        </div>
      )} */}
    </div>
  );
};

export default MovieCard;
