import { Button, ButtonProps } from "@mui/material";
import {ComponentMeta,ComponentStory} from '@storybook/react';

export default {
    title: "MUI/Button",
    component: Button
} as ComponentMeta<typeof Button>;

const Template:ComponentStory<typeof Button>=(args:ButtonProps)=><Button {...args}/>

export const PrimaryButton = Template.bind({})

PrimaryButton.args ={
    variant:'contained',
    children:'Primary Contained'
}