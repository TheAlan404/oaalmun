import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider, Affix, ActionIcon, Group, Tooltip, createTheme } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconVolume } from '@tabler/icons-react';
import { IconVolumeOff } from '@tabler/icons-react';

import FireWav from "./assets/fire.wav";

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './other.css';
import { Ashes } from './Ash';

const PreferencesContext = React.createContext();

export const Root = () => {
    let [pref, setPref] = useSetState({});
    let [audioEnabled, setAudioEnabled] = useState(true);
    
    let audioRef = useRef();

    if(!audioRef.current) audioRef.current = new Audio(FireWav);

    useEffect(() => {
        audioRef.current.loop = true;
        audioRef.current.play();

        return () => {
            audioRef.current.pause();
        }
    }, []);

    useEffect(() => {
        if(audioEnabled) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [audioEnabled]);

    return (
        <PreferencesContext.Provider value={[pref, setPref]}>
            <App />

            {/* <Ashes /> */}

            <Affix position={{ bottom: "2em", right: "2em" }} style={{
                zIndex: 999,
            }}>
                <Group>
                    <Tooltip label={audioEnabled ? "Play fire sounds" : "Mute fire sounds"} color="dark" style={{
                        color: "white"
                    }}>
                        <ActionIcon
                            radius="xl"
                            size="xl"
                            variant="light"
                            color="gray" 
                            onClick={() => setAudioEnabled(e => !e)}>
                            {
                                audioEnabled ? <IconVolume /> : <IconVolumeOff />
                            }
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </Affix>
        </PreferencesContext.Provider>
    );
};

const theme = createTheme({
    colors: {
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
        ],
    },
    components: {
        Tooltip: {
            defaultProps: {
                color: "dark",
            },
            styles: {
                color: "var(--mantine-color-text)"
            }
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider defaultColorScheme='dark' theme={theme}>
        <Root />
    </MantineProvider>
);
