import * as React from 'react';
import './vieweditcustomer.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {
  BrowserRouter,
  Routes,
  Route,Link,
} from "react-router-dom";
import {UserRows} from './dummydata.js'
import  {useState} from 'react';

 
 

export default function vieweditcustomer() {  
  
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Address', headerName: 'Address', width: 130 },
  {
    field: 'phonenumber',
    headerName: 'Phone Number',
    width:160,
  },
   {
       field:'Action',
       headerName:'Action',
       width:130,
       renderCell :(params)=>{
           return(
               <> 
               <Link to={"/ViewCustomer/"+params.row.id}> 
               <button className='Editcustomer'>Edit</button></Link>
               <DeleteIcon className='deleteItem'/>
               </>
           )
       }


   },
];

  return (
    <div className='view_customer'><br></br><br></br>
    <div style={{ height: 500, width: '90%' }}>
      <DataGrid 
      disableSelectionOnClick
        rows={UserRows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
