type MyInputProps = {
    value: string
    handleChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

export const MyInput = (props:MyInputProps)=>{
    //event props can also be defined here
    const handleInputHcange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("event,",event)
    }
    return(
        <input type='text' value={props.value} onChange={handleInputHcange}></input>
    )
}