import { Link } from 'react-router-dom';

export function QrCodeGenerator() {

    return (
        <>
            <h3>Qr Code Generator</h3>
            <Link to={'/open-playground/menu/componentes'}><span className="btn"><i className='fa fa-caret-left' /> Voltar</span></Link>
            <br /><br />
            <div className="card">
                <h3>card-title</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia soluta illo, animi perspiciatis architecto ratione ea dicta amet magnam esse cupiditate eaque perferendis quasi assumenda debitis facilis aspernatur hic?</p>
            </div>
        </>
    )
}