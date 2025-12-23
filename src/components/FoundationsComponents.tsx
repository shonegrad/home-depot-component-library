import React from 'react';
import { Colors } from './foundations/Colors';
import { Typography } from './foundations/Typography';
import { Iconography } from './foundations/Iconography';
import { Spacing } from './foundations/Spacing';
import { ShadowsAndRadius } from './foundations/ShadowsAndRadius';

interface FoundationsComponentsProps {
    activeComponent: string;
}

export function FoundationsComponents({ activeComponent }: FoundationsComponentsProps) {
    switch (activeComponent) {
        case 'Colors':
            return <Colors />;
        case 'Typography':
            return <Typography />;
        case 'Iconography':
            return <Iconography />;
        case 'Spacing':
            return <Spacing />;
        case 'Shadows & Radius':
            return <ShadowsAndRadius />;
        default:
            return <Colors />;
    }
}
