import { Accordion, Group, Image, List, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core"
import { committees } from "./data/data"

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
    return (
        <Stack>
            <SimpleGrid cols={2}>
                <Stack>
                    <List>
                        {committee.bullets.map((bullet, i) => (
                            <List.Item>
                                {bullet}
                            </List.Item>
                        ))}
                    </List>
                    <Group>
                        {committee.people.map((person, i) => (
                            <Stack align="center" key={i}>
                                <Title order={4}>{person.name}</Title>
                                <Text>{person.rank}</Text>
                            </Stack>
                        ))}
                    </Group>
                </Stack>
                <Image
                    radius="md"
                    fit="contain"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                />
            </SimpleGrid>
        </Stack>
    )
}
