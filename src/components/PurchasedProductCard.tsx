import React from 'react';
import { Card } from '../styles/pages/Card';
import { normalizePrice } from '../utils';

import {AddCircle} from '@material-ui/icons';

function PurchasedProductCard({product}) {

    return (
        <Card>
            <div className="card">
                <img className="card-image" src={product.imageSrc} alt="img" />
                <div className="card-info">
                    <h3 className="card-info__name">Nome: {product.name}</h3>
                    <h5 className="card-info__price">Preço original: R$ {normalizePrice(product.originalPrice)}</h5>
                    <h5 className="card-info__price">Comprado por: R$ {normalizePrice(product.price)}</h5>
                    {
                        product.profitability && 
                        <h5 className="card-info__price">Rentabilidade: {product.profitability.toUpperCase()}</h5>
                    }
                    <h5 className="card-info__price">Quantidade: {product.quantity}</h5>
                    {
                        product.multiple &&
                        <h5 className="card-info__price">Apenas em múltiplos de: {product.multiple}</h5>
                    }
                </div>

            </div>
        </Card>
    )
}

export default PurchasedProductCard;
