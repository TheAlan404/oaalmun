import { Carousel } from "@mantine/carousel";
import { plans } from "./data/data";
import { Button, Group, Paper, SimpleGrid, Space, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const RegisterSection = () => {
    let theme = useMantineTheme();
    let isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <SimpleGrid w={isMobile ? "100%" : undefined} cols={{
            base: 1,
            xs: 2,
            md: 3,
        }}>
            {plans.map((plan, i) => (
                <PlanRender
                    plan={plan}
                    key={i}
                />
            ))}
        </SimpleGrid>
        /* <Carousel
            withIndicators
            slideSize={{
                base: "70%",
                sm: "60%",
                md: "50%",
                lg: "20%",
            }}
            slideGap="md"
            controlsOffset="md"

            w="100%"
            height="50vh"
        >
            {plans.map((plan, i) => (
                <Carousel.Slide
                    key={i}
                >
                    <PlanRender
                        plan={plan}
                    />
                </Carousel.Slide>
            ))}
        </Carousel> */
    )
}

const PlanRender = ({ plan }) => {
    return (
        <Paper p="md" withBorder h="100%">
            <Stack justify="space-between" h="100%">
                <Stack ta="center">
                    <Title order={2}>
                        {plan.name}
                    </Title>
                    {plan.regular && <Group>
                        <Text fw="bold">Regular:</Text>
                        <Text>{plan.regular}</Text>
                    </Group>}
                    {plan.late && <Group>
                        <Text fw="bold">Late:</Text>
                        <Text>{plan.late}</Text>
                    </Group>}
                </Stack>
                <Stack>
                    <Button
                        color="red"
                        variant="light"
                        component="a"
                        href={plan.link}
                    >
                        Apply
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    )
}
