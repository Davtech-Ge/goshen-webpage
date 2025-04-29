
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GoshenApi from './api';
import { setUserDetails } from './store/userSlice';
import { Context } from './context/context';
import { ToastContainer }from 'react-toastify'
import { useEffect } from 'react';


function App() {
//   const dispatch = useDispatch()
// const fetchUserDetails = async () => {
//       const fetchApi = await fetch(GoshenApi.currentuser.url, {
//         method : GoshenApi.currentuser.method,
//         credentials : 'include'
//       })

//       const response = await fetchApi.json()

//       if (response.success){
//         dispatch(setUserDetails(response))
//       }
// }

// useEffect(() => {
//   fetchUserDetails();
// }, [])

  return (
    <>
    <Context.Provider value={{
      // fetchUserDetails
    }} >
      <ToastContainer />
    <Header />
    <main className='min-h-[calc(100vh-120px)]  background'>
      <Outlet />
    </main>
    <Footer />
    </Context.Provider>
    </>
  );
}

export default App;
