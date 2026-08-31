'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import profile from '../../assets/profile/profile.jpeg';

import {
  fadeUp,
  fadeRight,
  staggerContainer,
  scaleIn,
} from '@/animations/variants';

import styles from '../Hero/hero.module.scss';

export function Hero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div
        className={styles.backgroundGrid}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className="container">
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className={styles.eyebrow}
              variants={fadeUp}
            >
              Profissional especializado
            </motion.span>

            <motion.h1
              id="hero-title"
              className={styles.title}
              variants={fadeUp}
            >
              Operador de
              <span className={styles.titleHighlight}>
                Retroescavadeiras
              </span>
            </motion.h1>

            <motion.p
              className={styles.description}
              variants={fadeUp}
            >
              profissional com experiência em montagem de
              estruturas e atuação no setor de energia.
            </motion.p>

            <motion.div
              className={styles.actions}
              variants={fadeUp}
            >
              <motion.a
                href="https://wa.me/+5588993123024"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Entrar em contato</span>

                <span
                  className={styles.buttonArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </motion.a>

              <motion.a
                href="#experiencia"
                className={styles.secondaryButton}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver experiência
              </motion.a>

              <motion.a
                href="/docs/curriculo.pdf"
                download="curriculo.pdf"
                className={styles.secondaryButton}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Baixar currículo</span>

                <span
                  className={styles.buttonArrow}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <motion.div
              className={styles.visualAccent}
              variants={scaleIn}
            />

            <motion.div
              className={styles.visualCard}
              variants={scaleIn}
            >
              <div className={styles.visualHeader}>
                <span className={styles.visualLabel}>
                  MARCÉLIO COSTA RIBEIRO
                </span>

                <span className={styles.visualStatus}>
                  01
                </span>
              </div>

              <div className={styles.visualMain}>
                <Image
                  src={profile}
                  alt="Marcélio Costa Ribeiro"
                  fill
                  priority
                  sizes="(max-width: 639px) 82vw, (max-width: 767px) 55vw, 35vw"
                  className={styles.profileImage}
                />
              </div>

              <div className={styles.visualFooter}>
                <span>OPERAÇÃO</span>
                <span>PRECISÃO</span>
                <span>EXPERIÊNCIA</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        className={styles.scrollIndicator}
        aria-label="Ir para seção sobre"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className={styles.scrollLabel}>
          Scroll
        </span>

        <span
          className={styles.scrollLine}
          aria-hidden="true"
        />
      </motion.a>
    </section>
  );
}