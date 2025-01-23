"use client"
import { Header } from '@repo/ui/header';
import { Button } from '@repo/ui/button';
import ValidResponses from '@shared/types/responses';
import { useState } from 'react';

export default function Home() {

  const[isLoading,setIsLoading] = useState(false)

  const run = async ()=> {

    let result:ValidResponses.ServerResponse = {}

    setIsLoading(prevState => !prevState);
  
    await fetch('http://localhost:3001/run-script',{method:'GET'}).then((data)=>data.json()).then((message) => result = message)
  
    if(result.code !== 200){
      alert('command has failed');
    }
  
    console.log(result);
    setIsLoading(prevState => !prevState);
  }

  return (
    <>
    <Header/>
    <Button
    text='create project'
    onClick={run}
    disabled={isLoading}
    />
    
    </>
  );
}
