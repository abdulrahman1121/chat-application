import React from 'react'
import IconButton from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

export default function SendButton() {
    return(
        <IconButton 
            sx={{ backgroundColor: '#292929', borderRadius:'10px'}}
            aria-label='send'
            onClick={onClick}
        >
            <SendIcon sx={{color: '#54d94d'}}/>
        </IconButton>
    )
}