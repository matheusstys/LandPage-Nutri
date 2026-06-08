import { useReveal } from '../hooks/useReveal'
import styles from './Objecoes.module.css'

const faqs = [
  {
    q: '"Vou ter que cortar tudo que eu gosto?"',
    a: (
      <>
        Não. Um plano que proíbe tudo é exatamente o que faz você desistir.{' '}
        <strong>Eu monto algo em volta do que você gosta de comer</strong> — com
        equilíbrio, não com sofrimento.
      </>
    ),
  },
  {
    q: '"Minha rotina é uma loucura, não tenho tempo."',
    a: (
      <>
        Por isso o plano é feito pra sua rotina real — refeições práticas,
        opções pra quando você come fora e nada que dependa de você virar chef.{' '}
        <strong>Ele se encaixa na sua vida, não o contrário.</strong>
      </>
    ),
  },
  {
    q: '"Já tentei de tudo e sempre volto pro mesmo lugar."',
    a: (
      <>
        Porque quase tudo por aí é genérico e sem acompanhamento.{' '}
        <strong>Aqui a gente ajusta no caminho</strong> — é isso que muda o jogo
        no longo prazo.
      </>
    ),
  },
  {
    q: '"Tá caro."',
    a: (
      <>
        Caro é o ciclo de gastar com dieta da moda, app e suplemento que você
        abandona em semanas.{' '}
        <strong>Isto é investir na sua saúde com método</strong> — e parar de
        jogar dinheiro fora.
      </>
    ),
  },
  {
    q: '"Preciso treinar ou ir pra academia pra funcionar?"',
    a: (
      <>
        A alimentação é a base — ela funciona treinando ou não.{' '}
        <strong>O plano se adapta ao seu momento</strong>, e se você treina, a
        gente ajusta pra potencializar.
      </>
    ),
  },
]

export default function Objecoes() {
  const title = useReveal<HTMLHeadingElement>()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <p className={styles.eyebrow} style={{ textAlign: 'center' }}>
          Antes de você sair
        </p>
        <h2
          ref={title.ref}
          className={`${styles.heading} ${title.visible ? styles.visible : ''}`}
        >
          A real sobre as suas dúvidas
        </h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({
  q,
  a,
}: {
  q: string
  a: React.ReactNode
}) {
  const { ref, visible } = useReveal<HTMLDetailsElement>()

  return (
    <details
      ref={ref}
      className={`${styles.qa} ${visible ? styles.visible : ''}`}
    >
      <summary className={styles.summary}>
        {q}
        <span className={styles.icon}>+</span>
      </summary>
      <div className={styles.answer}>{a}</div>
    </details>
  )
}
