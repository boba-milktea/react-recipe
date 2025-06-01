import Footer from './Footer';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="grow py-4 px-4 md:px-8 lg:px-16">
        {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
