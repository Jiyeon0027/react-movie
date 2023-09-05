import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div class={style.moviebox}>
      <img class={style.imgmovie} src={coverImg} alt={title} />
      <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {summary.length < 302 ? (
          <p>{summary}</p>
        ) : (
          <p>{summary.slice(0, 302)}...</p>
        )}
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  coverImg: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movie;
