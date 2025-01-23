"use client"
import { Header } from '@repo/ui/header';
import { Button } from '@repo/ui/button';
import ValidResponses from '@shared/types/responses';



const run = async ()=> {

  let result:ValidResponses.ServerResponse = {}

  await fetch('http://localhost:3001/run-script',{method:'GET'}).then((data)=>data.json()).then((message) => result = message)

  if(result.code !== 200){
    alert('command has failed');
    console.log(result);
  }

}

export default function Home() {
  return (
    <>
    <Header/>
    <Button
    text='create project'
    onClick={run}
    />
    
    </>
  );
}
