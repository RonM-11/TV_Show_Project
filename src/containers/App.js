import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      shows: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    fetch('https://api.tvmaze.com/shows')
      .then(response=> response.json())
      .then(users => {this.setState({ shows: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }


  render() {
    const { shows, searchfield, option } = this.state;
    const filteredShows = shows.filter(show =>{
      return show.name.toLowerCase().includes(searchfield.toLowerCase());    
    })
  

    return !shows.length ?
       <h1 className='tc title'>Loading...</h1>:
          <div className='tc'>
              <img className= 'logo' src="https://cdn.jsdelivr.net/gh/RonM-11/react_tv_show@master/img/logo.png" alt="logo" />
              <h1 className='f1 the_title'>Tv shows</h1>            
              <SearchBox className='sb' searchChange={this.onSearchChange}/>     
              <Scroll>
                <CardList shows={filteredShows} />
              </Scroll>
           </div>
     }    
}

export default App;