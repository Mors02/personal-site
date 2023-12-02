import { Container, Flex, Card, Image, Group, Badge, Text, Button } from "@mantine/core";
import React from "react";

export default function ProjectCard({image_src, title, text, link_to, badge}) {
                
                return(
                <Card className="bg-light1 mx-auto w-96" shadow="sm" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src={image_src}
                        height={200}
                        alt={title}
                        />
                    </Card.Section>
                    <Flex direction={"column"} className="relative min-h-[50px]">
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={600}>{title}</Text>
                            {badge && badge.map(b => 
                                (<Badge variant="filled" color="mid">
                                {b}
                                </Badge>)) 
                            }
                        </Group>

                        <Text size="md" color="black" className="min-h-[70px]">
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