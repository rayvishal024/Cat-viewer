import './App.css'


const response = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random');
const data = await response.json();
const Cat = data.data;

function App() {
  return (

    <div className="container">

      <div className="cat-card">

        {/* header Section */}
        <div className="header-bg">
          <span className="origin">{Cat.origin}</span>
        </div>

        {/* image Section */}
        <div className="img-wrapper">
          <img src={Cat.image} alt={Cat.name} />
        </div>

        {/* content Section */}
        <div className="content">
          <h1>{Cat.name}</h1>
          <p className="description">{Cat.description}</p>

          <div className="stats">
            <div className="stat-box">
              <span className="label">Life Span</span>
              <span className="value">{Cat.life_span} yrs</span>
            </div>
            <div className="stat-box">
              <span className="label">Temperament</span>
              <span className="value">{Cat.temperament}</span>
            </div>
          </div>

          {/* wikipedia link */}
          <a href={Cat.wikipedia_url} target="_blank" className="wiki-link">
            Read on Wikipedia
          </a>

        </div>
      </div>
    </div>
  )
}

export default App