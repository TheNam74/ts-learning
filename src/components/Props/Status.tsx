type StatusProps={
    status: "Success"|"Fail"
}
export const Status=(props:StatusProps)=>{
    return(
        <div>{props.status}</div>
    )
}