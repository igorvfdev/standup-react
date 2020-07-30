import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroHumorista (){
    return(
        <PageDefault>
            <h1>Cadastro de humorista</h1>

            
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
     )
}

export default CadastroHumorista;