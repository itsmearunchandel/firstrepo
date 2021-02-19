import { render } from "@testing-library/react";
import React from "react";
// import Header from "./Header";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, BrowserRouter } from "react-router-dom";
function RoutingExample(){
    return(
        <div>
            <Router>
                <div>
                    <Header />
                    <br />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route path="/users" component={Users} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
function Header(){
    return(
        <ul>
            <li><Link exact="true" to="/">Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to={{pathname:'/service'}}>Service</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    )
}
function Home(){
    return(
        <div>
            <h1>Home</h1>
            <p>This is home page.</p>
        </div>
    )
}
function About(){
    return(
        <div>
            <h1>About</h1>
            <p>This is About page.</p>
        </div>
    )
}
function Service(){
    return(
        <div>
            <h1>Service</h1>
            <p>This is Service page.</p>
        </div>
    )
}
function Users({match}) {
    return (
      <div>
        <ul>
          <li><Link to={`${match.url}/1`}>Ajay</Link></li>
          <li><Link to={`${match.url}/2`}>Vijay</Link></li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:id`} component={User} />
          <Route exact path={match.path} render={() => (<h2>Please select user</h2>)}/>
        </Switch>
      </div>
    );
  }
  
  function User({match}) {
    return(
      <div>
        <h2>User Detail</h2>
        <p>user id is: {match.params.id}</p>
        {(parseInt(match.params.id) === 5) ? (<Redirect to='/users' />) : ''}
      </div>
    )
  }
function NoMatch(){
    return(
        <div>
           <h1>404 Error</h1>
           <p>Oops! page not found.</p>
        </div>
    )
}

export default RoutingExample;