import { useEffect, useState } from 'react'
import './friends.css'
import './Friend'
export default

    function Friends() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))


    }, [])





    return (
        <div className='box'>
            <h3>Friends :{friends.length} </h3>

            {
                friends.map(friends => <Friends friend ={friends} ></Friends>)

            }

        </div>

    )
}
/**
 * state to hold data
 * use effect eith dependency array
 * usse fetch to loead data
 */