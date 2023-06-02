import React, { useEffect, useState } from 'react';


function EffectLogic() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);


  const [title , setTitle ] = useState('no change');
  const userNameApi =  () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
        resolve({name: 'arc'});
      }, 1000);
  })
  };

  useEffect(() => {
    if(isLoading){
      console.log('from useEffect is loading ',isLoading)
    }

    if(isError){
      console.log('from useEffect Error State ',isError)
    }

  }, [isLoading, isError]);

  useEffect( () => {
    getUserName()
  }, [])

const getUserName = async () => {
 

  // console.log('test before')
  const userData = await userNameApi().catch((err) => {console.log('err',err)});
  
    // console.log('userData',userData)
    const { name } = userData;
    setTitle(name)

    // console.log('test after res')
}



const changeErrorState = () => {
  const isErrorNew = !isError;
  setIsError(isErrorNew)

}


  const changeLoadingState = () => {
    const loadingState = !isLoading;
    setIsLoading(loadingState)
  }


  return (
   <div>
     use effect {title} 
     <br />
     {isLoading ? '...loading' : 'loaded'}
     <br />
     <br />
     {isError ? '...there is an error' : 'No Error'}
     <br />
     <button onClick={changeLoadingState}>changeLoading</button>
     <br />
     <button onClick={changeErrorState}>ChangeError</button>
   </div>
  );
}

export default EffectLogic;

  

  

  


