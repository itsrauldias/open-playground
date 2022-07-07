import { useState } from 'react';
import { Link } from 'react-router-dom';

import QrCodeGenerator from '../../Components/QrCodeGenerator';
import logo from '../../favicon.png'

export function Home() {

    const [qrCode] = useState('https://github.com/itsrauldias')

    return (
        <>
            <div>
                <h3><i className='fa fa-rocket' /> Open playground</h3>
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
        </>
    )
}

export function Menu() {

    return (
        <>
            <h3>Menu</h3>
            <i className='fa fa-caret-right' /> <span><Link to={'/open-playground'}>Home</Link></span>
            <br /><br />
            <i className='fa fa-caret-right' /> <span><Link to={'/open-playground/menu/componentes'}>Componentes</Link></span>
        </>
    )
}

export function Componentes() {

    return (
        <>
            <h3>Componentes</h3>
            <Link to={'/open-playground/menu'}><span className="btn"><i className='fa fa-caret-left' /> Voltar</span></Link>
            <br /><br /><br /><br />
            <div className="main-content">
                <span className='btn'><i className='fa fa-qrcode' /> <Link to={'/open-playground/componentes/qrCodeGenerator'}>QrCodeGenerator</Link></span>
                <span className='btn'><i className='fa-brands fa-whatsapp' /> <Link to={'/open-playground/componentes/whatsappMessageSender'}>Whatsapp MessageSender</Link></span>
            </div>

        </>
    )
}