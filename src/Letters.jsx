import { Accordion, Group, Paper, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { highlight, letters, people } from "./data/data";
import { useMediaQuery } from "@mantine/hooks";

export const LettersSection = () => {
    let theme = useMantineTheme();
    let isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Accordion w={isMobile ? "100%" : "70%"} defaultValue={["0", "1", "2"]} multiple>
            {letters.map((letter, i) => (
                <Accordion.Item value={""+i} key={i} style={{ borderBottom: "none" }}>
                    <Accordion.Control>
                        Letter #{i+1}
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Letter
                            letter={letter}
                        />
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export const Letter = ({ letter }) => {
    return (
        <Paper withBorder p="md" m="md" style={{ justifySelf: "center" }}>
            <Stack>
                <Text style={{ whiteSpace: "pre-line" }}>
                    {letter.content}
                </Text>
                <Stack align="end">
                    <Text>{letter.sign}</Text>
                    <Group align="end">
                        {letter.authors.map((author, i) => (
                            <Stack gap={0} key={i} align={(letter.authors.length == 1) ? "end" : "center"}>
                                <Title order={4}>{author.name}</Title>
                                <Text c="dark.2">{author.rank}</Text>
                            </Stack>
                        ))}
                    </Group>
                    <Text fw="bold">{highlight}</Text>
                </Stack>
            </Stack>
        </Paper>
    )
}

