import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import {getInvoices} from '../data'

function Invoices() {
  const invoicesList= getInvoices();
  const [invoices] = useState([...invoicesList]);
  const [search,setSearch] = useSearchParams();
  const searchText= search.get('name') || '';

  const byName = (name) =>(item) =>{
    return item.name.toLowerCase().includes(name.toLowerCase())
  }

  return (
    <div className='container'>
        <input 
          className='form-control' 
          style={{width:"50%"}} 
          placeholder="Enter search text"
          onChange={(e)=>{setSearch({name:e.target.value})}}
        />

        <ul className='list-group'>
          {invoices.filter(byName(searchText)).map((item,index)=>( <li className='list-group-item' key={index}>{item.name}</li>))}
        </ul>
        {invoices.filter(byName(searchText)).length > 0 ? '' :<div>No results</div>}
    </div>
  )
}

export default Invoices