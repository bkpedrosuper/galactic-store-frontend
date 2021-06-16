import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import PurchasedProductCard from '../../components/PurchasedProductCard';
import api from '../../services/api';
import { PageContent } from '../../styles/pages/PageContent';
import { UserCard } from '../../styles/pages/UserCard';

function PurchaseAdd() {
    const router = useRouter();
    const { pid, costumer_id } = router.query;

    const [costumer, setCostumer] = useState({
        name: '',
        email: '',
        imageSrc: ''
    });

    //Functions
    useEffect(() => {
        getCostumer();
    }, []);

    useEffect(() => {
    }, [costumer]);

    async function getCostumer() {
        await api.get(`/costumers/${costumer_id}`)
            .then(response => {
                setCostumer(response.data);
            })
            .catch(err => {
                console.log({ err });
            })
    }

    return (
        <PageContent>
            <Head>
                <title>Pedido</title>
            </Head>
            <div className="page-header">
                <h2 className="page-title">Realizar novo pedido</h2>
            </div>


            <UserCard>
                <div className="card">
                    <img className="card-image" src={ costumer.imageSrc || 'https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg' } alt="img" />
                    <div className="card-info">
                        <h3 className="card-info__name">Nome: {costumer.name}</h3>
                        <h5 className="card-info__name">Email: {costumer.email}</h5>
                    </div>
                </div>
            </UserCard>

            <div className="page-header">
                <h4 className="page-title">Selecionar Produtos</h4>
            </div>


        </PageContent>
    )
}


export default PurchaseAdd;