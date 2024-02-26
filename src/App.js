import './App.css';
import reviews from './data';
import Testimonials from './componants/Testimonials';

function App() {
  return (
   <div className='AppDiv'>

      <div className='AppMain'>
        <h1 className='top-Hading'> Our Testimonials </h1>
        <Testimonials ReviewsData={reviews} ></Testimonials>
      </div>

   </div>
  );
}

export default App;