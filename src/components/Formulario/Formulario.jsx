import React, {useState} from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {addDoc, collection} from "firebase/firestore"
import db from "../../services/index"
import { useContext } from "react";
import {GlobalContext} from "../../context/CartContext"
import moment from "moment/moment";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Spinner from "../Spinner/Spinner"




const Formulario = () => {
   
    const {carrito, precioFinal} = useContext(GlobalContext)

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const MySwal = withReactContent(Swal)

    const [formulario, setFormulario] = useState({
        buyer: {
            email:"",
            nombre:"",
            apellido:"",
            telefono:"",
        },
        total: {precioFinal},
        items: {carrito},
        fecha: moment().format('MMMM Do YYYY, h:mm:ss a')
    });


    const { buyer: {email, nombre, apellido, telefono},} = formulario;
   
    const handleChange =(e) =>{
      const { name,value } = e.target;
      setFormulario({
        ...formulario,
        buyer: {
          ...formulario.buyer,
          [name]: value,
        },
      });
    };

    const setInFirebase = async (formulario)=>{

      if(nombre ===""||email === "" || apellido ==="" || telefono === ""){
        MySwal.fire({
          title: <strong>Error!</strong>,
          html: <i>Te faltan completar los datos</i>,
          icon: 'error'})
      }else{

      

      try {
        setIsLoading(true)
        const col = collection(db, "ordenes")
        await addDoc (col, formulario).then(({id})=>{
          MySwal.fire({
              title: <strong>Excelente</strong>,
              html:(
                  <div>
                      <h3>Su ID de compra es: {id}</h3>
                  </div>
              ),
              icon: 'success'
            }).then(localStorage.removeItem("carrito")).then(()=>{
              navigate("/")
            }).then(()=> window.location.reload())
        })
        

        
      } catch (error) {
        console.log(error)
        
      }
    }
    }

    
    
    
    return (
        <>
        {
          isLoading === false ? (<div>
            <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="col-md-5 mx-auto mb-4"
            >
            <Form.Control type="email" name="email" value= {email} onChange={handleChange} placeholder="name@example.com" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="col-md-5 mx-auto mb-4"
            >
            <Form.Control type="text" name="nombre" value={nombre} onChange={handleChange} placeholder="name@example.com" required/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Apellido"
            className="col-md-5 mx-auto mb-4"
            >
            <Form.Control type="text" name="apellido" value={apellido} onChange={handleChange} placeholder="name@example.com" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Telefono"
            className="col-md-5 mx-auto mb-4"
            >
            <Form.Control type="number" name="telefono" value={telefono} onChange={handleChange} placeholder="name@example.com" required/>
          </FloatingLabel>
          <div>
            <Button onClick={()=>setInFirebase(formulario)} className="col-md-5 button btn mx-auto mb-4">TERMINAR LA COMPRA</Button>
          </div>
          <div>
            <Link to="/productos">
            <Button className="button btn col-md-5 mx-auto">VOLVER A COMPRAR</Button>
            </Link>
          </div>
            </div>
            ) : (<Spinner/>)
        }
      
    </>
      
  );
      
      
          

}
  
  
  export default Formulario;
  



