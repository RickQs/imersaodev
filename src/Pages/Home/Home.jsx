import React from 'react';

import Workers from './../../Assets/workers.svg';
import Logo from './../../Assets/logo.png';

import './Home.css';

const Home = () => {

    return (
        <React.Fragment>
            <div className='bg-landing vh-100 d-flex flex-column'>
                <div className='container bg-header pt-2 pb-3'>
                    <div className="container">
                        <img className='w-25' src={Logo} alt='Logo' />
                        <p className='title fs-1 mb-0 text-center'>ATIVIDADES PRESENCIAIS</p>
                    </div>
                </div>
                <div className='container text-center m-auto'>
                    <div className='container text-content'>
                        <img className='img-fluid' src={Workers} alt='Funcionários se cumprimentando' />
                        <p>
                            agora você <span className='orange'>#sanguelaranja</span> tem a
                            <span className='orange'> opção</span> de trabalhar em nossos
                            escritórios!
                        </p>
                        <input className='bg-orange w-100 rounded-2 p-2' type='button' value='Realizar Agendamento' />
                        <span className='label'>todos os protocolos serão respeitados.</span>
                    </div>
                </div>
            </div>

            <div className='container mt-3'>
                <div className="container">
                    <h1 className='orange'>O AGENDAMENTO</h1>
                    <div className='mt-3'>
                        <h1 className='black'>1. ESCOLHER ESCRITÓRIO</h1>
                        <div className="d-flex flex-column w-100">
                            <div className="card shadow-sm mb-2">
                                <div className="d-flex align-items-center justify-content-evenly mt-3">
                                    <div>
                                        <h2 className='orange fw-800'>SÃO PAULO</h2>
                                        <p className='black text-content label'>
                                            Rua Bela Cintra, 986 <br />
                                            2º andar <br />
                                            Consolação, São Paulo - SP
                                        </p>
                                    </div>
                                    <div className='align-self-start'>
                                        <h3 className='purple fw-800'>sede</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-sm">
                                <div className="d-flex align-items-center justify-content-evenly mt-3">
                                    <div>
                                        <h2 className='orange fw-800'>SANTOS</h2>
                                        <p className='black text-content label'>
                                            Praça dos Expedicionários, 19 <br />
                                            2º andar <br />
                                            Gonzaga, Santos - SP
                                        </p>
                                    </div>
                                    <div className='align-self-start'>
                                        <h3 className='purple fw-800'>filial</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Home;