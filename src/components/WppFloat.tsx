import { links } from '../config'
import { IconWhatsApp } from '../icons'
import styles from './WppFloat.module.css'

export default function WppFloat() {
  return (
    <a
      href={links.whatsapp('Oi! Quero saber mais sobre o acompanhamento nutricional.')}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsApp size={30} />
    </a>
  )
}
