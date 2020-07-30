import React from 'react'
import {Link} from 'react-router-dom'
import PageDafoult from '../../../PageDefault'

function CadastroCategoria (){
    return(
        <PageDafoult>
            <h1>Cadestro categoria</h1>
        
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
            
        </PageDafoult>
    )
}

export default CadastroCategoria