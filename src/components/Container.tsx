import *as React from 'react'
import styled from "styled-components";
import { mediaQueries } from "./MediaQuerys/mediaQueries";

interface Box {
    width: Number;
}
const ContainerQueris = styled.div<Box>`
position:absolute;
top: 50%; 
left: 50%;
transform: translate(-50%,-50%);  
border: 1px solid rgb(211,211,211);
border-radius: 2%;
${mediaQueries("sm")`
     width: 90%;
 `};
   ${props => mediaQueries("sm")(`width: ${props.width}px`)}
`;

export default class Container extends React.Component {
    
    public render() {
        const { children} = this.props 
        return (
            <div >
                <ContainerQueris width={400}>
                    {children}
                </ContainerQueris>
            </div>
        )
    }
}
