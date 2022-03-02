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
        { field: "location", headerName: "Location", width: 150 },
    ];
    const rows: GridRowsProp = [
        {
            id:1,
            name: "Leadership Meeting",
            date: "3/4",
            time: "11:00 AM EST",
            location: "33B",
        },
        {
            id: 2,
            name: "Potential Hackathon Opening Ceremony, stay updated!",
            date: "5/20",
            time: "6:00 PM EST",
            location: "Zoom",
        },
    ];
    return (
        <>
        
            <Container
                sx={{
                    minHeight: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 8,
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
