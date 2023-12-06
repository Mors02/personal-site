import React from "react";
import ProjectArea from "./ProjectArea";
import inventory from "../Gifs/inventory.gif";
import fight from "../Gifs/fight.gif";
import messy_inventory from "../Gifs/messy inventory.PNG"
import death from "../Gifs/death.gif";
import { Image, Flex, Text, Button, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function BimboAndMe() {

    const bodyCss = "desktop:text-3xl mobile:text-md mt-2 ml-4 text-justify";
    const titleCss = "desktop:text-4xl mobile:text-sm mt-3";
    const highlight = "font-semibold text-mid"

    const matches = useMediaQuery('(min-width: 56.25em)');

    let gifHeight = matches? 300 : 200;
    let gifWidth = matches? 400: 250;
    return (
        <ProjectArea title="Bimbo & Me" id="bimbo">
            <Flex direction={matches? "row" : "column"}>
                <Image src={inventory} className="ml-4" height={gifHeight} width={gifWidth}/>
                <Text className={bodyCss} fw={400}>
                    <Text component="span"className={titleCss} fw={600}>The idea for this game started when I wanted to create a <span className={highlight}>complex inventory system.</span></Text>
                    <br />
                    Each item has multiple highlighted sides which upgrades other items. To do this, I used a <span className={highlight}>custom graph</span> that holds
                    all the items in the inventory as nodes and creates or removes edges when needed. The <span className={highlight}>most important thing</span> was making everything update correctly,
                    since the items could upgrade based on a value that is upgraded itself, needing <span className={highlight}>very precise cascading upgrades</span>.
                </Text>
            </Flex>
            <Text className={bodyCss}>Also, items could take more than one slot, creating the necessity for <span className={highlight}>composite sprites</span>. This complicates the logic of the items, since more than one instance of them
            exists inside the inventory.</Text>
            <Flex direction={matches? "row" : "column"}>
                <Text className={bodyCss} fw={400}>
                    <Text component="span"className={titleCss} fw={600}>Each weapon is the result of <span className={highlight}>multiple scripts</span> that control its behaviour.</Text>
                    <br />
                    For the gameplay I went with a simplified version of <span className={highlight}>Vampire Survivors</span>. Using the items dropped you can create some
                    <span className={highlight}> powerful combos</span> that can let you slay waves of enemies. 
                    Each item has <span className={highlight}>3 scripts</span>: one for setting up the composite sprites in the inventory when you pick it up, one for the upgrade behaviour, one for the actual effect of the weapon or passive item.
                    All of this for an ever expanding loot pool to let the player express their playstyle to the max.
                </Text>
                <Image src={fight} className="mt-3 ml-4" height={gifHeight} width={gifWidth}/>
            </Flex>
            <Flex direction={matches? "row" : "column"}>
                <Image src={death} className="mt-5 ml-4" height={gifHeight} width={gifWidth}/>
                <Text className={bodyCss} fw={400}>
                    <Text component="span"className={titleCss} fw={600}>When you die, it's <span className={highlight}>not over yet</span>.</Text>
                    <br />
                    During the game you can find eggs that will spawn <span className={highlight}>your kid</span>. He will follow you around, with his <span className={highlight}>own inventory</span> and stats.
                    Each time a generation passes, you can <span className={highlight}>improve your genes</span> to get better and stronger. And when you die, you  <span className={highlight}>will play as your own child</span>, with everything you have
                    left him with. So be prepared when <span className={highlight}>your time eventually comes...</span>
                </Text>
                <Image src={messy_inventory} className="mt-4 ml-4" height={gifHeight} width={gifHeight}/>
            </Flex>
            <Box  className="mt-6 mx-auto w-64">
                <Button className="w-64 h-12" color="light2">
                    Play it now on Itch.io
                </Button>
            </Box>
        </ProjectArea>
    )

}