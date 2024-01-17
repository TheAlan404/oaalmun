import { AppShell, Group, Burger, Box, Center, Container, Paper, Transition, Stack, Title, Text, Divider, Button, Space, Anchor, Code, BackgroundImage } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';

import IconSVG from "./assets/icon_noblacks.svg";
import { PeopleSection } from './People';
import { LettersSection } from './Letters';
import { useState } from 'react';
import { useEffect } from 'react';
import { CommitteesSection } from './Committees';
import { RegisterSection } from './Register';
import { REGISTER_LINK } from './data/data';
import firegif2 from "./assets/firegif2.gif"
import metalpipe from "./assets/metalpipe.webm"
import { Venue } from './Venue';
import { Faq } from './Faq';

const ActualContent = () => {
    return (
        <Stack align='center' p={0} gap={0}>
            <Box id="" />
            <Intro />

            <Stack w="100%" p="md" align="center">
                <Box id="letters" y="md" />
                <Space h="10vh" />
                <Divider label="LETTERS" w="80%" />
                <LettersSection />

                <Box id="crew" />
                <Space h="10vh" />
                <Divider label="CREW" w="80%" />
                <PeopleSection />

                <Box id="committees" y="md" />
                <Space h="10vh" />
                <Divider label="COMMITTEES" w="80%" />
                <CommitteesSection />

                <Box id="register" y="md" />
                <Space h="10vh" />
                <Divider label="REGISTER" w="80%" />
                <RegisterSection />

                <Box id="faq" y="md" />
                <Space h="10vh" />
                <Divider label="FAQ" w="80%" />
                <Faq />

                <Box id="venue" y="md" />
                <Space h="10vh" />
                <Divider label="VENUE" w="80%" />
                <Venue />

            </Stack>
            <Space h="50vh" />
            <Credits />
        </Stack>
    );
}

const Intro = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <BackgroundImage
            src={firegif2}
            onLoad={() => setLoaded(true)}
            style={loaded ? ({
                backgroundColor: "#fd7e14f5",
                backgroundBlendMode: "luminosity",
            }) : ({})}
        >
            <Center h="90vh">
                <Stack align="center">
                    <Title order={2}>ÖAAL</Title>
                    <LogoWrapper />
                    <Stack gap="sm" align="center">
                        <Title order={2}>MUN</Title>
                        <Title>Burn The Order</Title>
                    </Stack>
                    <Countdown />
                    <Button
                        color="red"
                        variant='light'
                        component='a'
                        href="#register"
                        size="md"
                    >
                        Register Now
                    </Button>
                </Stack>
            </Center>
        </BackgroundImage>
    )
}

const Credits = () => {
    return (
        <Text mb="md" pb="md">
            Website made by
            {" "}
            <Anchor
                href='https://thealan404.github.io/'
                target="_blank">
                dennis
            </Anchor>
            {" "}
            using love, pain and
            {" "}
            <Anchor
                onClick={() => {
                    new Audio(metalpipe).play();
                }}
            >
                suffering
            </Anchor>
        </Text>
    )
}

const finalDay = new Date(2024, 2, 1, 0, 0, 0, 0);

const Countdown = () => {
    let [isNewYear, setIsNewYear] = useState(false);
    let [day, setDay] = useState("");
    let [hour, setHour] = useState("");
    let [min, setMin] = useState("");
    let [sec, setSec] = useState("");

    const oneDay = 24 * 60 * 60 * 1000;

    useEffect(() => {
        let int = setInterval(() => {
            let past = new Date().getTime() >= finalDay;
            setIsNewYear(past);

            const diffDays = Math.round(Math.abs((new Date() - finalDay) / oneDay));
            setDay(diffDays);

            if (past) {
                setHour(new Date().getHours());
                setMin(new Date().getMinutes());
                setSec(new Date().getSeconds());
            } else {
                setHour(23 - new Date().getHours());
                setMin(59 - new Date().getMinutes());
                setSec(59 - new Date().getSeconds());
            }
        }, 500);

        return () => {
            clearInterval(int);
        };
    }, []);

    return (
        <Group>
            <Title order={2}>{[
                day,
                hour,
                min,
                sec,
            ].map(x => (x + "").padStart(2, "0")).join(":")}</Title>
        </Group>
    )
}

const App = () => {
    const [opened, { toggle, close }] = useDisclosure();

    return (
        <AppShell
            header={{ height: "10vh" }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <NavbarLogoButton />
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <NavbarButtons />
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <NavbarButtons isMobile onClick={() => close()} />
            </AppShell.Navbar>

            <AppShell.Main>
                <ActualContent />
            </AppShell.Main>
        </AppShell>
    )
}

const LogoWrapper = () => {
    return (
        <div className='big-on-hover'>
            <Logo size="100vh" />
        </div>
    );
};

const Logo = ({ size }) => {
    return (
        <img src={IconSVG} width={size} height={size} />
    )
}

const NavbarLogoButton = () => {
    return (
        <Button
            leftSection={<Logo size="40px" />}
            variant='subtle'
            color="gray">
            MUN: Burn The Order
        </Button>
    );
}

const NavbarButtons = ({ onClick, isMobile }) => {
    let Comp = isMobile ? Stack : Group;

    return (
        <Comp mx="md">
            {[
                "Home#",
                "Letters#letters",
                "Crew#crew",
                "Committees#committees",
                "FAQ#faq",
                "Venue#venue",
            ].map((a, i) => (
                <Button
                    color='gray'
                    variant='light'
                    component='a'
                    href={"#" + a.split("#")[1]}
                    onClick={() => onClick?.()}
                    key={i}
                >
                    {a.split("#")[0]}
                </Button>
            ))}
            <Button
                color="red"
                variant='light'
                component='a'
                href="#register"
                onClick={() => onClick?.()}
            >
                Register Now
            </Button>
        </Comp>
    )
}

export default App
