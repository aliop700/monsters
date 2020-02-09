import React from "react";
import "./App.css";
import SeacrhBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SeacrhBox handleChange={this.handleChange} placeHolder="Seacrh me" />

        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
