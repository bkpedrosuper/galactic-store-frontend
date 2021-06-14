import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import PurchasedProductCard from '../../components/PurchasedProductCard';
import api from '../../services/api';
import { PageContent } from '../../styles/pages/PageContent';
import { UserCard } from '../../styles/pages/UserCard';

function PurchaseView() {
    const router = useRouter();
    const { pid, purchase_id } = router.query;

    const [purchase, setPurchase] = useState({
        id: '',
        costumer: {
            name: '',
            email: '',
            imageSrc: ''
        },
        products: []
    });

    //Functions
    useEffect(() => {

        getPurchase();
    }, []);

    useEffect(() => {
    }, [purchase]);

    async function getPurchase() {
        await api.get(`/purchases/${purchase_id}`)
            .then(response => {
                setPurchase(response.data);
                console.log(response.data);

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
                <h2 className="page-title">Detalhes do Pedido {purchase.id}</h2>
            </div>


            <UserCard>
                <div className="card">
                    <img className="card-image" src={ purchase.costumer.imageSrc || 'https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg' } alt="img" />
                    <div className="card-info">
                        <h3 className="card-info__name">Nome: {purchase.costumer.name}</h3>
                        <h5 className="card-info__name">Email: {purchase.costumer.email}</h5>
                    </div>
                </div>
            </UserCard>

            <div className="page-header">
                <h4 className="page-title">Produtos comprados</h4>
            </div>

            <div className="list">

                {
                    purchase.products.map(product => (
                        <PurchasedProductCard key={product.id} product={product} />
                    ))
                }

            </div>


        </PageContent>
    )
}


export default PurchaseView;