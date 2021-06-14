import React from 'react';
import { Card } from '../styles/pages/Card';
import {AddCircle} from '@material-ui/icons';
import Link from 'next/link';

function PurchaseCard({purchase}) {

    return (
        <Link href={{
            pathname: '/purchases/view',
            query: { purchase_id: purchase.id },
        }}>
            <Card>
                <div className="card">
                    <img className="card-image" src={purchase.costumer.imageSrc} alt="img" />
                    <div className="card-info">
                        <h3 className="card-info__name">Emitido por: {purchase.costumer.name}</h3>
                        <h5 className="card-info__name">Email: {purchase.costumer.email}</h5>
                    </div>
                    <div className="buyout">
                        Clique no card para ver detalhes <AddCircle color="secondary"/>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default PurchaseCard;
