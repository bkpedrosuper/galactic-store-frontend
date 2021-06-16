import React from 'react';
import { Card } from '../styles/pages/Card';
import {AddCircle} from '@material-ui/icons';

function CostumerCard({costumer}) {

    return (
        <Card>
            <div className="card">
                <img className="card-image" src={costumer.imageSrc} alt="img" />
                <div className="card-info">
                    <h3 className="card-info__name">Nome: {costumer.name}</h3>
                    <h5 className="card-info__name">Email: {costumer.email}</h5>
                </div>

                <div className="buyout">
                    Clique no card para emitir um pedido com este cliente <AddCircle color="secondary"/>
                </div>
            </div>
        </Card>
    )
}

export default CostumerCard;
