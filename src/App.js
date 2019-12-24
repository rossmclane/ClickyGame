import React, { Component } from "react";
import Header from "./components/Header";
import Game from "./components/Game/Game";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    imgs: [
      "https://images.unsplash.com/flagged/photo-1577107281915-33822ce6fd28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1575599525681-888d5b382cb8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1577089727350-d5333e5911a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1576727703094-558fc6fe4216?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1575101537118-a6ff6cc48f07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1575500221017-ea5e7b7d0e34?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1575102890923-2d7afc68fdd8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1575169813231-c60ace1847b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1575444424163-eeb64e01baac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1576361181962-701d5694bfbf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1576825298729-103eee9ca91b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250",
      "https://images.unsplash.com/photo-1576935429524-1df7fb127097?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixlib=rb-1.2.1&q=80&w=250"
    ],
    clickedImgs: []
  };

  handleClick = ({ target }) => {
    var randArray = [];

    while (randArray.length < 12) {
      var randInt = Math.floor(Math.random() * 12);
      if (!randArray.includes(randInt)) {
        randArray.push(randInt);
      }
    }

    this.setState({
      imgs: randArray.map(randIndex => this.state.imgs[randIndex])
    });

    if (!this.state.clickedImgs.includes(target.src)) {
      this.setState({
        clickedImgs: this.state.clickedImgs.concat(target.src),
        score: this.state.score + 1
      });

      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 });
      }
    } else {
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }

      this.setState({ score: 0, clickedImgs: [] });
    }
  };

  render() {
    return (
      <div>
        <Header state={this.state} />
        <Game imgs={this.state.imgs} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
