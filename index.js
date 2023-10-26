let form=document.getElementById('addForm');

form.addEventListener('submit',addFrom);



function addFrom(e){
    e.preventDefault()
    let email=document.getElementById('email');
    let name=document.getElementById('name');
    let number=document.getElementById('number');

    let obj={
        email:email.value,
        name:name.value,
        number:number.value
    }
    
    axios.post('https://crudcrud.com/api/44314eabb8ec4ec5b3c5c2961b65a81f/appointmentDate',obj)
    .then((response)=>console.log(response))
    .catch(error=>console.log(error))
}