import React,{useState} from 'react';
import '../css/Style.css';

export default function Temp() {

    const [searchText,setSearchText] = useState('')

    const handleSearch = (e) => {
        let val = e.target.value;
        console.log(val)
    }
  return (
    <div className='box'>
      <input type="search" className="search" onChange={handleSearch} />
    </div>
  )
}
