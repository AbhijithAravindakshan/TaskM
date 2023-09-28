import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import AXIOS from 'axios'

function Add() {

    let[nam,setNam]= useState("")
    let[pos,setPos]= useState("")
    let[ass,setAss]= useState("")
    let[sub,setSub]= useState("")



    const press = async()=>{
        alert("Task Assigned Successfull");
        await  AXIOS.post("http://localhost:9000/TskData",{NamOne:nam,PosOne:pos,AssOne:ass,SubOne:sub}).then((res)=>{
          alert(res.data.msg)
        })
      }

  return (
    <div>

        

        <Form.Group>

            <Form.Label>Applicant Name</Form.Label>
            <br />
            <Form.Control type='text' name='Nam' onChange={(e)=> setNam(e.target.value)} placeholder='Enter Name'></Form.Control>
<br />
            <Form.Label>Applicant Possistion</Form.Label>
            <br />
            <Form.Control type='text' name='Pos'onChange={(e)=> setPos(e.target.value)}  placeholder='Enter position'></Form.Control>
<br />
            <Form.Label>Task Assigned</Form.Label>
            <br />
            <Form.Control type='text' name='Ass' onChange={(e)=> setAss(e.target.value)} placeholder='Task Details'></Form.Control>
<br />
            <Form.Label>Task Submission</Form.Label>
            <br />
            <Form.Control type='text' name='Sub' onChange={(e)=> setSub(e.target.value)} placeholder='Time '></Form.Control>
<br />
<a href="view">ViewdB</a>
<br />
            <Button type='Submit' onClick={press}>Assign Task</Button>





        </Form.Group>

    </div>
  )
}

export default Add