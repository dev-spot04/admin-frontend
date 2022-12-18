import React, { useState, useEffect } from "react";
import { FilterAdminModal } from "../modals";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import { USER_COUNT_URL } from "../../constant/constants";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

const AllDetails = (props) => {
    const [data, setData] = useState({TotalUser: 0, TotalDj: 0, TotalRevenue: 6700, TotalGigs: 589})
    const { user } = useSelector((state) => state.auth);

    const fetchData = async () => {
        try {
            const data = await axios.get(USER_COUNT_URL, { headers: { Authorization: `Bearer ${user.data.token}`},});
            return data.data;
        } catch (err) {
            console.log('err')
        }
    }

    useEffect( () => {
        fetchData()
            .then(res => {
                const response= res.data.count[0]
                const {TotalDj, TotalUser} = response
                setData(prev => ( {...prev, TotalDj, TotalUser}) )
            })
            .catch(err => console.log(err))
      }, []);

    const [isOpen, setIsOpen] = useState(false);
    
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
        <div className="w-[90%] mx-auto max-2md:w-[85%]">
            <div className="admin-dashboard flex flex-wrap justify-between mt-24 mb-20 max-xl:justify-evenly max-2md:justify-center">
                <AdminBox bg='bg-blue-light' heading='Users' number={data.TotalUser} />
                <AdminBox bg='bg-gray-mid' heading='Djs' number={data.TotalDj} />
                <AdminBox bg='bg-red-light' heading='Revenue' number={data.TotalRevenue} rev={true} />
                <AdminBox bg='bg-green-mid' heading='Bookings' number={data.TotalGigs} />
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
            <FilterAdminModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )

}

export default AllDetails;