import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from './utils/locationSlice';

function App() {
  const dispatch = useDispatch()
  // const city = useSelector(store => store.location.city)
  // useEffect(() => {
  //   localStorage.setItem('user-coordinates', JSON.stringify(city))
  // }, [])

  // useEffect(() => {
  //   const localCoordinates = localStorage.getItem('user-coordinates')
  //   if (localCoordinates) {
  //     const coordinates = JSON.parse(localCoordinates)
  //     dispatch(addLocation(coordinates))
  //   }
  // },[])

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
