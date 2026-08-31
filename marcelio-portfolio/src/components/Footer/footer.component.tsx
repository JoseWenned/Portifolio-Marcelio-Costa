'use client';

import { motion } from 'framer-motion';

import {
  fadeLeft,
  fadeRight,
  fadeUp,
} from '@/animations/variants';

import './footer.style.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-main"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
        >
          <motion.div
            className="footer-brand"
            variants={fadeLeft}
          >
            <a
              className="footer-logo"
              href="#inicio"
              aria-label="Voltar ao início"
            >
              MC<span>.</span>
            </a>

            <p className="footer-description">
              Profissional com experiência operação de retroesvadeiras, montagem,
              energia eólica e operações em campo.
            </p>
          </motion.div>

          <motion.nav
            className="footer-navigation"
            aria-label="Navegação do rodapé"
            variants={fadeUp}
          >
            <span className="footer-navigation-title">
              NAVEGAÇÃO
            </span>

            <a
              className="footer-navigation-link"
              href="#inicio"
            >
              Início
            </a>

            <a
              className="footer-navigation-link"
              href="#sobre"
            >
              Sobre
            </a>

            <a
              className="footer-navigation-link"
              href="#experiencia"
            >
              Experiência
            </a>

            <a
              className="footer-navigation-link"
              href="#formacao"
            >
              Formação
            </a>

            <a
              className="footer-navigation-link"
              href="#contato"
            >
              Contato
            </a>
          </motion.nav>

          <motion.div
            className="footer-contact"
            variants={fadeRight}
          >
            <span className="footer-contact-title">
              CONTATO
            </span>

            <a
              href="https://wa.me/+5588993123024"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              Entrar em contato
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
        >
          <span className="footer-copyright">
            © {new Date().getFullYear()} Marcélio Costa.
            Todos os direitos reservados.
          </span>

          <span className="footer-location">
            Ceará, Brasil
          </span>
        </motion.div>
      </div>
    </footer>
  );
}