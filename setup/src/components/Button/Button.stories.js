import Center from "../Center/Center";
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    args:{
        variant:'primary',
        children:'Args At Component Level'
    },
  // decorators:[story=><Center>{story()}</Center>] for component level
}

const Template = (args)=><Center><Button {...args}/></Center>;

export const Primary = Template.bind({})

Primary.args ={
    variant:'primary',
    children:'Primary'
}
export const Secondary = Template.bind({})

Secondary.args ={
    variant:'secondary',
    children:'Secondary'
}
export const Success = Template.bind({})

Success.args ={
    variant:'success',
    children:'Success'
}
export const Danger = Template.bind({})

Danger.args ={
    variant:'danger',
    children:'Danger'
}


export const PrimaryDanger = Template.bind({})

PrimaryDanger.args = {
    // ...Primary.args,
    // variant:'danger'
}

PrimaryDanger.storyName='Args At Component Level'
