import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <>
      <Navbar anything="Raju ki dukan"/>
      <div className="card">
        <Card pics="https://img.magnific.com/premium-photo/calming-aesthetic-wallpaper-featuring-dreamy-sky_537368-6958.jpg?semt=ais_test_b&w=740&q=80" tittle ="Card 1"  description="This one is a wishing Card"/>
        <Card pics="https://img.magnific.com/premium-photo/calming-aesthetic-wallpaper-featuring-dreamy-sky_537368-6958.jpg?semt=ais_test_b&w=740&q=80" tittle ="Card 1"  description="This one is a wishing Card"/>
        <Card pics="https://img.magnific.com/premium-photo/calming-aesthetic-wallpaper-featuring-dreamy-sky_537368-6958.jpg?semt=ais_test_b&w=740&q=80" tittle ="Card 1"  description="This one is a wishing Card"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
