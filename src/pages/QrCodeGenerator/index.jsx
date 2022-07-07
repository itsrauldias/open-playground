import { useState } from 'react';
import { Link } from 'react-router-dom';

import QrCodeGeneratorC from '../../Components/QrCodeGenerator';

export function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('https://github.com/itsrauldias')
    const [loading, setLoading] = useState(false);

    async function reloadQrCode() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    return (
        <>
            <h3>Qr Code Generator</h3>
            <Link to={'/open-playground/menu/componentes'}><span className="btn"><i className='fa fa-caret-left' /> Voltar</span></Link>
            <br /><br />
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="text" value={qrCode} onChange={(e) => setQrCode(e.target.value)} style={{ width: '80%' }} />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn" onClick={reloadQrCode}>
                        <i className="fa fa-qrcode" /> Gerar Qr Code
                    </button>
                </div>
            </div>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        loading ?
                            <i className="fa fa-circle-notch fa-spin" />
                            :
                            <QrCodeGeneratorC
                                text={qrCode}
                                // width={100}
                                // height={100}
                                colorDark='black'
                                // logo={logo}
                                logoBackgroundTransparent={true}
                            />
                    }
                </div>
                <br />  
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <b>{qrCode}</b>
                </div>
            </div>
        </>
    )
}