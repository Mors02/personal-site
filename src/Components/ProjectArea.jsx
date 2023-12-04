import React from "react"
import {Box, Paper, Title } from "@mantine/core"

export default function ProjectArea({title, id, children}) {

    return (
    <Box className="mx-auto w-10/12 my-12" id={id}>
        <Paper p="xl" className="bg-gradient-to-t from-light1 to-white-bg rounded-xl mt-5">
            <Title order={1} className="ml-4 mb-5">{title}</Title>
            {children}
        </Paper>
    </Box>)
}