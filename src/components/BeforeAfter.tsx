import { useReveal } from '../hooks/useReveal'
import styles from './BeforeAfter.module.css'

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
            <span className={styles.tag}>Antes</span>
            <div className={styles.content}>
              <p className={styles.big}>Dieta genérica</p>
              <p className={styles.small}>
                Restritiva, cheia de comida que você odeia e impossível de
                manter. Você larga em duas semanas.
              </p>
            </div>
          </div>
          <div className={`${styles.mock} ${styles.good}`}>
            <span className={styles.tag}>Depois</span>
            <div className={styles.content}>
              <p className={styles.big}>Plano sob medida</p>
              <p className={styles.small}>
                Pensado pra sua rotina e seu paladar. Sustentável — e é por isso
                que funciona.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
