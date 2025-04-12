// function display()
// {
//     var res=(document.getElementById("t1")as HTMLInputElement).value;
//     alert(res);
//     var r=(document.getElementById("d1") as HTMLDivElement)
//     r.innerHTML= res;
// }


// function display()
// {
//      let icustomer=[
//         {
//             cid:100,cusname:"raj",address:"chennai"
//         },
//         {
//             cid:210,cusname:"vijay",address:"hyderabad"
//         } ,
//         {
//             cid:300,cusname:"kiran",address:"banglore"
//         }
//       ]

//       var ul=document.createElement("ul");
//       icustomer.forEach(e=> {
//         var li=document.createElement("li");
//         li.textContent=`CID :${e.cid}, Name :${e.cusname} ,address: ${e.address}`;
//         ul.appendChild(li);
        
//       });
//       document.body.appendChild(ul);
// }


function display1()
{ 

     let icustomer=[
        {
            cid:100,cusname:"raj",address:"chennai"
        },
        {
            cid:210,cusname:"vijay",address:"hyderabad"
        } ,
        {
            cid:300,cusname:"kiran",address:"banglore"
        }
      ]
      var  d=(document.getElementById("d1") as HTMLInputElement);
      let res:any;
      icustomer.forEach(c=>{
        res+=`<li>${c.cid}</li> 
    <li>${c.cusname}</li>
    <li>${c.address}</li> `
      });
      d.innerHTML=res;
 }



//  function showbyname()
//   {
//     let icustomer=[
//         {
//             cid:100,cusname:"raj",address:"chennai"
//         },
//         {
//             cid:210,cusname:"vijay",address:"hyderabad"
//         } ,
//         {
//             cid:300,cusname:"kiran",address:"banglore"
//         }
//       ]
//     let d=icustomer.filter(d => d.cusname.startsWith("v"))
//     .Map(d => d.cusname)

//   }
 

function showbyname()
{
    let icustomer=[
        {cid:100,cusname:"raj",address:"chennai"},
        {cid:200,cusname:"vijay",address:"blr"},
        {cid:300,cusname:"akhii",address:"hyd"}
    ]
    var d=document.getElementById("d2") as HTMLDivElement
        let res1:string=" ";
        icustomer.forEach(c=>{
            res1 += `<li>${c.cusname}</li> `;
        });
        d.innerHTML=res1;
}

 