import React, {Component} from "react";
import Slide from "react-reveal";
import SkillList from "./SkillList";
// import {ReactComponent as TUMsvg} from "../Resources/logos/TUM.svg";
import {ReactComponent as ETHsvg} from "../Resources/logos/ETH.svg";
// import {ReactComponent as UGENTsvg} from "../Resources/logos/UGENT.svg";
import UGENT from "../Resources/logos/UGENT.png";
import TUM from "../Resources/logos/TUM.png";
import DKO from "../Resources/logos/DKO.png";

const UgentF = (props) => {
    return <img src={UGENT} alt="DKO" style={{width: "auto", height: "8rem", align: "center"}}/>;
}

const ETHF = (props) => {
    return (
        <ETHsvg style={{width: "auto", height: "4rem", align: "center"}}/>
    )
}

const DKOF = (props) => {
    return <img src={DKO} alt="DKO" style={{WebkitFilter: "grayscale(100%)", filter: "grayscale(100%)", width: "auto", height: "8rem", align: "center"}}/>;
}

const TUMF = (props) => {
    return <img src={TUM} alt="DKO" style={{width: "auto", height: "6rem", align: "center"}}/>;
}

const componentMap = {
    UGENT: UgentF,
    ETH: ETHF,
    DKO: DKOF,
    TUM: TUMF
};

class Resume extends Component {
    render() {
        if (!this.props.data) return null;

        const work = this.props.data.work.map(function (work) {
            return (
                <div key={work.id}>
                    <h3 style={{color:"#111"}}>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            );
        });

        console.log(window.innerWidth);

        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.education.map(function (education) {
            return (
                <div key={education.id}>
                    <h3 style={{color:"#000"}}>{componentMap[education.logo]()}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p style={{color:"#ddd", textAlign: "justify"}}>{education.description}</p>
                </div>
            );
        });

        const width = window.innerWidth;

        return (
            <section id="resume">

                <Slide left duration={1300}>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>Work</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">{work}</div>
                    </div>
                </Slide>

                <Slide right duration={1300}>
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1 style={{color:"#000"}}>
                                <span>Education</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">{education}</div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide left duration={1300}>
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1 style={{color:"#000"}}>
                                <span>Skills</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <p>{skillmessage}</p>

                            <div className="skills-large-types">
                                {SkillList({skills: this.props.data.skills, color: null})}
                            </div>
                        </div>
                    </div>
                </Slide>
            </section>
        );
    }
}

export default Resume;
