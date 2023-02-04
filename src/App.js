import Sidebar from './components/SideBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <>
      <ScrollUp />
      <div className='flex'>
        <div className='hidden lg:block'>
        <Sidebar />
        </div>
        <div className='lg:basis-4/5 mx-auto w-full'>
        <MainContent />
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
