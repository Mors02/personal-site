import { Container, Flex, Card, Image, Group, Badge, Text, Button } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function ProjectCard({image_src, title, text, link_to, badge}) {
                
    const matches = useMediaQuery('(min-width: 56.25em)');

    return(
    <Card className="bg-light1 mx-auto desktop:w-96 mobile:w-64" shadow="sm" radius="md" withBorder>
        <Card.Section>
            <Image
            src={image_src}
            height={matches? 200 : 75}
            alt={title}
            />
        </Card.Section>
        <Flex direction={"column"} className="relative min-h-[50px]">
            <Group justify="space-between" mt={matches? "md" : "sm"} mb="xs">
                <Text fw={600}>{title}</Text>
                {badge && badge.map(b => 
                    (<Badge variant="filled" color="mid">
                    {b}
                    </Badge>)) 
                }
            </Group>

            <Text size="md" color="black" className="desktop:min-h-[70px] mobile:min-h-[100px]">
                {text}
            </Text>

            <Button variant="filled" 
                    color="light2" 
                    fullWidth 
                    mt="md" 
                    radius="md"
                    component="a"
                    href={link_to}>
                See more
            </Button>
        </Flex>
    </Card>)
}