import React from 'react'
import ChildComponent from './ChildComponent'

const users = [
    {
        firstName: 'Toka',
        lastName: 'Giorgadze',
        age: 27,
        id: 5648
    },
    {
        firstName: 'Lamara',
        lastName: 'Ghobeglejiashvili',
        age: 73,
        id: 5649
    },
    {
        firstName: 'Giorga',
        lastName: 'Pirsakvirashvili',
        age: 22,
        id: 5650
    },

]


const ParentComponent = () => {
    return (
        <div>
            <ChildComponent users={users} isUserLoggedin={true}/>
        </div>
    )
}

export default ParentComponent