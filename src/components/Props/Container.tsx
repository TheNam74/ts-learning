type ContainerProps={
    children: React.ReactNode
    styles?: React.CSSProperties
}

export const Container = (props:ContainerProps)=>{
    return (
        <div style={props.styles}>{props.children}</div>
    )
}

