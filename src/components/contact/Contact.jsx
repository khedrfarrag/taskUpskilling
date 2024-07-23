import React, { useState,useEffect} from 'react'
import axios  from "axios"
import { Button } from 'react-bootstrap'
import StyleContact from "./contact.module.css"



function Contact() {
 //fetch data from form and display in component



 
 const [data, setData] = useState()

 async function handeldata(e) {
  e.preventDefault()
  // await fetch("http://localhost:3000/contact",{
  //   method:"POST",
  //   headers:{"Content-Type":"application/json"},
  //   body:{name:e.target.name.value,email:e.target.email.value,phone:e.target.phone.value}
  // }).then(res=>res.json).then((data)=>{console.log(data)})
 let Data= await axios.post("http://localhost:3000/contact",{
    name:e.target.name.value,
    email:e.target.email.value,
    phone:e.target.phone.value

  }).then((res)=>{setData(res)}).catch(err=>console.log(err))
console.log(Data)

 }
 
 useEffect(()=>{
  // handeldata()
 },[])

//  function handelform(e){
//    e.preventDefault()
//   let form=e.target
//   let Fordata= new FormData(form)
//   let data=Object.fromEntries(Fordata.entries())
//   let Data=JSON.stringify(data)
//   console.log(data)
//   console.log(Data)
// if(data.name ===""){
//   alert("error can't be request without name or email or password")
// }



// }


   
 

  return (
    <>


      <section className={StyleContact.contaner}>
        <div className={StyleContact.headerSection}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>contact us</h1>
        </div>

        <div className={StyleContact.mainSecForm}>
          <form onSubmit={handeldata} >
            <input type="text" name='name'   placeholder="Name" />
            <input type="text" name='email' placeholder="Email" />
            <input type='text' name='phone'  placeholder='phone' />

            {/* <input type="text"  onChange={(e)=>{setName(e.target.value)}}  placeholder="Name" />
            <input type="text"   onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
            <input type='text'  onChange={(e)=>{setPhone(e.target.value)}} placeholder='phone' /> */}
            
          <Button type='submit' variant="outline-primary">Sunmit</Button>

          </form>
          <div className={StyleContact.HeroContactMe}>
            <div className={StyleContact.HeroEmail}>
              <box-icon name='envelope' type='solid' color='#6D91EE' ></box-icon>
              <a href="khedr.farrag@gmail.com">khedr.farrag@gmail.com</a>
            </div>
            <div  className={StyleContact.HeroPhone}>
              <box-icon name='phone' type='solid' color='#6D91EE' ></box-icon>
              <a href="#">01090259510</a>
            </div>
          </div>
          {/* <div><h1>{console.log(setName})</h1></div> */}

        </div>
      </section>



    </>
  )
}


export default Contact