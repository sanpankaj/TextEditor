import React from 'react'

const Alert = (props) => {
    const capitalized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        
        //yha pe props.alert jo likha hai ye if else ki tarah kam karta hai
        //agr props.alert true hai toh agge evalute hoga nhi toh return 
        //ho jayega by default propes.alert ki value null pass ki ja rahi hai
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert" >
                <strong> { capitalized(props.alert.type)} </strong>: {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}

export default Alert
