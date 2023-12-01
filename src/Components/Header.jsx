import React from "react";
import { Flex, Text, Box } from "@mantine/core";
import  unity  from "../Logos/unity.svg";
import unreal from "../Logos/unreal-engine.svg";
import github from "../Logos/github.svg";
import react from "../Logos/react.svg"

export default function Header() {
    return (
        <Box className="bg-light2 pt-9 pb-9">
            <Box className="mx-auto max-w-6xl flex">
                <img src={react} className="mx-auto h-24 w-24"/>
                <img src={github} className="mx-auto h-24 w-24"/>
                <Flex direction={"column"} className="mx-auto max-w-xl border-solid border-2 border-dark2 p-5 text-center">
                    <Text className="text-3xl text-dark2">LEONARDO MORSELLI</Text>
                    <Text className="text-2xl text-dark2">Full-Stack Developer | Gameplay Programmer</Text>
                </Flex>
                <img src={unity} className="mx-auto h-24 w-24" />
                <img src={unreal} className="mx-auto h-24 w-24" />
            </Box>
        </Box>
    );
}