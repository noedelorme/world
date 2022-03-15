import './css/App.scss';

const world = require("./world.json");

function Country(props){
  return (
    <div className="country">
      <div className="country-content clearfix">
        <div className="flag">
          <img src={props.country.flag} />
        </div>
        <div className="country-info">
          <span className="country-name">{props.country.name} <span className="population">({props.country.population})</span></span>
          <span className="capital">{props.country.capital}</span>
        </div>
      </div>
    </div>
  );
}

function Continent(props){
  return (
    <div className="continent">
      <div className="continent-name">{props.continent.name} <span className="population">({props.continent.population})</span></div>
      {props.continent.countries.map((item, index) => {
        return <Country key={index} country={item} />;
      })}
    </div>
  );
}

function App() {
  return (
    <div id="list" className="list">
      {world.continents.map((item, index) => {
        return <Continent key={index} continent={item} />;
      })}
    </div>
  );
}

export default App;
