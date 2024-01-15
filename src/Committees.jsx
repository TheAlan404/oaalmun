import { Accordion, Group, Image, List, SimpleGrid, Space, Stack, Text, Title, useMantineTheme } from "@mantine/core"
import { committees } from "./data/data"
import { useMediaQuery } from "@mantine/hooks"
import firegif1 from "./assets/firegif1.gif"

export const CommitteesSection = () => {
    return (
        <Accordion w="90%">
            {committees.map((committee, i) => (
                <Accordion.Item value={committee.name} key={i}>
                    <Accordion.Control>{committee.name}</Accordion.Control>
                    <Accordion.Panel>
                        <CommitteeRender
                            committee={committee}
                        />
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export const CommitteeRender = ({ committee }) => {
    let theme = useMantineTheme();
    let isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Stack>
            <SimpleGrid cols={isMobile ? 1 : 2}>
                <Stack>
                    
                    <List>
                        {committee.bullets.map((bullet, i) => (
                            <List.Item>
                                {bullet}
                            </List.Item>
                        ))}
                    </List>
                    <Text>{committee.desc}</Text>
                    <Group justify="center">
                        {committee.people.map((person, i) => (
                            <Stack align="center" gap={0} key={i}>
                                <Title order={4}>{person.name}</Title>
                                <Text>{person.rank}</Text>
                            </Stack>
                        ))}
                    </Group>
                </Stack>
                <Image
                    radius="md"
                    fit="contain"
                    src={firegif1}
                />
            </SimpleGrid>
        </Stack>
    )
}
