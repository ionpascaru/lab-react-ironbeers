import React, {Component} from "react";
import Header from "../components/Header.js";
import BeerService from "../services/BeerService.js";
import Beer from '../components/Beer'


class List extends Component {
  state = {
    beers: []
  }

getList = () => {
  BeerService.list().then(response => {
    this.setState({beers: response.data})
    console.log(this.state.beers)
  })
}

  componentDidMount() {
    this.getList()
  }

  render() {
    return (
      <article className="Beers">

        {this.state.beers.map(beer => <Beer { ...beer } key={beer._id}/>)}
      </article>
    );
  }
}

export default List
