import React, {Component} from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";
import { ReactComponent as JonasWardWB } from '../Resources/logos/jonas-ward-logo-wb.svg';

class ProjectOpening extends Component {
    render() {
        if (!this.props.data) return null;

        const {title, titleImage, projectUrl} = this.props.data;

        return (
            <div className="intro" background="#ff0000">
                <img
                    className="profile-pic"
                    src={'images/'+titleImage}
                    alt={title+"Project Pic"}
                />

                <Fade bottom>
                    <h3 style={{width: "100%", height: "80vh", align: "center", padding: "10vh"}}/>
                </Fade>

                <p className="scrolldown">
                    <a className="smoothscroll" href={"#projects/"+projectUrl+"/start"}>
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </div>
        );
    }
}

export default ProjectOpening;