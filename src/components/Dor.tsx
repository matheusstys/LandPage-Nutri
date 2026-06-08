import { useReveal } from '../hooks/useReveal'
import styles from './Dor.module.css'

export default function Dor() {
  const { ref, visible } = useReveal()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>O problema</p>
        <h2 className={styles.heading}>
          Você já sabe o que comer. O difícil é manter isso na vida real.
        </h2>
        <p>
          Você conhece esse ciclo: começa a dieta na segunda, firme. Os
          primeiros dias vão bem. Aí vem a semana corrida, o jantar fora, o
          cansaço — e em poucos dias tudo desmorona. Você se culpa, acha que é
          falta de força de vontade e jura recomeçar… na próxima segunda.{' '}
          <span className={styles.highlight}>De novo.</span>
        </p>
        <p>
          O problema não é você. É que cardápio genérico ignora a sua rotina,
          os seus horários e o que você realmente gosta de comer. Um plano que
          você não consegue seguir não é um plano — é só uma contagem regressiva
          até desistir.
        </p>
      </div>
    </section>
  )
}
