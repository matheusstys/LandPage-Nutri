import { useReveal } from '../hooks/useReveal'
import styles from './BeforeAfter.module.css'

const badItems = [
  'Cardápio genérico sem personalização',
  'Proibições que te fazem desistir',
  'Zero suporte no dia a dia',
  'Efeito sanfona garantido',
]

const goodItems = [
  'Montado pra sua rotina e paladar',
  'Come o que gosta com equilíbrio',
  'Acompanhamento real, semana a semana',
  'Resultado sustentável de verdade',
]

export default function BeforeAfter() {
  const header = useReveal()
  const grid = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          ref={header.ref}
          className={`${styles.header} ${header.visible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>A diferença</p>
          <h2 className={styles.heading}>
            Mesma pessoa. Abordagem oposta. Resultado oposto.
          </h2>
          <p className={styles.lead}>
            À esquerda, a dieta genérica que te faz desistir em duas semanas. À
            direita, o plano sob medida que vira hábito.{' '}
            <strong>A diferença está em como ele é construído.</strong>
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} ${grid.visible ? styles.visible : ''}`}
        >
          <div className={`${styles.mock} ${styles.bad}`}>
            <div className={styles.cardHeader}>
              <span className={styles.tag}>Antes</span>
              <span className={styles.cardIcon}>😞</span>
            </div>
            <p className={styles.big}>Dieta restritiva</p>
            <p className={styles.small}>
              Cheia de regras impossíveis. Você tenta, sofre e larga em semanas.
            </p>
            <ul className={styles.list}>
              {badItems.map((item) => (
                <li key={item} className={styles.crossItem}>
                  <span className={styles.crossIcon}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.mock} ${styles.good}`}>
            <div className={styles.cardHeader}>
              <span className={styles.tag}>Depois</span>
              <span className={styles.cardIcon}>🥗</span>
            </div>
            <p className={styles.big}>Plano sob medida</p>
            <p className={styles.small}>
              Pensado pra sua rotina e seu paladar. Sustentável — é por isso que funciona.
            </p>
            <ul className={styles.list}>
              {goodItems.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
