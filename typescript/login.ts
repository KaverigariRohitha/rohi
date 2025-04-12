function login()
{
    const name:string=(document.getElementById("username") as HTMLInputElement).value;
    const password:string=(document.getElementById("password") as HTMLInputElement).value;
    if(name.trim()=="" && password.trim()=="")
    {
        alert("chek login details..");
    }
    else{
        document.getElementById('login')?.addEventListener('click',()=>
        {
        window.location.href="/products.html";
        });
    }
    

}



// function login() {
//     const name: string = (document.getElementById("username") as HTMLInputElement).value;
//     const password: string = (document.getElementById("password") as HTMLInputElement).value;
  
//     if (name.trim() === "" || password.trim() === "") {
//         alert("Check Login Details");
//     } else {
//         const message = (document.getElementById("login") as HTMLDivElement);
//         message.innerHTML = "Login Successful";
//         setTimeout(() => {
//             sessionStorage.setItem("username", name);
//             window.location.href = "products.html";
//         }, 1000);
//     }
//   }