import React from 'react'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}


const TableBody = props =>{
    const {charactersData} = props;
    const rows = charactersData.map((character, index)=>{
      return (  <tr key={index}>
            <td> {character.name}</td>
            <td> {character.job} </td>
            <td> <button onClick={ ()=> props.removeCharacter(index) } >Delete</button> </td>
        </tr> )
    });
    return (<tbody>{rows}</tbody>)
};

const Table =(props) =>{
    const {charactersData, removeCharacter} = props;
    return (
        <table>
            <TableHeader />
            <TableBody charactersData ={charactersData} removeCharacter={removeCharacter} />
        </table>
    )
}


export default Table