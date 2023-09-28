import React from 'react'
import { useEffect, useState } from 'react'
import AXIOS from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import '../Style/View.css'
import { Link } from 'react-router-dom'


 function view() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data,setData] = useState([]);



// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=>{
    AXIOS.get("http://localhost:9000/Viewdb").then((res)=>{
        setData(res.data.myData)
        
    })
})


  return (
    <div>
    <Container>
        <Row>
            <Col>
            <table>

             <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Assigned Task</th>
                <th>Submit Time</th>
                <th>Action</th>

                
                

                </tr>
                    {data.map((viw)=>{
                        return(
                            <tr>
                                <td>
                                 {viw.Nam}
                                </td>
                                <td>
                                    {viw.Pos}
                                </td>
                                <td>
                                    {viw.Ass}
                                </td>
                                <td>
                                    {viw.Sub}
                                </td>
                               
                                {/* <td>
                                <Link to={`/edt/`+ls._id}>
                                <h3>Edit</h3>
                                </Link>
                                </td> */}
                                <td>
                                    <Link to={`/Upd/`+viw._id}>Update</Link>
                               
                                    {/* <Link to={}>Delete</Link> */}
                                    
                                </td>
                            </tr>
                        )

                    })}

            </table>
            </Col>
        </Row>
    </Container>
</div>
)
}
export default view
