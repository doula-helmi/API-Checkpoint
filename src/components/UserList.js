import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import axios from "axios";

const Users = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setRows(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const columns = [
    {field: "id", headerName: "ID", width: 100},
    {field: "name", headerName: "Name", width: 150},
    {field: "username", headerName: "Username", width: 200},
    {field: "email", headerName: "Email", width: 300},
    {field: "phone", headerName: "Phone", width: 200},
    {field: "website", headerName: "Website", width: 300},
  ];
  return (
    <div style={{height: 650, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
