import React from "react";
import { Flex, Text, Box } from "@mantine/core";
import unity from "../Logos/unity.svg";
import unreal from "../Logos/unreal-engine.svg";
import github from "../Logos/github.svg";
import react from "../Logos/react.svg"

export default function Header() {
    return (
        <Box className={"pt-32 h-96 bg-logos"}>
            <Box className="mx-auto max-w-6xl flex">
                {/*<img src={react} className="mx-auto h-24 w-24"/>
                <img src={github} className="mx-auto h-24 w-24"/>*/}
                <Flex direction={"column"} className="mx-auto w-128 p-7 rounded-xl border-solid border-2 border-dark2 p-5 text-center bg-light2">
                    <Text className="text-5xl text-dark2">LEONARDO MORSELLI</Text>
                    <Text className="text-4xl text-dark2">Full-Stack Developer | Gameplay Programmer</Text>
                </Flex>
                {/*<img src={unity} className="mx-auto h-24 w-24" />
                <img src={unreal} className="mx-auto h-24 w-24" />*/}
            </Box>
        </Box>
    );
}