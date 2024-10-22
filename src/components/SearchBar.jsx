import {useState} from 'react'
import PropTypes from 'prop-types'


const SearchBar = ({onSearch})=>{
    const[city,setCity] = useState('')

    const handleInputChange = (event)=>{
        setCity(event.target.value)
    }

    const searchButton = ()=>{
        if(city.trim() !== ''){
            onSearch(city)
        }
    }


    return(
        <div className='search-bar'>
            <input placeholder='Type here...' type='text' value={city} onChange={handleInputChange}/>
            <button className='btn btn-primary' onClick={searchButton}>Search</button>
        </div>
    )
}
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar