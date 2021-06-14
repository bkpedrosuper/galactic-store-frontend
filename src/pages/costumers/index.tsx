import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import CostumerCard from '../../components/CostumerCard';
import api from '../../services/api';
import { PageContent } from '../../styles/pages/PageContent';
import Head from 'next/head'


function Costumers() {

    const [costumers, setCostumers] = useState([]);
    const [visiblecostumers, setVisibleCostumers] = useState([]);
    const [search, setSearch] = useState('');

    //Functions
    useEffect(() => {
        getCostumers();
    }, []);

    useEffect(() => {
        if(search) {
            setVisibleCostumers(costumers.filter(costumer => costumer.name.toLowerCase().includes(search)));
            return;
        }
        setVisibleCostumers(costumers);
        
    }, [search]);

    useEffect(() => {
    }, [costumers, visiblecostumers]);

    async function getCostumers() {
        await api.get('/costumers')
        .then(response => {
            setCostumers(response.data);
            setVisibleCostumers(response.data);
        })
        .catch(err => {
            console.log({err});
            
        })
    }

    return (
        <PageContent>
            <Head>
                <title>Clientes</title>
            </Head>
            <div className="page-header">
                <h2 className="page-title">Lista de Clientes</h2>
                <TextField
                    label="Pesquisa"
                    placeholder="Escreva para pesquisar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="list">
                {
                    visiblecostumers.map(costumer => (
                        <CostumerCard key={costumer.id} costumer={costumer}/>
                    ))
                }
            </div>
        </PageContent>
    )
}


export default Costumers;
