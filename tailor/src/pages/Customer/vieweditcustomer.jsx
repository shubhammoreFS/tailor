import * as React from 'react';
import './vieweditcustomer.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


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
               <button className='Editcustomer'>Edit</button>
               <DeleteIcon className='deleteItem'/>
               </>
           )
       }


   },
];

const rows = [
  { id: 1, Name: 'Snow', Address: 'Jon', phonenumber: 3424534554},
  { id: 2, Name: 'Lannister', Address: 'Cersei', phonenumber: 3424534554},
  { id: 3, Name: 'Lannister', Address: 'Jaime', phonenumber: 3424534554},
  { id: 4, Name: 'Stark', Address: 'Arya', phonenumber: 3424534554},
  { id: 5, Name: 'Targaryen', Address: 'Daenerys', phonenumber:3424534554},
  { id: 1, Name: 'Snow', Address: 'Jon', phonenumber: 3424534554},
  { id: 2, Name: 'Lannister', Address: 'Cersei', phonenumber: 3424534554},
  { id: 3, Name: 'Lannister', Address: 'Jaime', phonenumber: 3424534554},
  { id: 4, Name: 'Stark', Address: 'Arya', phonenumber: 3424534554},
  { id: 5, Name: 'Targaryen', Address: 'Daenerys', phonenumber:3424534554},
  { id: 1, Name: 'Snow', Address: 'Jon', phonenumber: 3424534554},
  { id: 2, Name: 'Lannister', Address: 'Cersei', phonenumber: 3424534554},
  { id: 3, Name: 'Lannister', Address: 'Jaime', phonenumber: 3424534554},
  { id: 4, Name: 'Stark', Address: 'Arya', phonenumber: 3424534554},
  { id: 5, Name: 'Targaryen', Address: 'Daenerys', phonenumber:3424534554}
];

export default function vieweditcustomer() {
  return (
    <div className='view_customer'><br></br><br></br>
    <div style={{ height: 500, width: '90%' }}>
      <DataGrid 
      disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
