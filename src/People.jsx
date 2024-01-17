import { Accordion, Avatar, Group, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { people, ranks, rankGroups } from "./data/data";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { useEffect } from "react";

export const PeopleSection = () => {
    let theme = useMantineTheme();
    let isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Accordion w={isMobile ? "100%" : "70%"}>
            {rankGroups.map((rankGroup, i) => (
                <Accordion.Item value={rankGroup.name} key={i}>
                    <Accordion.Control fz={20}>{rankGroup.name}</Accordion.Control>
                    <Accordion.Panel p="md">
                        <Group ta="center">
                            <SimpleGrid cols={{
                                base: 2,
                                sm: 3,
                                md: 4,
                                lg: 5,
                                xl: 8,
                            }}>
                                {rankGroup.ranks.flatMap(r => people.filter(p => p.rank == r)).map((person, i) => (
                                    <PersonRender
                                        key={i}
                                        person={person}
                                    />
                                ))}
                            </SimpleGrid>
                        </Group>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export const PersonRender = ({ person }) => {
    return (
        <Stack align="center" ta="center">
            <Avatar
                size="xl"
                src={"/crew/" + person.name + ".jpg"}
            />

            <Title order={4}>{person.name}</Title>
            <Text>{person.rank}</Text>
        </Stack>
    )
}
