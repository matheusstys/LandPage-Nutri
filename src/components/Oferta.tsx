import { links } from '../config'
import { useReveal } from '../hooks/useReveal'
import { IconArrow, IconCheck } from '../icons'
import styles from './Oferta.module.css'

const items = [
  'Avaliação completa da sua rotina, histórico e objetivos',
  'Plano alimentar 100% personalizado — feito pro seu dia a dia',
  'Lista de substituições pra você nunca ficar sem opção',
  'Ajustes sempre que precisar, sem custo extra',
  'Suporte direto comigo pelo WhatsApp',
  <>Estratégias pra <strong>manter o resultado</strong> — sem efeito sanfona</>,
]

export default function Oferta() {
  const header = useReveal()
  const card = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div
          ref={header.ref}
          className={`${styles.header} ${header.visible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>A oferta</p>
          <h2 className={styles.heading}>
            Tudo que você precisa pra comer bem sem sofrer.
          </h2>
          <p className={styles.sub}>Um acompanhamento. Sem letra miúda.</p>
        </div>

        <div
          ref={card.ref}
          className={`${styles.card} ${card.visible ? styles.visible : ''}`}
        >
          <p className={styles.planName}>Acompanhamento Completo</p>
          <p className={styles.planSub}>
            Do plano à manutenção, comigo do seu lado o tempo todo.
          </p>
          <p className={styles.anchor}>Consultas avulsas saem bem mais caro</p>
          <p className={styles.price}>
            R$ 297 <small>/mês</small>
          </p>
          <p className={styles.priceNote}>
            Vagas limitadas pra garantir acompanhamento de verdade.
          </p>
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check}>
                  <IconCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={links.whatsapp('Quero começar meu acompanhamento nutricional.')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Quero começar agora <IconArrow />
          </a>
        </div>

        <p
          className={`${styles.compare} ${card.visible ? styles.visible : ''}`}
        >
          Some quanto você já gastou em dietas da moda, apps e produtos
          "milagrosos" que não duraram.{' '}
          <strong>Isto aqui é o que faz você parar de gastar à toa.</strong>
        </p>
      </div>
    </section>
  )
}
