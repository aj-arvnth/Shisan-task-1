import React , { useState }from "react";
import { useTable, useSortBy } from "react-table";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TableContainer from "@mui/material/TableContainer";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import "./Table.css"; 

const BasicTable = ({ data }) => {

  const [searchQuery, setSearchQuery] = useState("");

  const columns = React.useMemo(
    () => [
      { Header: "Sno", accessor: "sno" }, 
      { Header: "Company Name", accessor: "companyName" },
      { Header: "Status", accessor: "status" }, 
      { Header: "Evaluation", accessor: "evaluation" },
      { Header: "Address", accessor: "address" },
      {
        Header: "Locate",
        accessor: "locate",
        Cell: ({ row }) => (
          <Button variant="outlined" onClick={() => console.log(row.original)}>
          <LocationOnIcon/>
            Get Location
          </Button>
        ),
      },
    ],
    []
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data, 
  },
  useSortBy,);

  const filteredRows = rows.filter((row) => {
    const rowData = Object.values(row.values).join(" ").toLowerCase();
    return rowData.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
    <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
    <TableContainer
      component={Paper}
      className="table-container"
      style={{ maxHeight: "500px" }}
    >
     
      <Table
        {...getTableProps()}
        aria-label="data table"
        className="custom-table"
      >
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow 
              {...headerGroup.getHeaderGroupProps()}
              className="table-header-row"
            >
              {headerGroup.headers.map((column) => (
                <TableCell
  {...column.getHeaderProps()}
  className="table-header-cell"
>
  <div
    {...column.getSortByToggleProps()}
    className="header-cell-content"
  >
    {column.render("Header")}
    {column.canSort && (
      <span className="sort-icon">
        {column.isSorted ? (
          column.isSortedDesc ? (
            <ArrowDropDownIcon />
          ) : (
            <ArrowDropUpIcon />
          )
        ) : (
          <ArrowDropDownIcon />
        )}
      </span>
    )}
  </div>
</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
        {filteredRows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} className="table-body-row">
                {row.cells.map((cell, index) => {
                  if (index === 0) {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        className="table-body-cell sno-column"
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      className="table-body-cell"
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default BasicTable;
