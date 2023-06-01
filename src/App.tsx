import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const userAPI = () => {
    return new Promise<any>((resolve ,reject) => {
      return setTimeout(() => {
        resolve({name: 'Sanskruti'});
      }, 1000);
   })
 };

  const nonAsyn = () => {
    setTimeout(() => {
       console.log('from non asyn')
    },1000);
  }
 
 const getUserData = async () => {
  //const userData = await userAPI();
  //console.log('userData' ,userData)

  console.log('test before')
  nonAsyn()
  console.log('test after')
 }

  const [title , setTitle ] = useState('not change');
  useEffect( () => {
    getUserData()
    
  }, [])

  

return (
  <div>
    use effect {title}
  </div>

 );

}

export default App;
