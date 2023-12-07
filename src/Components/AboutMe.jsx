import React from "react";

import { Box, Paper, Text, Title, Image, Flex, Button, List, ThemeIcon } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleArrowRight } from "@tabler/icons-react";
import my_photo from '../Logos/my_photo2.jpg';

import linkedin from '../Logos/linkedin.svg';
import cv from '../Logos/cv.png';
import outlook from '../Logos/outlook.png';
import ProjectArea from "./ProjectArea";

export default function AboutMe() {

        const matches = useMediaQuery('(min-width: 56.25em)');
        console.log(matches);
        const bodyCss = "desktop:text-3xl mobile:text-sm mt-2 ml-4 text-justify";
        const titleCss = "desktop:text-4xl mobile:text-md mt-3";
        const listItemCss = "desktop:text-2xl mobile:text-md";

        return (
                <ProjectArea title="About me" id="about-me">
                    <Flex className="px-4" direction={matches? "row" : "column"}>
                        <Image src={my_photo} height={340} withBorder width={240} className="mr-3"/>
                        <Box className="text-justified mx-auto desktop:w-3/6 mobile:w-5/6">
                            <Text className={titleCss} fw={600}>Hi, my name is Leonardo Morselli.</Text>
                            <Text className={bodyCss} fw={400}>Gameplay programmer based in Italy, very passionate about computer science. 
                                I've cultivated this passion for years by programming for school, work or on my personal projects. I like to solve problems
                                and challenge myself with difficult new situations, which lead me to experiment a lot with new technologies.
                            </Text>
                        </Box>
                        <List
                            className="desktop:mt-16 mobile:mt-10"
                            spacing={matches? "md" : "sm"}
                            size={matches? "xl" : "sm"}
                            withPadding
                            icon={
                                <ThemeIcon color="mid" size={matches? 32 : 16} radius="xl">
                                    <IconCircleArrowRight />
                                </ThemeIcon>
                            }
                            >
                            <List.Item><Text component="span" className={listItemCss} >Guitar player</Text></List.Item>
                            <List.Item><Text component="span" className={listItemCss}>Videogame enthusiast</Text></List.Item>
                            <List.Item><Text component="span" className={listItemCss}>Member of World Organization Scout Movement</Text></List.Item>
                            <List.Item><Text component="span" className={listItemCss}>NBA fan</Text></List.Item>
                        </List>
                    </Flex>
                    <Flex className="mt-6 ml-4">
                        <Button variant="filled" component="a" href="https://www.linkedin.com/in/leonardo-morselli/" className="mx-2 h-16 w-16" color="light2" aria-label="Linkedin" >
                            <Image src={linkedin} />
                        </Button>

                        <Button variant="filled" component="a" href="mailto:leonardo.morselli02@gmail.com"className="mx-2 h-16 w-16" color="light2" aria-label="Mail me" >
                            <Image src={outlook} />
                        </Button>

                        <Button variant="filled" className="mx-2 h-16 w-16" color="light2" aria-label="Download CV" >
                            <Image src={cv} />
                        </Button>
                    </Flex>
                    <Box className="mt-8 w-11/12 mx-auto">
                        <iframe width="100%" height={matches? 250 : 100} src="https://time.graphics/it/embed?v=1&id=863098" frameborder="0" allowfullscreen></iframe>
                        <div><a rel="nofollow" style={{fontSize: "12px", textDecoration: "none"}} title="Timeline project maker" href="https://time.graphics"></a></div>            
                    </Box>
                </ProjectArea>
        )
}