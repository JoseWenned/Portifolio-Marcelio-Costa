'use client';

import { motion } from 'framer-motion';

import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '@/animations/variants';

import styles from './about.module.scss';

export function About() {
  return (
    <section
      id="sobre"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className={styles.eyebrow}>
            Perfil profissional
          </span>

          <h2
            id="about-title"
            className={styles.title}
          >
            Experiência,
            <span> técnica </span>
            e evolução profissional.
          </h2>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <motion.div
            className={styles.text}
            variants={fadeLeft}
          >
            <p>
              Marcélio Costa Ribeiro é profissional com trajetória
              construída em diferentes atividades do setor de montagem
              e energia, com experiência em montagem de estruturas,
              montagem de estruturas eólicas e atividades relacionadas
              à área elétrica.
            </p>

            <p>
              Sua formação como Técnico em Mecânica complementa sua
              experiência prática e reforça seu perfil técnico,
              preparado para atuar com responsabilidade e atenção
              durante a execução das atividades.
            </p>

            <p>
              Em 2026, ampliou sua qualificação profissional com
              certificações nos cursos de Retroescavadeira e
              Pá Carregadeira, direcionando sua atuação também para
              a operação de máquinas pesadas.
            </p>
          </motion.div>

          <motion.div
            className={styles.info}
            variants={fadeRight}
          >
            <motion.div
              className={styles.infoCard}
              variants={fadeUp}
            >
              <span className={styles.number}>
                01
              </span>

              <div>
                <strong>
                  Técnico em Mecânica
                </strong>

                <p>
                  Formação técnica concluída em 2023.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              variants={fadeUp}
            >
              <span className={styles.number}>
                02
              </span>

              <div>
                <strong>
                  Retroescavadeira
                </strong>

                <p>
                  Curso certificado em 2026.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              variants={fadeUp}
            >
              <span className={styles.number}>
                03
              </span>

              <div>
                <strong>
                  Pá Carregadeira
                </strong>

                <p>
                  Curso certificado em 2026.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.bottomLine}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span>
            MARCÉLIO COSTA RIBEIRO
          </span>

          <span>
            TÉCNICA / EXPERIÊNCIA / QUALIFICAÇÃO
          </span>
        </motion.div>
      </div>
    </section>
  );
}