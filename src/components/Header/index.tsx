import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <button>
            <Image alt="Open menu" src="/icon-menu.svg" fill />
          </button>
        </div>
        <div>
          <Image alt="Sneaking logo" src="/logo.svg" fill />
        </div>
      </div>
      <nav>
        <div>
          <button>
            <Image alt="Close menu" src="/icon-close.svg" fill />
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
      </nav>
      <div>
        <div>
          <button>
            <Image alt="Go to cart" src="/icon-cart.svg" fill />
          </button>
        </div>
        <div>
          <Image alt="Go to your profile" src="/image-avatar.png" fill />
        </div>
      </div>
    </header>
  )
}
