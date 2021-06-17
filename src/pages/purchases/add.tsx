import { MenuItem, TextField as MuiTextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Field, Form, Formik } from 'formik';
import {
    TextField
} from 'formik-material-ui';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PurchasedProductCard from '../../components/PurchasedProductCard';
import api from '../../services/api';
import { NewProduct } from '../../styles/pages/NewProduct';
import { PageContent } from '../../styles/pages/PageContent';
import { UserCard } from '../../styles/pages/UserCard';
import { normalizePrice } from '../../utils';

function PurchaseAdd() {

    interface Product {
        imageSrc: string,
        name: string,
        price: number,
        id: string,
        multiple: number,
    }

    interface ProductFormError {
        price: string,
        quantity: string
    }

    const emptyProduct = () : Product => ({
        imageSrc: '',
        name: '',
        price: 0,
        id: '',
        multiple: 0,
    })

    const router = useRouter();
    const { costumer_id } = router.query;

    const [costumer, setCostumer] = useState({
        name: '',
        email: '',
        imageSrc: '',
    });

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(emptyProduct);
    const [addProduct, setAddProduct] = useState(false);
    const [productQuantity, setProductQuantity] = useState([1, 2, 3]);

    //Functions
    useEffect(() => {
        getCostumer();
        getProducts();
    }, []);

    useEffect(() => {
    }, [costumer, addProduct, selectedProducts]);

    async function getCostumer() {
        await api.get(`/costumers/${costumer_id}`)
            .then(response => {
                setCostumer(response.data);
            })
            .catch(err => {
                console.log({ err });
            })
    }

    async function getProducts() {
        await api.get('/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => {
                console.log({ err });

            })
    }

    function handleChangeCurrentProduct(product: Product) {
        const multiple = product.multiple || 1;
        const newProductQuantity = Array.from(Array(51).keys()).slice(1).filter(num => num % multiple == 0);

        setProductQuantity(newProductQuantity);
        setCurrentProduct(product)
    }

    function addPurchasedProduct({quantity, price}) {
        const newPurchasedProduct = {
            quantity,
            price,
            originalPrice: currentProduct.price,
            imageSrc: currentProduct.imageSrc,
            id: currentProduct.id,
        }

        setSelectedProducts([...selectedProducts, newPurchasedProduct]);
        setAddProduct(false);
        setCurrentProduct(emptyProduct);
    }

    async function handleSavePurchase() {
        const newPurchase = {
            costumer_id,
            products_selected: selectedProducts.map(product => {
                const {id,quantity, price} = product;
                return {
                    product_id: id,
                    quantity,
                    price,
                }
            })
        }

        await api.post('/purchase', newPurchase)
        .then(res => {
            toast.success('Pedido emitido com sucesso!');
            router.push('/purchases');
        })
        .catch(err => {
            toast.error('Ocorreu um erro ao emitir este pedido!');
            console.log({err});
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
                    <img className="card-image" src={costumer.imageSrc || 'https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg'} alt="img" />
                    <div className="card-info">
                        <h3 className="card-info__name">Nome: {costumer.name}</h3>
                        <h5 className="card-info__name">Email: {costumer.email}</h5>
                    </div>
                </div>
            </UserCard>

            <div className="page-header">
                <h4 className="page-title">Selecionar Produtos</h4>
            </div>

            <NewProduct>
                <button onClick={() => setAddProduct(true)} className="button">Adicionar novo produto ao carrinho</button>

                {
                    addProduct &&

                    <div className="card">
                        <div className="card-select">
                            <MuiTextField
                                select
                                value={currentProduct}
                                onChange={(e: React.ChangeEvent<{ value: unknown }>) => handleChangeCurrentProduct(e.target.value as Product)}
                                label="Produto"
                                placeholder="Escolha o produto a ser adicionado"
                                variant="outlined"
                                fullWidth={true}
                            >
                                {
                                    products.map(product => (
                                        <MenuItem value={product}>{product.name}</MenuItem>
                                    ))
                                }
                            </MuiTextField>
                        </div>

                        {
                            (currentProduct && currentProduct.name) &&
                            <>
                                <img src={currentProduct.imageSrc} alt={currentProduct.name} className="card-image" />

                                <div className="card-info">

                                    <h3 className="card-info__name">Nome: {currentProduct.name}</h3>
                                    <h5 className="card-info__price">Preço original: R$ {normalizePrice(currentProduct.price)}</h5>
                                    {
                                        currentProduct.multiple &&
                                        <h5 className="card-info__price">Apenas em múltiplos de: {currentProduct.multiple}</h5>
                                    }

                                    <Formik
                                        enableReinitialize
                                        initialValues={{ quantity: 1, price: '0,00', }}
                                        validate={values => {
                                            const errors: Partial<ProductFormError> = {};
                                            if (!values.quantity) {
                                                errors.quantity = 'Campo Obrigatório';
                                            }
                                            if (!values.price) {
                                                errors.price = 'Campo Obrigatório'
                                            }
                                            return errors;
                                        }}

                                        onSubmit={(values) => {
                                            console.log({ submit: values });
                                            addPurchasedProduct(values);
                                        }}
                                    >
                                        {({ submitForm }) => (
                                            <Form>
                                                <Grid container spacing={1}>
                                                    <Grid item lg={6} xs={6} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="price"
                                                            type="Number"
                                                            label="Preço"
                                                            placeholder="Insira o preço"
                                                            helperText="Ex: 75000,00"
                                                            fullWidth={true}
                                                        />
                                                    </Grid>

                                                    <Grid item lg={6} xs={6} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            type="number"
                                                            name="quantity"
                                                            label="Quantidade"
                                                            helperText="Selecione a quantidade"
                                                            select
                                                            fullWidth={true}
                                                        >
                                                            {productQuantity.map((option) => (
                                                                <MenuItem key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </Field>
                                                    </Grid>
                                                </Grid>

                                                <div className="card_button ">
                                                    <button onClick={submitForm} className="button button_product">Adicionar</button>
                                                </div>
                                            </Form>
                                        )}


                                    </Formik>
                                
                                </div>
                            </>
                        }
                    </div>

                }
            </NewProduct>

            <div className="empty-div">
                {
                    !selectedProducts.length &&
                    <span>Você não selecionou nenhum produto</span>
                }
            </div>

            <div className="list">
                {
                    selectedProducts.map(selectedProduct => (
                        <PurchasedProductCard key={selectedProduct.id} product={selectedProduct} />
                    ))
                }
            </div>

            

            <div className="confirm-button">
                {
                    !!selectedProducts.length && 
                    <button onClick={() => handleSavePurchase()} className="button button_confirm">Salvar</button>
                }
            </div>


        </PageContent>
    )
}


export default PurchaseAdd;