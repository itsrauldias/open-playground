import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import QrCodeGenerator from '../../Components/QrCodeGenerator';
import logo from '../../favicon.png'

import { get } from '../../services/dogApi';
import { errorToast } from '../../Components/SimpleToast';

export function Home() {

    const [qrCode] = useState('https://github.com/itsrauldias')
    const [dogFact, setDogFact] = useState(null);

    useEffect(() => {
        errorToast('Falha ao buscar orçamentos');

        const getDogFact = async () => {
            const response = await get();
            setDogFact(response.facts);
        }
        getDogFact();
    }, [dogFact]);

    return (
        <>
            <div>
                <h3><Link to={'/open-playground/menu'}><i className='fa fa-rocket' /> Open playground</Link></h3>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h3>{qrCode}</h3>
                <QrCodeGenerator
                    text={qrCode}
                    // width={100}
                    // height={100}
                    colorDark='black'
                    logo={logo}
                    logoBackgroundTransparent={true}
                />
            </div>
            {
                dogFact &&
                <div className='card'>
                    <p style={{textAlign: 'right'}}>
                        <cite>{dogFact}</cite>
                        <br />
                        <small>by: <a href="https://kinduff.github.io/dog-api/">Dog API</a>.</small>
                    </p>
                </div>
            }
        </>
    )
}

export function Menu() {

    return (
        <>
            <h3>Menu</h3>
            <i className='fa fa-caret-right' /> <span><Link to={'/open-playground'}>Home</Link></span>
            <br /><br />
            <i className='fa fa-caret-right' /> <span><Link to={'/open-playground/menu/utilitarios'}>Utilitários</Link></span>
        </>
    )
}

export function Utilitarios() {

    return (
        <>
            <h3>Utilitários</h3>
            <Link to={'/open-playground/menu'}><i className='fa fa-caret-left' /> Voltar</Link>
            <div className="main-content" style={{ marginTop: '2rem' }}>
                <Link to={'/open-playground/utilitarios/qrCodeGenerator'}><button className='btn'><i className='fa fa-qrcode' /> QrCodeGenerator</button></Link>
                <Link to={'/open-playground/utilitarios/toDoApp'}><button className='btn'><i className='fa-solid fa-list-check' /> To Do App</button></Link>
                <Link to={'/open-playground/utilitarios/whatsappMessageSender'}><button className='btn'><i className='fa-brands fa-whatsapp' /> Whatsapp MessageSender</button></Link>
            </div>
        </>
    )
}