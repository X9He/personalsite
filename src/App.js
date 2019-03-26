import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import ProjectHome from './components/ProjectHome/ProjectHome'
import Blog from './components/Blog/Blog'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <NavBar />
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/projects" exact component={ProjectHome} />
                    </div>
                </Router>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
