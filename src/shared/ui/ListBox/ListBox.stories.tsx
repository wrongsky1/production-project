import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { content: <div>Durward Reynolds</div>, value: 'Durward Reynolds' },
        { content: <div>Kenton Towne</div>, value: 'Kenton Towne' },
        { content: <div>Therese Wunsch</div>, value: 'Therese Wunsch' },
        { content: <div>Benedict Kessler</div>, value: 'Benedict Kessler' },
        { content: <div>Katelyn Rohan</div>, value: 'Katelyn Rohan' },
    ],
};
