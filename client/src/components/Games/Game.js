import React from 'react';
import { Grid } from '@mui/material'
import Main from '../Main/Main.js'
import Menu from '../Menu/Menu.js'
import SideBar from '../SideBar/SideBar.js'
import BottomBar from '../BottomBar/BottomBar.js'

function Game() {
    return (
        <Grid container>
            <Grid item xs={2} style={{ backgroundColor: 'lightblue', height: '100vh' }}>
                <Menu />
            </Grid>
            <Grid item xs={8}>
                <Grid container direction="column" style={{ height: '100vh' }}>
                    <Grid item style={{ backgroundColor: 'lightgreen', height: '85%' }}>
                        <Main />
                    </Grid>
                    <Grid item style={{ backgroundColor: 'rgba(167, 119, 205, 0.8)', height: '15%' }}>
                        <BottomBar />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} style={{ backgroundColor: 'lightpink', height: '100vh' }}>
                <SideBar />
            </Grid>
        </Grid>
    );
}

export default Game;