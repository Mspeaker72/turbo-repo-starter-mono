"use client"
import { OuterFrame } from '@repo/ui/form';
import { Button } from '@repo/ui/button';
import LoadingSpinner from '@repo/ui/spinner';
import ValidResponses from '@shared/types/responses';
import { Frame, SpinnerFrame } from '@repo/ui';
import { TitleFrame } from '@repo/ui';
import { Dropdown } from '@repo/ui/dropdown';
import { useState } from 'react';
import { Modal } from '@repo/ui/modal';
import { InputBox } from '@repo/ui/dropdown';


export default function Home() {

  const[isLoading,setIsLoading] = useState(false)
  const[error,setError]=useState(false)

  const run = async ()=> {

    let result:ValidResponses.ServerResponse = {}

    setIsLoading(prevState => !prevState);
  
    await fetch('http://localhost:3001/run-script',{method:'GET'}).then((data)=>data.json()).then((message) => result = message)
  
    if(result.code !== 200){
      setError(prevState => !prevState)
    }
  
    setIsLoading(prevState => !prevState);
  }

  const closeError = () => {

    setError(prevState => !prevState);

  }


  if(error){
    return(
      // one must use dispatch to have various error screens within
      <Modal
      onClick={closeError}
      >

      </Modal>
    );
  }

  return (
    <>
    <SpinnerFrame>
    
      {isLoading && <LoadingSpinner/>}
    
    </SpinnerFrame>
    
    <OuterFrame>

      <InputBox
      label={ 'file-name:' }
      />

      <Dropdown
      label={'Package Manager:'}
      options={['npm','yarn']}
      />

      <Dropdown
      label={'project-type:'}
      options={['nextJs','vite','storybook','svelte']}
      />

    <Button
    text='execute command'
    onClick={run}
    disabled={isLoading}
    />

    </OuterFrame>
    
    </>
  );
}
