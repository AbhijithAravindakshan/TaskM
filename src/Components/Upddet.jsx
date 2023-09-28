import React from 'react'
import{useParams, } from 'react-router-dom'
import{Form,Button} from 'react-bootstrap'
import AXIOS from 'axios'
import { useState, useEffect } from 'react'


function Upddet() {


    const params= useParams();
    const [list, setList]= useState([]);
    // const [cimg,setCimg] = useState("")
    const[Ename,setEname] = useState("");
    const[Epos,setEpos] = useState("");
    const[Eass, setEass] = useState("");
    const[Esub, setEsub] = useState("");



    useEffect(()=>{
        AXIOS.get(`http://localhost:9000/TskViewBYId/:id/${params.id}`).then((res)=>{
         setList(res.data.myDt);
        //  setCimg(res.data.myDt[0].Url);
         setEname(res.data.myDt[0].Nam);
         setEpos(res.data.myDt[0].Pos);
         setEass(res.data.myDt[0].Ass);
         setEsub(res.data.myDt[0].Sub);
    
         

        });
    },[]);

    const update =async ()=>{
      alert("registration Success")

      await AXIOS.post("http://localhost:9000/EUpd",{pName:Ename,pPos:Epos,pass:Eass,psub:Esub}).then((res)=>{
        alert(res.data.msg)

      })
    }

  


  return (
    <div>

        <h2>Details Updation</h2>

        <br /> <br />

        <Form.Group className='input'>

   {/* <Form.Label><b>Update Pet Photo</b></Form.Label>
   <Form.Control type='file' name='file'  onChange={(e)=>setCimg(e)}/>
   <br /> */}
    <Form.Label> <b>Update Name</b> </Form.Label>
    <Form.Control type='text' name='ptname' value={Ename} onChange={(e)=>setEname(e.target.value)} placeholder='Provide Your Pet Name'></Form.Control>
    <br />
    <Form.Label> <b>Update Position</b> </Form.Label>
    <Form.Control type='text' name='br' value={Epos} onChange={(e)=> setEpos(e.target.value)} placeholder='Provide Your Pet breed'></Form.Control>
    <br />
    <Form.Label> <b>Update Assesment </b> </Form.Label>
    <Form.Control type='text' name='varientname' value={Eass} onChange={(e)=> setEass(e.target.value)} placeholder='Contact number'></Form.Control>
    <br />
    <Form.Label> <b>Update SubTime </b> </Form.Label>
    <Form.Control type='text' name='varientname' value={Esub} onChange={(e)=> setEsub(e.target.value)} placeholder='Contact number'></Form.Control>


    <br />

       <Button type='submit' onClick={update} variant='warning'>UPDATE</Button>
    

</Form.Group>

    </div>
  )
}

export default Upddet