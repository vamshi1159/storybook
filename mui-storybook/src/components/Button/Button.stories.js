import { Button } from "@mui/material";
import { action } from "@storybook/addon-actions";

export default{
    title:'MUI/Button',
    component:Button,
    argTypes:{
        variant:{control:'text'},
        children:{control:'text'},
        onClick:{action:'clicked'}
    }
}
const Template = (args)=><Button {...args}/>

export const PrimaryButton= Template.bind({})

PrimaryButton.args={
    variant:'contained',
    children:'Primary Button',
    onClick:action('clicked')
}

export const SecondaryButton= Template.bind({})

SecondaryButton.args={
    variant:'outlined',
    children:'Primary Button',
    onClick:action('clicked')
}