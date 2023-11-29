import { AppShell, Group, Burger, Box, Center, Container, Paper, Transition, Stack, Title, Text, Divider, Button, Space } from '@mantine/core'
import { UnstyledButton } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';

import IconSVG from "./assets/icon_noblacks.svg";

const ActualContent = () => {
    return (
        <Stack>
            <Center h="90vh">
                <Stack align="center">
                    <LogoWrapper />
                    <Title>Burn The Order</Title>
                    <Text>blabla bla</Text>
                    <Space h="xl" />
                </Stack>
            </Center>

            <Divider />

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Illo assumenda et rerum officia omnis, maxime commodi corporis aspernatur quas,
                itaque sapiente nisi adipisci. Fuga corporis quidem numquam eum voluptate fugiat?
            </Text>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Illo assumenda et rerum officia omnis, maxime commodi corporis aspernatur quas,
                itaque sapiente nisi adipisci. Fuga corporis quidem numquam eum voluptate fugiat?
            </Text>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Illo assumenda et rerum officia omnis, maxime commodi corporis aspernatur quas,
                itaque sapiente nisi adipisci. Fuga corporis quidem numquam eum voluptate fugiat?
            </Text>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Illo assumenda et rerum officia omnis, maxime commodi corporis aspernatur quas,
                itaque sapiente nisi adipisci. Fuga corporis quidem numquam eum voluptate fugiat?
            </Text>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Illo assumenda et rerum officia omnis, maxime commodi corporis aspernatur quas,
                itaque sapiente nisi adipisci. Fuga corporis quidem numquam eum voluptate fugiat?
            </Text>

            <Space h="xl" />
        </Stack>
    );
}

const App = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: "10vh" }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
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
                <NavbarButtons />
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
            <Logo size="200vh" />
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

const NavbarButtons = () => {
    return (
        <></>
    )
} 

export default App
