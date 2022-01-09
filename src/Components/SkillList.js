import React from "react";
import SkillEntry from "./SkillEntry";
import {getRandomColor} from "../utils/colorsjs";

const SkillList = (props) => {
    const {skills, color} = props;

    console.log(skills);

    return (
        <ul>
            {skills.map(skill => {

                const colorCopy = (skill.color !== undefined) ? skill.color: (color === null) ? getRandomColor() : getRandomColor(color);

                const data = {skill: skill, color: colorCopy}

                return (
                    <li key={skill.name}>
                        <SkillEntry data={data} />
                    </li>
                );
            })}
        </ul>
    )
};

export default SkillList;