import React, {Component} from "react";
import ReactGA from "react-ga";
import Header from "./Header";
import Opening from "./Opening";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectOpening from "./ProjectOpening";

class ProjectPage extends Component {
    constructor(props) {
        super(props);

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
                <ProjectOpening data={this.state.resumeData.main}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
};

export default ProjectPage;