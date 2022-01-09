import React, {Component, useState} from "react";
import SkillList from "./SkillList";
import Slide from "react-reveal";
import {getRandomColor} from "../utils/colorsjs";

class SkillEntry extends Component {
    state = {
        skill: null,
        visible: false,
        color: null,
        width: null,
        hasSubSkills: false
    }

    render() {
        this.state.skill = this.props.data.skill;
        this.state.color = (this.props.data.color === null) ? getRandomColor() : getRandomColor(this.props.data.color);
        this.state.width = this.props.data.skill.level;
        this.state.hasSubSkills = (this.props.data.skill.subSkills !== undefined);

        if (!this.state.hasSubSkills) {
            console.log("doesn't have subskill");
            console.log(this.state.skill);

            return (
                <div>
                <span className="bar-expand">
                    <span className="skill-level">
                        <div
                            style={{width: "100%", background: "#313131"}}
                        //     onMouseClick={() => this.setState({visible: !this.state.visible})}
                        //     // onMouseLeave={() => this.setState({visible: false})}
                        //     onTouchStart={() => this.setState({visible: !this.state.visible})}
                        //     // onTouchEnd={() => this.setState({visible: false})}
                        >
                            <span
                                className="skill-entry"
                                style={{width: this.state.width, background: this.state.color}}
                            >{this.state.skill.name}</span>
                        </div>
                    </span>
                </span>
                </div>
            );

        } else if (this.state.visible) {
            console.log("does have subskill and visible");
            console.log(this.state.skill);

            return (
                <div>
                    <span className="bar-expand">
                        <span className="skill-level">
                            <div
                                style={{width: "100%", background: "#313131"}}
                                onMouseEnter={() => this.setState({visible: true})}
                                onMouseLeave={() => this.setState({visible: false})}
                                onTouchStart={() => this.setState({visible: !this.state.visible})}
                                // onTouchStart={() => this.setState({visible: true})}
                                // onTouchEnd={() => this.setState({visible: false})}
                            >
                                <span
                                    className="skill-entry"
                                    style={{width: this.state.width, background: this.state.color}}
                                >{this.state.skill.name}</span>
                            </div>
                            <Slide zoom duration={1300} style={{height: "2rem"}} className="skill-entry-small">
                                {SkillList({
                                    skills: this.state.skill.subSkills,
                                    color: this.state.color
                                })}
                            </Slide>

                        </span>
                    </span>
                </div>
            );
        } else {
            console.log("does have subskill and invisible");
            console.log(this.state.skill);

            return (
                <div>

                    <span className="bar-expand">
                        <span className="skill-level">
                            <div
                                style={{width: "100%", background: "#313131", height: "100%"}}
                                // style={{width: "100%", background: "#313131"}}
                                onMouseEnter={() => this.setState({visible: true})}
                                onMouseLeave={() => this.setState({visible: false})}
                                onTouchStart={() => this.setState({visible: !this.state.visible})}
                                // onTouchEnd={() => this.setState({visible: false})}
                            >
                                <span
                                    className="skill-entry"
                                    style={{width: this.state.width, background: this.state.color}}
                                >{this.state.skill.name}</span>
                            </div>
                        </span>
                    </span>
                </div>
            );
        }
    }
};

export default SkillEntry;