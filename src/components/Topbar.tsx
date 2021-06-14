import React, { useEffect, useState } from 'react'
import { Container } from '../styles/pages/Home'
import { Topbar } from '../styles/pages/Topbar'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import {Home, Group, AllInbox, Stars, ShoppingCart} from '@material-ui/icons';
import GalacticStoreLogo from '../assets/project.png'

import { makeStyles } from '@material-ui/core/styles';

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
                        <nav className="flex topbar-nav">
                            <Link href="/">
                                <div className="topbar-nav__item flex align-center">
                                    <Home className={classes.icon}/>
                                </div>
                            </Link>
                            <Link href="/costumers">
                                <div className="topbar-nav__item flex align-center">
                                    <Group className={classes.icon}/>
                                    <p className="topbar-nav__item__description">Clientes</p>
                                </div>
                            </Link>
                            <Link href="/products">
                                <div className="topbar-nav__item flex align-center">
                                    <AllInbox className={classes.icon}/>
                                    <p className="topbar-nav__item__description">Produtos</p>
                                </div>
                            </Link>
                            <Link href="/purchases">
                                <div className="topbar-nav__item flex align-center">
                                    <Stars className={classes.icon}/>
                                    <p className="topbar-nav__item__description">Pedidos</p>
                                </div>
                            </Link>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </Topbar>
    )
}

export default TopbarComponent;
