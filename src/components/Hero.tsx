import { links } from '../config'
import { IconArrow } from '../icons'
import styles from './Hero.module.css'

const badges = [
  { label: 'Plano', highlight: '100% personalizado' },
  { label: 'Acompanhamento', highlight: 'de verdade' },
  { label: 'Feito pra', highlight: 'sua rotina real' },
]

const stats = [
  { num: '+200', label: 'pacientes' },
  { num: '98%', label: 'satisfação' },
  { num: '5⭐', label: 'avaliação' },
]

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.wrap}>
        <div className={styles.content}>
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

        <div className={styles.visual}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
              alt="Alimentação saudável e colorida"
              className={styles.image}
            />
            <div className={styles.imageBadge}>
              🥗 Alimentos reais, sem restrição excessiva
            </div>
          </div>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.num} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
