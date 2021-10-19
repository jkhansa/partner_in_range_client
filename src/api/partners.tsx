export async function getPartnersInRange(range:number, lat:number,lng:number) {

    const response = await fetch('http://localhost:8081/api/partners_in_range/?range='+range+'&lat='+lat+'&lng='+lng,
    {method:"GET"});
    return response.json();
}
