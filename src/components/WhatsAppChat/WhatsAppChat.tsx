import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './WhatsAppChat.module.scss';

function WhatsAppChat() {
  return (
    <a
      aria-label='Chat on WhatsApp'
      href='https://wa.me/+381621395380'
      target='_blank'
      className={styles.whatsAppChatBtn}
      rel='noreferrer'
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}

export default WhatsAppChat;
