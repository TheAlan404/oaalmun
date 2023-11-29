import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider, Affix, ActionIcon, Group, Tooltip } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconVolume } from '@tabler/icons-react';
import { IconVolumeOff } from '@tabler/icons-react';

import FireWav from "./assets/fire.wav";

import '@mantine/core/styles.css';
import './fire.css';
import './other.css';
import { IconFlame } from '@tabler/icons-react';
import { IconFlameOff } from '@tabler/icons-react';

const PreferencesContext = React.createContext();

const Root = () => {
    let [pref, setPref] = useSetState({});
    let [fireEnabled, setFireEnabled] = useState(true);
    let [audioEnabled, setAudioEnabled] = useState(true);

    let audioRef = useRef(new Audio(FireWav));

    useEffect(() => {
        audioRef.current.loop = true;
        if (audioRef.current.paused) {
            audioRef.current.play()
                .catch(err => console.error(err));
        }
    }, [audioRef.current]);

    useEffect(() => {
        audioRef.current.muted = !audioEnabled;
    }, [audioEnabled]);

    return (
        <PreferencesContext.Provider value={[pref, setPref]}>
            <App />

            {/* fireEnabled && <Particles /> */}
            {fireEnabled && <div className='fire' />}

            <Affix position={{ bottom: "2em", right: "2em" }} style={{
                zIndex: 999,
            }}>
                <Group>
                    <Tooltip label={fireEnabled ? "Disable Fire Effects" : "Enable Fire Effects"} color="dark">
                        <ActionIcon
                            radius="xl"
                            size="xl"
                            variant="light"
                            color="gray" 
                            onClick={() => setFireEnabled((e) => !e)}>
                            {
                                fireEnabled ? <IconFlame /> : <IconFlameOff />
                            }
                        </ActionIcon>
                    </Tooltip>

                    <Tooltip label={audioEnabled ? "Play fire sounds" : "Mute fire sounds"} color="dark">
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

const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleInterval = setInterval(() => {
            const newParticle = {
                id: Date.now(),
                left: Math.random() * 99 + 'vw',
                direction: Math.random() > 0.5 ? 1 : -1,
            };

            setParticles(prevParticles => [...prevParticles, newParticle]);

            setTimeout(() => {
                setParticles(prevParticles => prevParticles.filter(p => p.id !== newParticle.id));
            }, 1000); // Adjust the time particles should exist (in milliseconds)
        }, 20);

        return () => clearInterval(particleInterval);
    }, []);

    return (
        <div className="particle-container">
          {particles.map(particle => (
            <div key={particle.id} className="particle" style={{
                left: particle.left,
                bottom: 10,
            }} />
          ))}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider defaultColorScheme='dark'>
        <Root />
    </MantineProvider>
);
