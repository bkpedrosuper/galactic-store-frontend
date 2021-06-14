import React, { useEffect, useState } from 'react'
import { Container } from '../styles/pages/Home'
import { Topbar } from '../styles/pages/Topbar'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import {Home, Group, AllInbox, Stars} from '@styled-icons/material'
import GalacticStoreLogo from '../assets/project.png'
import { makeStyles } from '@material-ui/core/styles';
import { IconStyleWrapper } from '../styles/components/Icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
      color: "#ffffff"
  }
}));

function TopbarComponent() {
    const classes = useStyles();

    return (
        <Topbar>
            <Container>
                <Grid container className={classes.root}>
                    <Grid item xs={4} className="flex justify-center align-center">
                        <div className="flex justify-center">
                            <img className="topbar-logo" src={GalacticStoreLogo} alt="logo" />
                        </div>
                    </Grid>

                    <Grid item xs={8}>
                        <IconStyleWrapper>
                            <nav className="flex topbar-nav">
                                <Link href="/">
                                    <div className="topbar-nav__item flex align-center">
                                        <Home/>
                                    </div>
                                </Link>
                                <Link href="/costumers">
                                    <div className="topbar-nav__item flex align-center">
                                        <Group/>
                                        <p className="topbar-nav__item__description">Clientes</p>
                                    </div>
                                </Link>
                                <Link href="/products">
                                    <div className="topbar-nav__item flex align-center">
                                        <AllInbox/>
                                        <p className="topbar-nav__item__description">Produtos</p>
                                    </div>
                                </Link>
                                <Link href="/purchases">
                                    <div className="topbar-nav__item flex align-center">
                                        <Stars/>
                                        <p className="topbar-nav__item__description">Pedidos</p>
                                    </div>
                                </Link>
                            </nav>
                        </IconStyleWrapper>
                    </Grid>
                </Grid>
            </Container>
        </Topbar>
    )
}

export default TopbarComponent;
