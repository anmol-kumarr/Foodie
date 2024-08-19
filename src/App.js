import './App.css';
import {RouterProvider } from 'react-router-dom';
import routes from './routes/route';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addLocation } from './utils/locationSlice';


function App() {
  const city = useSelector(store => store.location)
  const dispatch = useDispatch()
  useEffect(() => {
    const city = localStorage.getItem('user-city')
    const data = JSON.parse(city)
    if (city) dispatch(addLocation(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('user-city', JSON.stringify(city))
  }, [city])


  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
