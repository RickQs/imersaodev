import React from 'react';

import Workers from './../../Assets/workers.svg';
import Logo from './../../Assets/logo.png';
import Header from './../../Assets/header.svg';

import './Home.css';

const Home = () => {

    return (
        <React.Fragment>                
            <div className='container bgHeader pt-2 pb-3'>
                <div className="container">
                    <img className='w-25' src={Logo} alt='Logo' />
                    <p className='title fw-bold fs-1 mb-0 text-center'>ATIVIDADES PRESENCIAIS</p>
                </div>
            </div>
            <div className='container bgLanding text-center'>
                <div className='container text-content'>
                    <img className='img-fluid' src={Workers} alt='Funcionários se cumprimentando' />
                    <p>
                        agora você <span className='orange'>#sanguelaranja</span> tem a
                        <span className='orange'> opção</span> de trabalhar em nossos
                        escritórios!
                    </p>
                    <input className='bgOrange w-100 rounded-2 p-2' type='button' value='Realizar Agendamento' />
                    <span className='label'>todos os protocolos serão respeitados.</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;