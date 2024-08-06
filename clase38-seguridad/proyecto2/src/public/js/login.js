const form = document.getElementById('loginForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    const data = new FormData(form);
    const obj = {}
    data.forEach((value, key)=> obj[key]=value);
    fetch('/api/sessions/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json()).then(json=>{
        Swal.fire({
            icon:"success",
            text:"Usuario logueado :)"
        })
    }).catch(error=>console.log(error))
})