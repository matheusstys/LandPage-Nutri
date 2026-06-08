import { useReveal } from '../hooks/useReveal'
import styles from './Processo.module.css'

const steps = [
  {
    num: '01',
    icon: '📋',
    when: 'Hoje',
    title: 'Avaliação inicial',
    desc: 'Conversamos sobre sua rotina, seu histórico, seus objetivos e o que você já tentou. Sem julgamento.',
  },
  {
    num: '02',
    icon: '🥗',
    when: 'Primeiros dias',
    title: 'Plano personalizado',
    desc: 'Monto seu plano alimentar com base na sua realidade: seus horários, seu orçamento e o que você gosta de comer.',
  },
  {
    num: '03',
    icon: '💬',
    when: 'No dia a dia',
    title: 'Acompanhamento',
    desc: 'Ajustamos o plano conforme a vida acontece. Você não fica sozinho(a) com um PDF na gaveta.',
  },
  {
    num: '04',
    icon: '✨',
    when: 'Semana após semana',
    title: 'Resultado que fica',
    desc: 'Hábitos que se sustentam sozinhos, no seu ritmo — sem efeito sanfona.',
  },
]

export default function Processo() {
  const header = useReveal()
  const grid = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          ref={header.ref}
          className={`${styles.header} ${header.visible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>Como funciona</p>
          <h2 className={styles.heading}>Do primeiro papo ao seu plano na mão.</h2>
          <p className={styles.lead}>
            Um processo simples, sem julgamento e sem promessa milagrosa.
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`${styles.grid} ${grid.visible ? styles.visible : ''}`}
        >
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepTop}>
                <p className={styles.stepNum}>{step.num}</p>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>
              <span className={styles.stepWhen}>{step.when}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
