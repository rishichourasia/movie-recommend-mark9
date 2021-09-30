import { useState } from "react";
import "./styles.css";

const movieDb = {
  Scifi: [
    {
      name: "Interstellar",
      rating: "4.5/5",
      img:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB"
    },
    {
      name: "Inception",
      rating: "4/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Coherence",
      rating: "4/5",
      img:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2605/26056641_so.jpg"
    }
  ],

  Fiction: [
    {
      name: "Harry Potter Series",
      rating: "5/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    },
    {
      name: "Avatar",
      rating: "5/5",
      img:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g"
    },
    {
      name: "Arrival",
      rating: "4.5/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg"
    }
  ],
  Drama: [
    {
      name: "Persuit of Happyness",
      rating: "4.5/5",
      img:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ"
    },
    {
      name: "Curious Case of benjamin button",
      rating: "4/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BNjQ0NTY2ODY2M15BMl5BanBnXkFtZTgwMjE4MzkxMDE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Forest Gump",
      rating: "5/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Drama");

  function genreClick(genre) {
    setGenre(genre);
  }

  return (
    <div>
      <div className="App">
        <h1>MovieSelect</h1>
        <h4>Some of the highest reviewed movies i personally recomenned</h4>
      </div>

      <div className="genre">
        {Object.keys(movieDb).map((genre) => (
          <button className="btn" key={genre} onClick={() => genreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="movie">
        {movieDb[selectedGenre].map((movie) => (
          <div className="card">
            <img src={movie.img} alt="Avatar" />
            <div className="container">
              <h2>
                <b>{movie.name}</b>
              </h2>
              <p>{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
