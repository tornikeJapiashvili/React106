import React from 'react';

const ChildComponent = ({ isUserLoggedin, users }) => {

    return (
        <div>
            {isUserLoggedin
                ?
                (
                    users.length > 0
                        ?
                        (
                            users.map((user) => {
                                return (
                                    <div key={user.id}>
                                        <p>
                                            {user.firstName} {user.lastName} {user.age}
                                        </p>
                                    </div>
                                );
                            })
                        )
                        :
                        (
                            <h1>no users in the server</h1>
                        )
                )
                :
                (
                    <p>you are not authorized</p>
                )}
        </div>
    );
};

export default ChildComponent;





                // (users.map(user => {
                //     return (
                //         <div key={user.id}>
                //             <p>
                //                 {user.firstName} {user.lastName} {user.age}
                //             </p>
                //         </div>
                //     )
                // }))