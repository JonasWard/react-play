import React, {Component} from "react";
import ReactGA from "react-ga";
// import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Opening from "./Components/Opening";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "english",
            resumeData: {}
        };

        ReactGA.initialize("UA-110570651-1");
        ReactGA.pageview(window.location.pathname);
    }

    getResumeData() {
        const resumeData = require("./Resources/resumeData.json");
        this.setState({resumeData: resumeData[this.state.language]})
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <Opening data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;
