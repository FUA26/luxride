import Link from 'next/link';

import { menuConfig } from '@/constant/siteconfig';

import MenuItem from './menu-item';
import { Button } from '../ui/button';
import Container from '../ui/container';
import { Icons } from '../ui/icons';

const Header = () => {
  return (
    <header className='bg-backgroundpx-6  w-full '>
      <Container>
        <div className='flex'>
          <div className='flex h-20 w-full items-center'>
            <Icons.logo className='h-6 text-primary' />
          </div>
          <nav>
            <ul className='flex h-20 w-full items-center gap-2'>
              {menuConfig.map((menuItem, index) => (
                <li key={index}>
                  <MenuItem title={menuItem.title} path={menuItem.path} />
                </li>
              ))}
              <Link href='/'>
                <Button variant='outline' className='w-max'>
                  Log In
                </Button>
              </Link>
              <Link href='/' className='w-max'>
                <Button>Sing Up</Button>
              </Link>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
