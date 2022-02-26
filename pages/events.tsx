import type { NextPage } from "next";

import Link from "next/link";

import {
    Container,
    Box,
    Typography

} from "@mui/material";

import {    DataGrid,
    GridRowsProp, 
    GridColDef} from "@mui/x-data-grid"




const Events: NextPage = () => {
    const columns: GridColDef[] = [
        { field: "name", headerName: "Event Name", minWidth: 200, flex: 1 },
        { field: "date", headerName: "Date", width: 150 },
        { field: "time", headerName: "Time", width: 150 },
    ];
    const rows: GridRowsProp = [
        { id: 1, name: "Meeting with Computer Club", date: "2/28", time: "11:00 AM EST" },

    ];
    return (
        <>
        
            <Container
                sx={{
                    minHeight: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: { xs: 4, md: 8 },
                    flexDirection: "column"
                }}
            >   
                <Typography component="h1" variant="h3" gutterBottom>Schedule</Typography>
                <Box sx={{ height: "75vh", width: "100%" }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Container>
        </>
    );
};

export default Events;
