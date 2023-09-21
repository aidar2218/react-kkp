import type {Meta} from '@storybook/react';

import { UncontrolledAccordion } from './UncontrolledAccordion';
import React from "react";

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;

export const UncontrolledAccordionModeChanging = () => {
    return (
        <UncontrolledAccordion title={"Collapsed Accordion"} />
    )
}