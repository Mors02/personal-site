import React from "react";

import { Container, Flex, Image, Group, Badge, Text, Button } from "@mantine/core";
import ProjectCard from "./Card";
import my_photo from '../Logos/my_photo_cr.jpg';
import unity from '../Logos/unity.svg';

export default function Projects() {
    return (
        <>
            <Flex direction={"row"} className="w-full mt-12">
                <ProjectCard image_src={my_photo} title={"About Me"} text={"Hi, I'm Leonardo Morselli and since I was little I was always fashinated with computer science."} link_to={"#about-me"} />

                <ProjectCard image_src={unity} title={"Bimbo & Me"} text={"My first real project using Unity2D, it's a rogue-like vampire survivor style game. "} link_to={"#bimbo"} badge={["Unity", "2d"]}/>

                <ProjectCard image_src={my_photo} title={"About Me"} text={"Hi, I'm Leonardo Morselli and since I was little I was always fashinated with computer science."}/>

                <ProjectCard image_src={my_photo} title={"About Me"} text={"Hi, I'm Leonardo Morselli and since I was little I was always fashinated with computer science."}/>
            </Flex>
        </>
    )
}