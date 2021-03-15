import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState({
    fname:"",
    email:"",
    mobile:"",
    ads:"",
    msg:"",
});
 const inputEvent = (event) => {
        const { name, value } = event.target;
        //   console.log(event.target.value);
        //   console.log(event.target.name);

        //   const value = event.target.value;
        //   const name =event.target.name;
       
        setFullName((preval) => {
            return {
                ...preval,
                 [name]: value,
                };
        });
    };

  const onSubmits = (event) => {
    event.preventDefault();
    alert(`Form Submitted 
            Full Name:- ${fullName.fname} ,
            Email:-  ${fullName.email}, mobile:- ${fullName.mobile},
            Adress:- ${fullName.ads},
            Message:- ${fullName.msg}`);

};
// const inputEvent = (event) => {
        
//   console.log(event.target.value);
//   console.log(event.target.name);

//   const value = event.target.value;
//   const name =event.target.name;
// setFullName((preValue)=>{

// return{
//   ...preValue,
//   [name]:value,
// }
// })

// };
    // const [data, setData] = useState({
    //     fullname: "",
    //     email: "",
        
    // });
    
    // const InputEvent = (event) => {
    //     const { name, value } = event.target;
       
    //     setData((preval) => {
    //         return {
    //             ...preval,
    //              [name]: value,
    //             };
    //     });
    // };
    // const formSubmit = (e) =>{
    //     e.preventDefault();
    //     alert(`my name is ${data.fullName}`);

    // };
  return (
    <>
     <div className="my-5">
<h1 className="text-center">Contact Us</h1>
{/* <p>{`Form Submitted 
            Full Name:- ${fullName.fname} ,
            Email:-  ${fullName.email}, Phone:- ${fullName.mobile},
            Adress:- ${fullName.ads},
            Message:- ${fullName.msg}`}</p> */}
     </div>
     <div className="container contact_div">
     <div className="row">
         <div className="col-md-6 col-10 mx-auto">
         <form className="row g-3" onSubmit={onSubmits}>
         <div className="col-12">
    <label for="inputAddress" className="form-label">Full Name</label>
    <input type="text" name="fname" onChange={inputEvent} value={fullName.fname}   className="form-control" id="inputAddress" placeholder="Enter Your Full Name" />
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" name="email" onChange={inputEvent} value={fullName.email}  className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Mobile</label>
    <input type="number" name="mobile" onChange={inputEvent} value={fullName.mobile}  className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" name="ads" onChange={inputEvent} value={fullName.ads}   className="form-control" id="inputAddress" placeholder="Enter Your Full Name" />
  </div>
 
  <div className="col-12">
    <label for="inputAddress" className="form-label">Message</label>
   
    <textarea class="form-control" name="msg" onChange={inputEvent}  value={fullName.msg} id="exampleFormControlTextarea1" rows="3"></textarea>

  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Send Now</button>
  </div>
</form>
         </div>
         </div>
     </div>
    </>
  );
}

export default Contact;
