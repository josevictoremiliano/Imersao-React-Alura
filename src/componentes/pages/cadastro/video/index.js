import React from 'react'
import {Link} from 'react-router-dom'
import PageDafoult from '../../../PageDefault'

function CadastroVideo (){
    return(
        <PageDafoult>
            <h1>Cadestre seu vídeo</h1>
        
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDafoult>
    )
}

export default CadastroVideo