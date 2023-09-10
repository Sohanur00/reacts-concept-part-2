import { useState } from "react"

export default function Team() {
const [Team,setTeam] = useState(11);


const handleAdd = () => {
const newTeam = Team + 1
setTeam(newTeam)

}

const handleRemove = () =>{

    setTeam(Team - 1)
}


    return (

        <div style={{
            border: '2px solid purple',
            margin: '15px',
            padding: '15px',
            borderRadius: '15px'
        }}>
            <h3>Players :{Team} </h3>

            <button onClick={handleAdd}> Add ME</button>
            <button onClick={handleRemove}> Remove</button>

        </div>


    )

}