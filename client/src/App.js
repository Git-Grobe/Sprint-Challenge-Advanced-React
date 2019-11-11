import React from "react";
import axios from "axios";

import { NavBar } from "./components/NavBar";
import { PlayerCard } from "./components/PlayerCard";

import "./index.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ players: res.data });
      })
      .catch(err => console.log(err, "ERROR cannot fetch data!"));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          {this.state.players.map(player => (
            <PlayerCard
              id={player.id + 1}
              key={player.id}
              name={player.name}
              searches={player.searches}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
