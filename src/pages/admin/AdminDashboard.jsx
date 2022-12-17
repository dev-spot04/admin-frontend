import React, { useState, useEffect } from "react";
import { FilterAdminModal } from "../../components";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

const AdminDashboard = () => {
    const [data, setData] = useState({})
    // useEffect( async() => {
    //     await axios.post('http://localhost:3005/api/user/count-total-users', )
    // }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function createData(
        name: string,
        val1: number,
        val2: number,
        val3: number,
        val4: number,
    ) {
        return { name, val1, val2, val3, val4 };
    }

    const rows = [
        createData('Random Name', 159, 6.0, 24, 4.0),
        createData('Peron Name', 237, 9.0, 37, 4.3),
        createData('Dj Name', 262, 16.0, 24, 6.0),
        createData('About', 305, 3.7, 67, 4.3)
    ];

    const AdminBox = (props) => {
        console.log(props.bg)
        return (
            <div
                className={`group max-2md:mb-6 mb-4 w-auto max-2md:w-[80%] max-2md:px-2 px-[40px] flex flex-col 
            shadow-item-shadow rounded-2xl items-center h-[140px] w-[290px] hover:border-2 hover:cursor-pointer hover:border-blue-light`}
            >
                <h1 className="text-[23px] max-2md:text-[20px] max-2md:ml-4 mt-6 font-inter font-[500] group-hover:text-blue-light">Total {props.heading}</h1>
                <p className="mb-[32px] text-[2.5em]  w-[max-content] max-2md:ml-4 font-inter font-[600] group-hover:text-blue-light">{props.number}</p>
            </div>
        )
    }

    return (

        <div>
            <div
                className={`bg-blue-darkest top-0 v-screen text-white  
    transition-all duration-300 delay-100 ease-linear 
     w-[100%] h-[8em] z-30`}
            >
                <div className="container">
                    <div className="px-[42px] pt-[29px] select-none flex justify-between items-center">
                        <div
                            className="w-[71px] h-[71px] bg-blue-light rounded-full 
                    flex flex-col justify-center items-center text-[1.5rem] leading-5 text-white"
                        >
                            <div className="space-x-1">
                                <span>S</span>
                                <span>P</span>
                            </div>
                            <div className="space-x-1">
                                <span>O</span>
                                <span>T</span>
                            </div>
                        </div>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <img
                                    className="rounded-full cursor-pointer w-[3.5rem] h-[3.5rem]"
                                    src="/assets/profile/profile.png"
                                    alt="current user profile"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <Avatar /> Account Details
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </div>

            </div>
            <div className="w-[90%] mx-auto max-2md:w-[85%]">
                <div className="admin-dashboard flex flex-wrap justify-between mt-24 mb-20 max-xl:justify-evenly max-2md:justify-center">
                    <AdminBox bg='bg-blue-light' heading='Users' number='900' />
                    <AdminBox bg='bg-gray-mid' heading='Djs' number='67' />
                    <AdminBox bg='bg-red-light' heading='Revenue' number='$ 6,700' />
                    <AdminBox bg='bg-green-mid' heading='Bookings' number='589' />
                </div>
                <div className="w-full mt-[85px]">

                    <div className="flex justify-between items-center">
                        <h3 className="font-gill text-[30px] font-semibold">
                            Available Details
                        </h3>
                        <figure
                            onClick={() => setIsOpen(true)}
                            className="border p-1 rounded-sm cursor-pointer select-none"
                        >
                            <img
                                className="text-black-dark w-4 h-4 "
                                src="./assets/icons/filter.png"
                                alt="filter"
                            />
                        </figure>
                    </div>
                </div>
                <TableContainer component={Paper} className='mb-10 mt-3'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Heading 1</TableCell>
                                <TableCell align="right">Heading 2</TableCell>
                                <TableCell align="right">Heading 3</TableCell>
                                <TableCell align="right">Heading 4</TableCell>
                                <TableCell align="right">Heading 5</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.val1}</TableCell>
                                    <TableCell align="right">{row.val2}</TableCell>
                                    <TableCell align="right">{row.val3}</TableCell>
                                    <TableCell align="right">{row.val4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <FilterAdminModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default AdminDashboard;