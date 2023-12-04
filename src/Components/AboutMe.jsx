import React from "react";

import { Box, Paper, Text, Title, Image, Flex, Button, List, ThemeIcon } from "@mantine/core";
import { IconCircleArrowRight } from "@tabler/icons-react";
import my_photo from '../Logos/my_photo2.jpg';

import linkedin from '../Logos/linkedin.svg';
import cv from '../Logos/cv.png';
import outlook from '../Logos/outlook.png';
import ProjectArea from "./ProjectArea";

export default function AboutMe() {

        return (
                <ProjectArea title="About me" id="about-me">
                    <Flex className="px-4" direction={"row"}>
                        <Image src={my_photo} height={340} withBorder width={240} className="mr-3"/>
                        <Box className="text-justified mx-10 w-3/6">
                            <Text className="text-4xl mt-3 ml-4" fw={600}>Hi, my name is Leonardo Morselli.</Text>
                            <Text className="text-3xl mt-2 ml-4" fw={400}>Gameplay programmer based in Italy, very passionate about computer science. 
                                I've cultivated this passion for years by programming for school, work or on my personal projects. I like to solve problems
                                and challenge myself with difficult new situations, which lead me to experiment a lot with new technologies.
                            </Text>
                        </Box>
                        <List
                            className="mt-16"
                            spacing="md"
                            size="xl"
                            withPadding
                            icon={
                                <ThemeIcon color="mid" size={32} radius="xl">
                                    <IconCircleArrowRight />
                                </ThemeIcon>
                            }
                            >
                            <List.Item><Text component="span" className="text-2xl">Guitar player</Text></List.Item>
                            <List.Item><Text component="span" className="text-2xl">Videogame enthusiast</Text></List.Item>
                            <List.Item><Text component="span" className="text-2xl">Member of World Organization Scout Movement</Text></List.Item>
                            <List.Item><Text component="span" className="text-2xl">NBA fan</Text></List.Item>
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
                        <iframe width="100%" height="250" src="https://time.graphics/it/embed?v=1&id=863098" frameborder="0" allowfullscreen></iframe>
                        <div><a rel="nofollow" style={{fontSize: "12px", textDecoration: "none"}} title="Timeline project maker" href="https://time.graphics">Timeline project maker</a></div>            
                    </Box>
                </ProjectArea>
        )
}