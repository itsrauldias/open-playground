import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsappSendMessage from '../../Components/WhatsappSendMessage';

export function WhatsappMessageSender() {

    const [numero, setNumero] = useState(996453366);
    const [ddd, setDdd] = useState(65);
    const [mensagem, setMensagem] = useState('Digite a sua mensagem aqui.');

    return (
        <>
            <h3>Whatsapp Message Sender</h3>
            <Link to={'/open-playground/menu/componentes'}><span className="btn"><i className='fa fa-caret-left' /> Voltar</span></Link>
            <br /><br />
            <div className="card">  
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="number" name="Fone" value={ddd} onChange={(e) => setDdd(e.target.value)} style={{ maxWidth: '10%', textAlign: 'center', fontSize: '24px' }} />
                    &nbsp;
                    <input type="number" name="Fone" value={numero} onChange={(e) => setNumero(e.target.value)} style={{ maxWidth: '40%', textAlign: 'center', fontSize: '24px' }} />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows={10} cols={40} />
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <i className="fa fa-arrow-right" />
                    &nbsp;
                    <WhatsappSendMessage
                        fone={"55" + ddd + numero}
                        mensagem={window.encodeURIComponent(mensagem)}
                    />
                    &nbsp;
                    <i className="fa fa-arrow-left" />
                </div>
            </div>
        </>
    )
}