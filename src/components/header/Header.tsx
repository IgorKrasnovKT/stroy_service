import { memo } from 'react'
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '@/constants/routes';
import { Button } from 'primereact/button';

const Header = memo(() => {
  return (
    <header>
      <div className={styles.left_side}>
        <div className={styles.logo}>

        </div>
        <div className={styles.links}>
          <Link to={routes.about.path} className='link'>
            {routes.about.name}
          </Link>
          <Link to={routes.contact.path} className='link'>
            {routes.contact.name}
          </Link>
          <Link to={routes.products.path} className='link'>
            {routes.products.name}
          </Link>
        </div>
      </div>
      <div className={styles.right_side}>
        <Button size='small'>
          <Link to={routes.login.path}>
            {routes.login.name}
          </Link>
        </Button>
        <Button size='small'>
          <Link to={routes.signup.path}>
            {routes.signup.name}
          </Link>
        </Button>
      </div>

    </header>
  )
})

export default Header