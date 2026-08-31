'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from '../Header/header.module.scss';

import {
  fadeIn,
  fadeUp,
  fadeRight,
  staggerContainer,
  scaleIn,
} from '@/animations/variants';

const navigation = [
  {
    label: 'Sobre',
    href: '#sobre',
  },
  {
    label: 'Experiência',
    href: '#experiencia',
  },
  {
    label: 'Certificações',
    href: '#formacao',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen((current) => !current);
  }

  function handleNavigationClick() {
    setMenuOpen(false);
  }

  return (
    <motion.header
      className={styles.header}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <nav
          className={styles.navigation}
          aria-label="Navegação principal"
        >
          <motion.a
            href="/"
            className={styles.logo}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            MARCÉLIO
            <span className={styles.logoHighlight}>.</span>
          </motion.a>

          <motion.div
            className={styles.desktopNavigation}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navigation.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={styles.navigationLink}
                variants={fadeUp}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            type="button"
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonActive : ''
            }`}
            onClick={handleMenuToggle}
            aria-label={
              menuOpen ? 'Fechar menu' : 'Abrir menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className={styles.mobileNavigation}
            initial={{
              opacity: 0,
              y: -16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >
            <div className="container">
              <motion.div
                className={styles.mobileNavigationContent}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className={styles.mobileNavigationLabel}
                  variants={fadeUp}
                >
                  Navegação
                </motion.span>

                <motion.div
                  className={styles.mobileNavigationLinks}
                  variants={staggerContainer}
                >
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className={styles.mobileNavigationLink}
                      onClick={handleNavigationClick}
                      variants={fadeRight}
                    >
                      <span
                        className={
                          styles.mobileNavigationNumber
                        }
                      >
                        0{index + 1}
                      </span>

                      <span>{item.label}</span>

                      <span
                        className={
                          styles.mobileNavigationArrow
                        }
                      >
                        ↗
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}