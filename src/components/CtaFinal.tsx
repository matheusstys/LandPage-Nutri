import { links } from '../config'
import { useReveal } from '../hooks/useReveal'
import { IconArrow } from '../icons'
import styles from './CtaFinal.module.css'

export default function CtaFinal() {
  const { ref, visible } = useReveal()

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden />
      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <p className={styles.eyebrow}>Última coisa</p>
        <h2 className={styles.heading}>
          Daqui a um mês, você vai desejar ter <em>começado hoje.</em>
        </h2>
        <p className={styles.text}>
          Você já sabe que precisa mudar. A diferença é fazer isso com um plano
          feito pra você e alguém do seu lado pra ajustar o caminho. O primeiro
          passo é só uma conversa.
        </p>
        <a
          href={links.whatsapp('Quero começar agora')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Quero começar agora <IconArrow />
        </a>
      </div>
    </section>
  )
}
