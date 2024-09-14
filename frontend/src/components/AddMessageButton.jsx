import React from 'react'
import IconButton from '@mui/material/IconButton'
import AddCircle from '@mui/icons-material/AddCircle';

export default function AddMessageButton() {
    return(
        <IconButton sx={{
            color: '#54d94d', 
            padding: 0
            }} 
            aria-label='add message'>
            <AddCircle sx={{ fontSize: 50 }} />
        </IconButton>
    )
}