import React, {useState} from 'react'

const SearchBar = ({onUserData}) => {

    const [userName, setUserName] = useState('')

    const handleSearch = async(e) => {
        e.preventDefault();
        try {
            // const ApiUrl = `https://api.github.com/users/${userName}`
            const res = await fetch(`https://api.github.com/users/${userName}`)
            const data = await res.json()
            // console.log(data)
            onUserData(data);
        } catch (error) {
            console.error(error);
            onUserData(null)
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="inputDiv">
            <input className="input_field" type="text" placeholder="Enter Github username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button type="submit">Search</button>
            </div>
      </form>
    )
}

export default SearchBar
