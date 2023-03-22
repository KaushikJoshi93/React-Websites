import './table.scss'
import MiuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'

const Table = () => {
    const rows = [
        {
            id: 1134,
            product: "Acer Nitro 5",
            image: "https://static-ecapac.acer.com/media/catalog/product/cache/bd4621b95a9782df56a4048f6a07bc46/n/i/nitro5_an515-57_primary_image_3_2_4_2.jpg",
            customer: "John smith",
            date: "1 March",
            amount: 785,
            method: "Cash On Delivery",
            status: "Approved"
        },
        {
            id: 113484,
            product: "Playstation 5",
            image: "https://rukminim1.flixcart.com/image/416/416/kj7gwi80/gamingconsole/t/v/v/cfi-1008a01r-825-sony-no-original-imafytxe7twjskbx.jpeg?q=70",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Cash On Delivery",
            status: "Pending"
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
            <MiuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tablecell'>Tracking Id</TableCell>
                        <TableCell className='tablecell'>Product</TableCell>
                        <TableCell className='tablecell'>Customer</TableCell>
                        <TableCell className='tablecell'>Date</TableCell>
                        <TableCell className='tablecell'>Amount</TableCell>
                        <TableCell className='tablecell'>Payment Method</TableCell>
                        <TableCell className='tablecell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='tablecell'>{row.id}</TableCell>
                            <TableCell className='tablecell'>
                                <div className="cellWrapper">
                                    <img src={row.image}  />
                                    {row.product}
                                </div>
                                </TableCell>
                            <TableCell className='tablecell'>{row.customer}</TableCell>
                            <TableCell className='tablecell'>{row.date}</TableCell>
                            <TableCell className='tablecell'>{row.amount}</TableCell>
                            <TableCell className='tablecell'>{row.method}</TableCell>
                            <TableCell className='tablecell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MiuiTable>
        </TableContainer>

    )
}

export default Table