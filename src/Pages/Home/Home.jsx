import React from 'react';

import Workers from './../../Assets/workers.svg';
import Logo from './../../Assets/logo.png';
import Calendar from './../../Assets/calendar.svg';
import WomanWorking from './../../Assets/woman-working.svg';

import './Home.css';

const Home = () => {

    return (
        <React.Fragment>
            <div className='bg-landing min-vh-100'>
                <div className='container bg-header pt-2 pb-3 rounded-top rounded-pill'>
                    <div className="container d-flex flex-column align-items-center">
                        <img className='w-25' src={Logo} alt='Logo' />
                        <h1 className='title mb-0'>ATIVIDADES PRESENCIAIS</h1>
                    </div>
                </div>
                <div className='container text-center m-auto'>
                    <div className='container text-content'>
                        <div className="row">
                            <div className="col-md-6">
                                <img className='img-fluid' src={Workers} alt='Funcionários se cumprimentando.' />
                            </div>
                            <div className="col-md-5 pt-md-5 d-flex flex-column justify-content-between">
                                <p className='d-md-block d-none fs-4'>
                                    Agora você <span className='light-orange fst-italic'>#sanguelaranja</span> tem a <span className='light-orange'>opção</span> de trabalhar em nossos
                                    escritórios!
                                </p><p className='d-md-none d-block'>
                                    Agora você <span className='light-orange fst-italic'>#sanguelaranja</span> tem a <span className='light-orange'>opção</span> de trabalhar em nossos
                                    escritórios!
                                </p>
                                <div>
                                    <button className='bg-orange w-100 rounded-2 p-2' data-bs-toggle="modal" data-bs-target="#adviceModal">Realizar Agendamento</button>
                                    <div class="modal fade black text-start" id="adviceModal" tabindex="-1" aria-labelledby="adviceModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="adviceModalLabel">Sistema de Agendamento</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Em desenvolvimento.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Entendido</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <span className='label opacity-75'>todos os protocolos de segurança serão respeitados.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-3'>
                <div className="container">
                    <h1 className='orange'>O AGENDAMENTO</h1>
                    <div className="row text-md-center mt-4">
                        <div className='col-md-4 text-start'>
                            <h1 className='black'>1. ESCOLHER ESCRITÓRIO</h1>
                            <div className="">
                                <div className="card shadow-sm mb-2">
                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <div className='ms-4'>
                                            <h2 className='orange fw-800'>SÃO PAULO</h2>
                                            <p className='black text-content label'>
                                                Rua Bela Cintra, 986 <br />
                                                2º andar <br />
                                                Consolação, São Paulo - SP
                                            </p>
                                        </div>
                                        <div className='me-4 align-self-start'>
                                            <h3 className='purple fw-800'>sede</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm">
                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <div className='ms-4'>
                                            <h2 className='orange fw-800'>SANTOS</h2>
                                            <p className='black text-content label'>
                                                Praça dos Expedicionários, 19 <br />
                                                2º andar <br />
                                                Gonzaga, Santos - SP
                                            </p>
                                        </div>
                                        <div className='me-4 align-self-start'>
                                            <h3 className='purple fw-800'>filial</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-md-0 mt-4">
                            <h1 className='black'>2. SELECIONAR O DIA</h1>
                            <img className='img-fluid' src={Calendar} alt="Figura de mulher selecionando dia do calendário." />
                        </div>

                        <div className="col-md-4">
                            <h1 className="black">3. DEFINIR MESA</h1>
                            <img className='img-fluid' src={WomanWorking} alt="Figura de mulher trabalhando em uma mesa." />
                        </div>
                    </div>

                    <div className='col-12 text-md-center mt-md-3 border-top-purple'>
                        <h1 className='orange fw-800 mt-3'>E PRONTO!</h1>
                        <p className='black text-content fs-6'>sua <span className='purple'>estação de trabalho</span> está <span className='purple'>reservada</span>.</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Home;