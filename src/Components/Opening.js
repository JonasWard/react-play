import React, {Component} from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";
import { ReactComponent as JonasWardWB } from '../Resources/logos/jonas-ward-logo-wb.svg';

class Opening extends Component {
    render() {
        if (!this.props.data) return null;

        const {project, github, name, description} = this.props.data;

        return (
            <div className="intro" background="#ff0000">
                {/*/!*<ParticlesBg type="random" count={["#ff0000", "#ff0000"]} bg={true}/>*!/*/}
                {/*<ParticlesBg type="ball" bg={true}/>*/}
                <ParticlesBg type="color" num={25} color={"ff2222"} bg={true}/>

                <Fade bottom>
                    <JonasWardWB style={{width: "100%", height: "80vh", align: "center", padding: "10vh"}}/>
                </Fade>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </div>
        );
    }
}

export default Opening;
