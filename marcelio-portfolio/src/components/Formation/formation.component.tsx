'use client';

import { motion } from 'framer-motion';

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from '@/animations/variants';

import './formation.style.scss';

const formations = [
  {
    year: '2026',
    type: 'Certificação',
    title: 'Operador de Retroescavadeira',
    institution: 'PIOMAP Brasil',
  },
  {
    year: '2026',
    type: 'Certificação',
    title: 'Operador de Pá Carregadeira',
    institution: 'PIOMAP Brasil',
  },
  {
    year: '2023',
    type: 'Formação Técnica',
    title: 'Técnico em Mecânica',
    institution:
      'Conselho Federal dos Técnicos Industriais',
  },
  {
    year: '2023',
    type: 'Especialização',
    title: 'BTT',
    institution: 'Formação profissional',
  },
  {
    year: '2023',
    type: 'Especialização',
    title: 'BST',
    institution: 'Formação profissional',
  },
  {
    year: '2016',
    type: 'Formação',
    title: 'Ensino Médio',
    institution:
      'E.E. Governador Manoel de Castro Filho',
  },
];

export function Formation() {
  return (
    <section
      className="formation"
      id="formacao"
      aria-labelledby="formation-title"
    >
      <div className="container">
        <motion.header
          className="formation-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className="formation-eyebrow">
            FORMAÇÃO E CERTIFICAÇÕES
          </span>

          <h2
            id="formation-title"
            className="formation-title"
          >
            Conhecimento que fortalece a{' '}
            <span className="formation-title-highlight">
              experiência
            </span>
          </h2>

          <p className="formation-description">
            Formação técnica e certificações que complementam
            a experiência profissional construída ao longo da
            trajetória em campo.
          </p>
        </motion.header>

        <motion.div
          className="formation-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {formations.map((formation, index) => (
            <motion.article
              className="formation-item"
              key={`${formation.year}-${formation.title}-${index}`}
              variants={
                index % 2 === 0
                  ? fadeLeft
                  : fadeRight
              }
            >
              <motion.div
                className="formation-year"
                variants={fadeUp}
              >
                {formation.year}
              </motion.div>

              <motion.div
                className="formation-divider"
                variants={fadeUp}
              >
                <span className="formation-dot" />
              </motion.div>

              <motion.div
                className="formation-content"
                variants={fadeUp}
              >
                <span className="formation-type">
                  {formation.type}
                </span>

                <h3 className="formation-item-title">
                  {formation.title}
                </h3>

                <p className="formation-institution">
                  {formation.institution}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}