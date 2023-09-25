import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

const HeroSection = () => {
  return (
    <div className='h-[calc(100vh-80px)]'>
      <Container className='flex h-full'>
        <div className='flex h-full flex-1 flex-col justify-center'>
          <h1 className='text-6xl font-bold leading-none'>
            Premium Cars.
            <br /> Enjoy the <span className='text-primary'>Luxury</span>
          </h1>
          <h2 className='mt-4 text-2xl text-muted-foreground'>
            Discover a world of luxury on wheels and elevate your travel
            experience with us.
          </h2>
          <div className='mt-4 flex gap-2'>
            {/* <Link
              href='/'
              className="h-[40px] w-[135px] bg-[url('/images/icon-download-android.svg')]"
            ></Link>
            <Link
              href='/'
              className="h-[40px] w-[135px] bg-[url('/images/icon-download-ios.svg')]"
            ></Link>
            <Link
              href='/'
              className="h-[40px] w-[135px] bg-[url('/images/icon-download-huawei.svg')] bg-cover"
            ></Link> */}
            <Button variant='subtle'>Booking Now</Button>
          </div>
        </div>
        <div className='w-full flex-1'>
          <div className='relative  h-full'>
            <Image
              style={{ objectFit: 'contain' }}
              src='/images/hero.png'
              alt='hero'
              fill
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
