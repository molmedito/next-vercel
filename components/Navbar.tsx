import { useId } from 'react';
import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map((item, index) => {
          const _id = `menu_item-${index}`;
          
          return (
            <ActiveLink key={_id} text={item.text} href={item.href} />
          )
        })
      }
    </nav>
  )
}

export default Navbar