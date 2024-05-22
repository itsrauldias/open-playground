import { Link } from 'react-router-dom';
import logo from '../../../favicon.png'

export function PushNotifications() {

    async function handleSendPush() {
        // alert('weee')

        if (!("Notification" in window)) {
            console.log("This browser does not support notifications.");
            return;
        }
        Notification.requestPermission().then((permission) => {
            // set the button to shown or hidden, depending on what the user answers
            // notificationBtn.style.display = permission === "granted" ? "none" : "block";
        })

        new Notification("Push!", { body: 'Você enviou uma notificação push!', icon: logo });
    }

    return (
        <>
            <h3>Notificação push</h3>
            <span>
                <Link to={'/open-playground/menu/utilitarios'}><i className='fa fa-caret-left' /> Voltar</Link>
            </span>
            <div className="card">
                <div className='tooltip'>
                    Info <i className='fa fa-info-circle' />
                    <span>
                        Envie notificações push do webapp para o dispositivo
                    </span>
                </div>
                <hr />
                <button className='btn' onClick={() => handleSendPush()}>Push!</button>
            </div>
        </>
    )
}