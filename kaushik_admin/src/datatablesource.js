export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"user",
        headerName:"User",
        width:230,
        renderCell:(params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img}/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email",
        headerName:"Email",
        width:130
    },
    {
        field:"age",
        headerName:"Age",
        width:100
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]
export const userRows = [
    {
        id:1,
        username:"Snow",
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        status:"active",
        email:"isnow@gmail.com",
        age:35
    },
    {
        id:2,
        username:"Jamie Lanniester",
        img:"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        email:"2snow@gmail.com",
        status:"passive",
        age:42
    }
]