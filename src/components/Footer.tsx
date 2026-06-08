import { config, links } from '../config'
import { IconInstagram, IconWhatsApp } from '../icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <strong>{config.name}</strong> — Nutrição personalizada que cabe na sua
        vida
      </p>
      <div className={styles.links}>
        <a
          href={links.whatsapp('Oi!')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <IconWhatsApp size={16} />
          WhatsApp
        </a>
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <IconInstagram size={16} />
          @{config.instagram}
        </a>
      </div>
      <p className={styles.copy}>
        Nutricionista · {config.crn} · Resultados variam de pessoa pra pessoa.
        <br />© {new Date().getFullYear()} {config.name}. Todos os direitos
        reservados.
      </p>
    </footer>
  )
}
