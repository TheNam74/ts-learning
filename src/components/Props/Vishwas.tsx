type VishwasProps={
    name: string
    //?: mean you can either pass this prop in or not
    messageCount?: number
    isLoggedIn: boolean
}

export const Vishwas = (props:VishwasProps)=>{
    //if messageCount is not passed in, assign 0 to it.
    const {messageCount = 0} = props
    return (
        <div>
            {props.isLoggedIn?<div>{`${props.name} has ${messageCount} message`}</div>:'Welcome Guest'}
        </div>
    )
}

