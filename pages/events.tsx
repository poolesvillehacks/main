import type { NextPage } from "next";

import Link from "next/link";

import { Container, Box, Typography } from "@mui/material";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Events: NextPage = () => {
    const columns: GridColDef[] = [
        { field: "name", headerName: "Event Name", minWidth: 200, flex: 1 },
        { field: "date", headerName: "Date", width: 150 },
        { field: "time", headerName: "Time", width: 150 },
        { field: "location", headerName: "Location", width: 150 },
    ];
    const rows: GridRowsProp = [
        {
            id: 1,
            name: "Hackathon Opening Ceremony",
            date: "5/27",
            time: "6:00 PM EDT",
            location: "Zoom",
        },
        {
            id: 0,
            name: "Hacking Begins",
            date: "5/27",
            time: "7:00 PM EDT",
        },
        {
            id: 30,
            name: "Workshop: How to be successful with learning a programming language - Sylvia Wu",
            date: "5/28",
            time: "11:00 AM EDT",
<<<<<<< HEAD
        },
        {
            id: 31,
            name: "Workshop: Intro to Game Dev - Sam Wiggins",
            date: "5/28",
            time: "4:00 PM EDT",
=======
>>>>>>> 3baf533038cfc8bf12af57b65373f56d94a340ad
        },
        {
            id: 29,
            name: "Clash Royale Tournament",
            date: "5/28",
            time: "7:00 PM EDT",
        },
        {
            id: 20,
            name: "More to come!",
        },
        {
            id: 2,
            name: "Project submissions due",
            date: "5/29",
            time: "12:00 PM EDT",
            location: "DevPost",
        },
        {
            id: 3,
            name: "Judging Introduction",
            date: "5/29",
            time: "1:00 PM EDT",
            location: "Zoom",
        },
        {
            id: 4,
            name: "Judging Begins",
            date: "5/29",
            time: "1:15 PM EDT",
            location: "Zoom",
        },
        {
            id: 5,
            name: "Round 1 ends, Round 2 starts",
            date: "5/29",
            time: "1:30 PM EDT",
            location: "Zoom",
        },
        {
            id: 6,
            name: "Round 2 ends, Round 3 starts",
            date: "5/29",
            time: "1:45 PM EDT",
            location: "Zoom",
        },
        {
            id: 7,
            name: "Round 3 ends, Round 4 starts",
            date: "5/29",
            time: "2:00 PM EDT",
            location: "Zoom",
        },
        {
            id: 8,
            name: "Round 4 ends, Round 5 starts",
            date: "5/29",
            time: "2:15 PM EDT",
            location: "Zoom",
        },
        {
            id: 9,
            name: "Round 5 ends, Round 6 starts",
            date: "5/29",
            time: "2:30 PM EDT",
            location: "Zoom",
        },
        {
            id: 10,
            name: "Round 6 ends",
            date: "5/29",
            time: "2:45 PM EDT",
            location: "Zoom",
        },
        {
            id: 11,
            name: "Award Ceremony",
            date: "5/29",
            time: "4:00 PM EDT",
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
                    flexDirection: "column",
                }}
            >
                <Typography component="h1" variant="h1">
                    Schedule
                </Typography>

                <Typography component="h2" variant="h2" gutterBottom>
                    Times are subject to change, join the Discord!
                </Typography>
                <Box sx={{ height: "75vh", width: "100%" }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Container>
        </>
    );
};

export default Events;
