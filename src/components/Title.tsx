import * as React from 'react'

const style= {
    "fontFamily":"Roboto",
    "fontStyle":"normal",
    "fontWeight": 'normal',
    "fontSize":"16px",
    "lineHeight":"19px",
    "color":"#2D3748",
    "paddingBottom": '3%',
} as React.CSSProperties
interface ITitleProps{
    top?: string
    left?: string
}
export default class Title extends React.Component<ITitleProps> {
    public render() {
        return (
            <h2 {...this.props} style={style} />  //lo que hace es agarrar todas las propiedades que le pasen
        )
    }
}
