import { Accordion, Avatar, Group, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { people, ranks, rankGroups } from "./data/data";
import { useMediaQuery } from "@mantine/hooks";

export const PeopleSection = () => {
    let theme = useMantineTheme();
    let isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Accordion w={isMobile ? "100%" : "70%"}>
            {rankGroups.map((rankGroup, i) => (
                <Accordion.Item value={rankGroup.name} key={i}>
                    <Accordion.Control>{rankGroup.name}</Accordion.Control>
                    <Accordion.Panel>
                        <Group justify="center">
                        {rankGroup.ranks.flatMap(r => people.filter(p => p.rank == r)).map((person, i) => (
                            <PersonRender
                                key={i}
                                person={person}
                            />
                        ))}
                        </Group>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export const PersonRender = ({ person }) => {
    return (
        <Stack align="center">
            <Avatar
                size="xl"
                src={"..."}
            />

            <Title order={4}>{person.name}</Title>
            <Text>{person.rank}</Text>
        </Stack>
    )
}
