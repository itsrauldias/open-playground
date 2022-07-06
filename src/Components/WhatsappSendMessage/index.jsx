export default function WhatsappSendMessage(props) {

    return (
        <a href={`https://api.whatsapp.com/send?phone=${props.fone}&text=${props.mensagem}`} target="blank">
            <img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg" alt="Whatsapp" />
        </a>
    );
}