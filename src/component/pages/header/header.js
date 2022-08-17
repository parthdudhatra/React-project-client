import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


  

const Headers = ({headers, onSorting}) =>{

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <TableHead>
            <StyledTableRow>
                {headers.map(({name, field, sortable})=> (
                    <StyledTableCell 
                        key={name}
                        style={{ textAlign: "center" }}
                        onClick={() =>
                        sortable ? onSortingChange(field) : null
                         }
                        >
                            {name}
                            {sortingField && sortingField === field && (
                                sortingOrder === "asc"
                                ? <span>▼</span>
                                : <span>▲</span>
                            )}
                    </StyledTableCell>
                ))}
            </StyledTableRow>
        </TableHead>
        // <tr>
        //     {headers.map(({ name, field, sortable }) => (
        //         <th
        //         style={{ textAlign: "center" }}
        //             key={name}
        //             onClick={() =>
        //                 sortable ? onSortingChange(field) : null
        //             }
        //         >
        //             {name}
                    
                    // {sortingField && sortingField === field && (
                    //     sortingOrder === "asc"
                    //         ? <span>▼</span>
                    //         : <span>▲</span>
                    // )}
        //         </th>
        //     ))}
        // </tr>
    )
}

export default Headers;


