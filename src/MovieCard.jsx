/* eslint-disable react/prop-types */
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
      <div className="movie" key={imdbID}>
        <div className="absolute top-0 p-4 w-full text-white">
          <p className="rounded-xl bg-gray-800 w-fit p-1">{Year}</p>
        </div>
  
        <div>
          <img 
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
            alt={Title} 
            className="w-full h-full object-cover opacity-100 hover:opacity-30 transition duration-400 ease-in-out"
        />
        </div>
  
        <div className="z-2 bg-gray-800 py-4 px-6 absolute bottom-0 right-0 left-0 transition duration-400 ease-in-out hover:bg-transparent">
            <span className="font-semibold uppercase text-xs tracking-wide text-gray-300">
                {Type}
            </span>
            <h3 className="mt-1 text-white">
                {Title}
            </h3>
        </div>
      </div>
    );
  }
  
  export default MovieCard;