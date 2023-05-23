import React from 'react';
import { Grid } from '@mui/material'
import Chat from './Chat.js'
import Log from './Log.js'
import Players from './Players.js'
import Player from './Player.js'
import Bank from './Bank.js'

function SideBar() {
    return (
        <Grid container direction="column" style={{ height: '100vh' }}>
            <Grid item style={{ backgroundColor: 'lightblue', height: '20%' }}>
                <Chat />
            </Grid>
            <Grid item style={{ backgroundColor: 'lightgreen', height: '20%' }}>
                <Log />
            </Grid>
            <Grid item style={{ backgroundColor: 'lightpink', height: '10%' }}>
                <Bank />
            </Grid>
            <Grid item style={{ backgroundColor: 'lightgray', height: '35%' }}>
                <Players />
            </Grid>
            <Grid item style={{ backgroundColor: 'lightyellow', height: '15%' }}>
                <Player />
            </Grid>
        </Grid>
    );
}

export default SideBar;