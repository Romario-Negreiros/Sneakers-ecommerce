'use client'

import { useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Cart } from '..'

import styles from './styles.module.css'

import type { MouseEvent } from 'react'

type MenuActions = 'add' | 'remove'

const Header = () => {
  const navRef = useRef<HTMLElement>(null)

  const handleMenu = (
    ev: MouseEvent<HTMLButtonElement>,
    action: MenuActions
  ) => {
    ev.preventDefault()
    if (navRef.current !== null) {
      navRef.current.classList[action](styles.navigationActive)
    }
  }

  return (
    <header className={styles.container}>
      <div>
        <div className={styles.logoMenuContainer}>
          <div className={styles.openBtn}>
            <button
              onClick={ev => {
                handleMenu(ev, 'add')
              }}
            >
              <Image alt="Open menu" src="/icons/icon-menu.svg" fill />
            </button>
          </div>
          <div>
            <Image alt="Sneaking logo" src="/logo.svg" fill />
          </div>
        </div>
        <nav className={styles.navigation} ref={navRef}>
          <div>
            <div className={styles.closeBtn}>
              <button
                onClick={ev => {
                  handleMenu(ev, 'remove')
                }}
              >
                <Image alt="Close menu" src="/icons/icon-close.svg" fill />
              </button>
            </div>
            <ul>
              <li>
                <Link href="">Collections</Link>
              </li>
              <li>
                <Link href="">Men</Link>
              </li>
              <li>
                <Link href="">Women</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.actionsContainer}>
          <div>
            <button>
              <Cart />
            </button>
          </div>
          <div>
            <Link href="">
              <Image alt="Go to your profile" src="/image-avatar.png" fill />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
