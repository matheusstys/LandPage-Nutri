import { links } from '../config'
import { IconArrow } from '../icons'
import styles from './Hero.module.css'

const badges = [
  { label: 'Plano', highlight: '100% personalizado' },
  { label: 'Acompanhamento', highlight: 'de verdade' },
  { label: 'Feito pra', highlight: 'sua rotina real' },
]

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>Acompanhamento nutricional personalizado</p>
        <h1 className={styles.heading}>
          Você não precisa de outra dieta. Precisa de um plano que <em>dura.</em>
        </h1>
        <p className={styles.sub}>
          Eu monto um plano alimentar feito pra sua rotina, seu paladar e seus
          objetivos — sem cardápio impossível de seguir e sem cortar tudo que
          você gosta.
        </p>
        <div className={styles.badges}>
          {badges.map((b) => (
            <div key={b.highlight} className={styles.badge}>
              {b.label} <strong>{b.highlight}</strong>
            </div>
          ))}
        </div>
        <a
          href={links.whatsapp('Oi! Quero um plano alimentar que funcione pra mim.')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Quero meu plano personalizado <IconArrow />
        </a>
        <p className={styles.micro}>
          Primeira conversa sem compromisso · Resposta em até 1h
        </p>
      </div>
    </header>
  )
}
