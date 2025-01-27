"use client"
import { OuterFrame } from '@repo/ui/form';
import { Button } from '@repo/ui/button';
import LoadingSpinner from '@repo/ui/spinner';
import ValidResponses from '@shared/types/responses';
import { Frame } from '@repo/ui';
import { TitleFrame } from '@repo/ui';
import { Dropdown } from '@repo/ui/dropdown';
import { useState } from 'react';

export default function Home() {

  const[isLoading,setIsLoading] = useState(false)

  const run = async ()=> {

    let result:ValidResponses.ServerResponse = {}

    setIsLoading(prevState => !prevState);
  
    // await fetch('http://localhost:3001/run-script',{method:'GET'}).then((data)=>data.json()).then((message) => result = message)
  
    // if(result.code !== 200){
    //   alert('command has failed');
    // }
  
    console.log(result);
    // setIsLoading(prevState => !prevState);
  }

  return (
    <>


    <Frame>
      <TitleFrame>
        Mono-template-builder
      </TitleFrame>
    {isLoading && <LoadingSpinner/>}
    </Frame>
    
    <OuterFrame>

      <Dropdown
      label={'Package Manager'}
      options={['npm','yarn']}
      />

      <Dropdown
      label={'project-type'}
      options={['nextJs','vite','storybook','svelte']}
      />

    <Dropdown
      label={'Package Manager'}
      options={['npm','yarn']}
      />

      <Dropdown
      label={'project-type'}
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
