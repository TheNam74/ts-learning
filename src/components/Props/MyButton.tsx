type MyButtonProps = {
    //because most of the time event props dont take any parameters and dont return anything either 
    // handleClick: ()=>void

    //or you can be specific about the event.
    handleClick: (event: React.MouseEvent<HTMLButtonElement>)=>void
}

export const MyButton = (props:MyButtonProps)=>{
    return(
        <button onClick={props.handleClick}>Click</button>
    )
}