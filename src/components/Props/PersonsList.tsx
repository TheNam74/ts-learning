//array off objects type
type PersonsListProps={
    names:{
        first:string
        last:string
    }[]
}

export const PersonsList = (props:PersonsListProps)=>{
    return(
        <div>
            {
                props.names.map(name=>( 
                    <h2>
                        {`${name.first} ${name.last}`}
                    </h2>
                ))
            }
        </div>
    )
}