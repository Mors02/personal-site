import React from "react";
import ProjectArea from "./ProjectArea";
import inventory from "../Gifs/inventory.gif";
import { Image, Flex, Text } from "@mantine/core";

export default function BimboAndMe() {
    return (
        <ProjectArea title="Bimbo & Me" id="bimbo">
            <Flex>
                <Image src={inventory}  height={300} width={400}/>
                <Text className="text-3xl mt-2 ml-4" fw={400}>
                    <Text component="span"className="text-4xl mt-3" fw={600}>The idea for this game started when I wanted to create a complex inventory system.</Text>
                    <br />
                    As shown on the side, each item has multiple highlighted sides which upgrades other items. To do this, I used a custom graph that holds
                    all the items in the inventory as nodes and creates or removes edges based when needed. The hardest thing was make everything update correctly,
                    since the items could upgrade based on a value that is upgraded itself, needing very precise cascading upgrades.
                </Text>
            </Flex>
            
            
        </ProjectArea>
    )

}