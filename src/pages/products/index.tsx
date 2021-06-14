import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api';
import { PageContent } from '../../styles/pages/PageContent';


function Products() {

    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [search, setSearch] = useState('');

    //Functions
    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if(search) {
            setVisibleProducts(products.filter(product => product.name.toLowerCase().includes(search)));
            return;
        }
        setVisibleProducts(products);
        
    }, [search]);

    useEffect(() => {
    }, [products, visibleProducts]);

    async function getProducts() {
        await api.get('/products')
        .then(response => {
            setProducts(response.data);
            setVisibleProducts(response.data);
        })
        .catch(err => {
            console.log({err});
            
        })
    }

    return (
        <PageContent>
            <div className="page-header">
                <h2 className="page-title">Lista de Produtos</h2>
                <TextField
                    label="Pesquisa"
                    placeholder="Escreva para pesquisar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="list">
                {
                    visibleProducts.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </PageContent>
    )
}


export default Products
