import React from "react";

import { Box, Paper, Text, Title, Image, Flex, Button } from "@mantine/core";
import my_photo from '../Logos/my_photo2.jpg';

import linkedin from '../Logos/linkedin.svg';
import cv from '../Logos/cv.png';
import outlook from '../Logos/outlook.png';

export default function AboutMe() {

        return (
            <Box className="mx-auto w-10/12 my-12">
                <Paper shadow="xl" p="xl" withBorder className="bg-light1 rounded-xl mt-5">
                    <Title order={1} className="ml-4">About Me</Title>
                    <Flex className="mt-5 px-4" direction={"row"} id="about-me">
                        <Image src={my_photo} height={340} withBorder width={240} className="mr-3"/>
                        <Box className="text-justified mx-auto w-5/6">
                            <Text className="text-3xl mt-3 ml-4" fw={600}>Hi, my name is Leonardo Morselli.</Text>
                            <Text className="text-2xl mt-3 ml-4" fw={400}>I live in Italy and since I was little I have been fascinated by computer science. 
                                I cultivated this passion with hours spent programming for school, work or on my personal projects. I like to solve problems
                                and challenge myself with difficult new situations, which lead me to experiment a lot with new technologies.
                            </Text>
                            <Flex className="mt-6 ml-6 px-24 justify-between">
                                <Button variant="filled" component="a" href="https://www.linkedin.com/in/leonardo-morselli/" className="h-28 w-28" color="light2" aria-label="Linkedin" >
                                    <Image src={linkedin} />
                                </Button>

                                <Button variant="filled" component="a" href="mailto:leonardo.morselli02@gmail.com"className="h-28 w-28" color="light2" aria-label="Linkedin" >
                                    <Image src={outlook} />
                                </Button>

                                <Button variant="filled" className="h-28 w-28" color="light2" aria-label="Linkedin" >
                                    <Image src={cv} />
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>              
                </Paper>
            </Box>
        )
}