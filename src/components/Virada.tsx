import { useReveal } from '../hooks/useReveal'
import styles from './Virada.module.css'

export default function Virada() {
  const { ref, visible } = useReveal()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>Agora pensa assim</p>
        <h2 className={styles.heading}>
          O que falhou não foi você. Foi <em>o método.</em>
        </h2>
        <p className={styles.text}>
          Mudar de verdade não é sobre ter mais disciplina nem sofrer mais.{' '}
          <strong>
            É sobre ter um plano construído em volta da sua vida — e não contra
            ela.
          </strong>
        </p>
      </div>
    </section>
  )
}
