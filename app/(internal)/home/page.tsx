import { WelcomeCard } from '@/components/cards/welcomeCard';
import { ZoomIcon } from '@/components/icons/zoomIcon';
import { DataContainer } from '@/components/layout/dataContainer';
import MapImage from '@/images/festival-map.svg';
import HeaderImage from '@/images/header.png';
import MasterclassImage from '@/images/masterclass.png';
import ProductsImage from '@/images/products.png';
import ScheduleImage from '@/images/schedule.png';
import WhatsOnImage from '@/images/whats-on.png';
import WishlistImage from '@/images/wishlist.png';
import { isWelcomed } from '@/lib/auth';
import Image from 'next/image';
import { Footer } from './footer';
import { MenuItem } from './menuItem';

export default async function Home() {
  const showWelcome = !(await isWelcomed());

  return (
    <div>
      <Image src={HeaderImage} alt="header" priority />

      {showWelcome && (
        <DataContainer className="px-12">
          <WelcomeCard />
        </DataContainer>
      )}

      <MenuItem
        text="Festival Map"
        align="left"
        colours={['red', 'green', 'brown']}
        href="/map"
        image={MapImage}
        icon={<ZoomIcon />}
      />

      <MenuItem
        text="What’s On"
        align="right"
        colours={['brown', 'green', 'red']}
        image={WhatsOnImage}
        href="/whats-on"
      />

      <MenuItem
        text="My Schedule"
        align="left"
        colours={['green', 'brown', 'red']}
        image={ScheduleImage}
        href="/schedule"
      />

      <MenuItem
        text="Masterclass"
        align="right"
        colours={['red', 'brown', 'green']}
        image={MasterclassImage}
        href="/masterclasses"
      />

      <MenuItem
        text="My Wishlist"
        align="left"
        colours={['red', 'green', 'brown']}
        image={WishlistImage}
        href="/wishlist"
      />

      <MenuItem
        text="Products"
        align="right"
        colours={['red', 'green', 'brown']}
        image={ProductsImage}
        href="/products"
      />

      <Footer />
    </div>
  );
}
