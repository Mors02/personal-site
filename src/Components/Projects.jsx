import React from "react";
import { Carousel } from "@mantine/carousel";
import ProjectCard from "./Card";
import my_photo from '../Logos/my_photo2_cr.jpg';
import bimbo from '../Logos/bimbo.png';
import unreal from '../Logos/unreal-engine.svg';
import github from '../Logos/github.svg';

import { useMediaQuery } from "@mantine/hooks";

export default function Projects() {

    const matches = useMediaQuery('(min-width: 56.25em)');

    return (
        <>
            <Carousel
            withIndicators
            height={matches? 400 : 300}
            slideSize="25%"
            slideGap="xs"
            loop
            align="start"
            slidesToScroll={1}
            >
                <Carousel.Slide>
                    <ProjectCard image_src={my_photo} title={"About Me"} text={"Hi, I'm Leonardo Morselli and since I was little I have been fascinated by computer science."} link_to={"#about-me"} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <ProjectCard image_src={bimbo} title={"Bimbo & Me"} text={"My first real project using Unity2D, it's a rogue-like vampire survivor style game. "} link_to={"#bimbo"} badge={["Unity", "2d"]}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <ProjectCard image_src={unreal} title={"Mages"} text={"With Unreal Engine 5 I created a simple FPS with a twist about the shooting mechanic."} badge={["UE5", "3d"]}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <ProjectCard image_src={github} title={"Docpack"} text={"With NodeJs and React I managed a steady and robust managing software for packaging. "} badge={["Nodejs", "React"]}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <ProjectCard image_src={github} title={"Bonobo"} text={"At Bonobo S.r.L I had the pleasure to work in a young and fast-paced envinroment."} badge={["Github"]}/>
                </Carousel.Slide>
            </Carousel>
        </>
    )
}