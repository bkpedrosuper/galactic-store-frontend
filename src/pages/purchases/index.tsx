import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { PageContent } from '../../styles/pages/PageContent';
import Head from 'next/head'
import PurchaseCard from '../../components/PurchaseCard';
import Link from 'next/link';


function Purchases() {

    const [purchases, setPurchases] = useState([]);
    const [visiblePurchases, setVisiblePurchases] = useState([]);
    const [search, setSearch] = useState('');

    //Functions
    useEffect(() => {
        getPurchases();
    }, []);

    useEffect(() => {
        if(search) {
            setVisiblePurchases(purchases.filter(purchase => purchase.costumer.name.toLowerCase().includes(search)));
            return;
        }
        setVisiblePurchases(purchases);
        
    }, [search]);

    useEffect(() => {
    }, [purchases, visiblePurchases]);

    async function getPurchases() {
        await api.get('/purchases')
        .then(response => {
            setPurchases(response.data);
            setVisiblePurchases(response.data);
        })
        .catch(err => {
            console.log({err});
            
        })
    }

    return (
        <PageContent>
            <Head>
                <title>Pedidos</title>
            </Head>
            <div className="page-header">
                <h2 className="page-title">Lista de Pedidos</h2>
                <TextField
                    label="Pesquisa"
                    placeholder="Escreva para pesquisar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="list">
                {
                    visiblePurchases.map(purchase => (
                        <PurchaseCard key={purchase.id} purchase={purchase}/>
                    ))
                }
            </div>
        </PageContent>
    )
}


export default Purchases;
