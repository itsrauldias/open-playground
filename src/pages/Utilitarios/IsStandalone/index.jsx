import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export function IsStandalone() {

    const [isStandalone, setIsStandalone] = useState(false);

    function verifyIsStandalone() {
        setIsStandalone(window.matchMedia("(display-mode: standalone)").matches)
    }

    useEffect(() => {
        verifyIsStandalone()
    }, [])

    return (
        <>
            <h3>Is Standalone?</h3>
            <span>
                <Link to={'/open-playground/menu/utilitarios'}><i className='fa fa-caret-left' /> Voltar</Link>
            </span>
            <div className="card">
                <div className='tooltip'>
                    Info <i className='fa fa-info-circle' />
                    <span>
                        Rotina de verificação de caso de aplicação rodando em modo "Standalone"
                    </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    isStandalone?
                    <br />
                    {
                        isStandalone ?
                            'True'
                            :
                            'False'
                    }
                </div>
            </div>
        </>
    )
}