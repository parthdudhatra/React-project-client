import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { getUser, deleteUser } from "../../../redux/Features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import TableHeaders from '../header/header';
import Serach from '../Serach/serach';
import Paginations from '../pagination/pagination'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';



const Home = ({ setUser }) => {

  // here defind the React Hooks
  const dispatch = useDispatch();
  // set ths state for Serach
  const [search, setSearch] = useState("");
  // sorting
  const [sorting, setSorting] = useState({ field: "", order: "" });
  // pagination 
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const USERS_PER_PAGE = 5;
  // user comes from the redux store
  const userState = useSelector((state) => state.users);
  let { user } = userState;
  const [data, setData] = useState({ name: '', email: '', contact: "" })

  useEffect(() => {
    console.log("Id", user.length)
    if (!user.length) {
      getUsers();
    }
  }, [])

  // set the header Fieldes here
  const headers = [
    { name: "ID", field: "id", sortable: false },
    { name: "Name", field: "name", sortable: true },
    { name: "Email", field: "email", sortable: true },
    { name: "Contact", field: "contact", sortable: false },
    { name: "Action", field: "action", sortable: false }
  ]
   // styledTableCell
   const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  // styledTableRow
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // all the user function here.....
  const getUsers = async () => {
    const response = dispatch(getUser(data))
    console.log("ewdggweg", response)
    if (response.status === 200) {
      setData(response.data)
    }
  }

  const usersData = useMemo(() => {
    let computedUsers = user;

    // search
    if (search) {
      computedUsers = computedUsers.filter(
        user =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    // sorting users
    //Sorting comments
    console.log(">>>", sorting.order)
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      console.log("reversed", reversed)
      computedUsers = computedUsers.slice().sort(
        (a, b) =>
          reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    setTotalItems(computedUsers.length)
    // current Page slice
    return computedUsers.slice(
      (currentPage - 1) * USERS_PER_PAGE,
      (currentPage - 1) * USERS_PER_PAGE + USERS_PER_PAGE
    );
  }, [user, currentPage, search, sorting])

  // const user = () => {
  //   let s = new Date();
  //   const min = `${s.getMinutes()}`;
  //   // console.log("min", min)
  //   if(min % 2 === 0){
  //     console.log("true")
  //     getUsers()
  //   }else
  //   {
  //     console.log("false")
  //   }
  // }


  // delete User function here..... 
  const deleteUserData = async (id) => {
    console.log("Id///", id)
    if (
      window.confirm("Are you sure that you wanted to delete that user record")
    ) {
      console.log("Id", id)
      dispatch(deleteUser(id))
      getUsers();
    }
  }

  // console.log(".....",users)
  return (
    <div>
      <div className="row">
        <div className="col-md-6 d-flex flex-row-reverse">
          <Serach onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1)
          }} />
        </div>
      </div>
      {/* {loading && <p>Loding</p> } */}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHeaders
            headers={headers}
            onSorting={(field, order) =>
              setSorting({ field, order })
            }
          />
          <TableBody>
            {
              usersData.map((item, index) => {
                return (
                  <StyledTableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" align="center" scope="row">{item._id}</StyledTableCell>
                    <StyledTableCell align="center">{item.name}</StyledTableCell>
                    <StyledTableCell align="center">{item.email}</StyledTableCell>
                    <StyledTableCell align="center">{item.contact}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Link to={`/update/${item._id}`}>
                        <EditIcon id="Box" spacing={4} direction='row' onClick={() => setUser({ ...item })}></EditIcon>
                        {/* <button className="btn-edit" onClick={() => setUser({...item})}>Edit</button> */}
                      </Link>
                      <Delete id="Box" onClick={() => deleteUserData(item._id)} ></Delete>
                      {/* <button className='btn-delete' onClick={() => deleteUserData(item._id)}>Delete</button> */}
                      <Link to={`/view/${item._id}`}>
                        <VisibilityIcon id="Box"></VisibilityIcon>
                        {/* <button className='btn-view'>View</button> */}
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      {/* <table className='styled-table'>
        
        <tbody>
          {
            
            
          }
        </tbody>
      </table> */}
      <div style={{ display: 'block', padding: 30 }}>
        <Paginations
          style={{ marginLeft: "1300px" }}
          total={totalItems}
          usersPrePage={USERS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}

export default Home;