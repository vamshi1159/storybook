import Input from "./Input";

export default{
    title:"Input",
    component:Input
}
export const Small = ()=><Input size="small" value="small" readOnly={true}/>
export const Medium = ()=><Input size="medium" value="medium" readOnly={true}/>
export const Large = ()=><Input size="large" value="large" readOnly={true}/>