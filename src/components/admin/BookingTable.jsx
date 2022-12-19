import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BlockIcon from '@mui/icons-material/Block';
import { FilterAdminModal } from "../modals";
import Table from '@mui/material/Table';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ClipLoader } from "react-spinners";
import Paper from '@mui/material/Paper';
import axios from "axios";
import { GET_ALL_BOOKINGS } from "../../constant/constants";

const BookingTable = () => {
    const [tableData, setTableData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const fetchData = async (LINK) => {
        try {
            const data = await axios.get(LINK, { headers: { Authorization: `Bearer ${user.data.token}` }, });
            return data.data;
        } catch (err) {
            console.log('err')
        }
    }

    useEffect(() => {
        fetchData(GET_ALL_BOOKINGS)
            .then(res => setTableData(res.data.booking))
            .catch(err => console.log(err))
    }, []);

    function createData(
        sno: number,
        eventName: string,
        djName: string,
        eventDate: string,
        location: string,
        status: Boolean,
        id: string
    ) {
        return { sno, eventName, djName, eventDate, location, status, id };
    }

    let sno = 1
    const rows =
        tableData.map((rowData, sno) => {
            return createData(`${sno + 1}`, `${rowData.event || '-'}`, `${rowData.djId.djName || '-'}`, `${rowData.date}`, `${rowData.location || '-'}` , `${rowData.eventStatus}`)
        })


    return (
        <div className="w-[90%] mx-auto max-2md:w-[85%]">
            <div className="w-full mt-[85px]">

                <div className="flex justify-between items-center">
                    <h3 className="font-gill text-[30px] font-semibold">
                        Booking Details
                    </h3>
                    <figure
                        onClick={() => setIsOpen(true)}
                        className="border p-1 rounded-sm cursor-pointer select-none"
                    >
                        <FilterListIcon/>
                    </figure>
                </div>
            </div>

            {tableData.length === 0 ? (<div className="text-center mt-[4em]"><ClipLoader /></div>) : (
                <TableContainer component={Paper} className='mb-10 mt-4'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell > <span className="font-bold text-[16px]">S. No.</span></TableCell>
                            <TableCell ><span className="font-bold text-[16px]">Event Name</span></TableCell>
                            <TableCell ><span className="font-bold text-[16px]">DJ Name</span></TableCell>
                            <TableCell ><span className="font-bold text-[16px]">Event Date</span></TableCell>
                            <TableCell ><span className="font-bold text-[16px]">Location</span></TableCell>
                            <TableCell align="right"><span className="font-bold text-[16px]">Status</span></TableCell>
                        </TableRow>
                    </TableHead>

                        <TableBody>
                            {   rows.map((row) => (
                                <TableRow
                                    key={row.sno}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.sno}
                                    </TableCell>
                                    <TableCell component="th" scope="row">{row.eventName}</TableCell>
                                    <TableCell component="th" scope="row">{row.djName}</TableCell>
                                    <TableCell >{row.eventDate}</TableCell>
                                    <TableCell >{row.location}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>

                    </Table>
                </TableContainer>)
            }
            <FilterAdminModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
export default BookingTable;