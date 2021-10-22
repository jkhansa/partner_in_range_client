export async function getPartnersInRange(range:number, lat:number,lng:number) {
  //var hostname='docker_default';
/*  if(process.env.partner_app_client_env==='prod'){
    hostname='server';
  }
  if(process.env.partner_app_client_env==='dev'){
    hostname='localhost';
  }*/
  try{
    const response = await fetch('/api/partners_in_range/?range='+range+'&lat='+lat+'&lng='+lng,
    {method:"GET"});
    return await response.json();
  }catch(error){
    console.log(error);
    return [];
  }
}
