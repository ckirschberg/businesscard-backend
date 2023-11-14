
async function callbackend() {
    const result = await fetch("http://localhost:3005/businesscards", {
        method: 'POST',
        body: {}
    });
    const res = await result.json();
    console.log(res);
}
callbackend();