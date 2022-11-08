
async function callbackend() {
    const result = await fetch("http://localhost:3005/businesscards");
    const res = await result.json();
    console.log(res);
}
callbackend();