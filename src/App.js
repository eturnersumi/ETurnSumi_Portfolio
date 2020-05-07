import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";


function App() {
    return (
        <Router>
            <div>
              <Header />
                <Navbar />
                <Wrapper>
                  <Route exact path="/" component={About} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/portfolio" component={Portfolio} />
                </Wrapper>
            </div>
            <Footer />
        </Router>
    )
}

export default App;