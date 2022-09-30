import React, { ChangeEvent, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, personaje: "Naruto", anime: "Naruto" },
  { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
  { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

interface Dato {
  id: number, 
  personaje: string, 
  anime: string,
}

const initDato = {
  id:0,
  personaje: '',
  anime:''}

export const Anime = () => {
  const [personajes, setPersonajes]= useState(data)
  const [modalCrear,setModalCrear]=useState(false)
  const [modalEditar,setModalEditar]=useState(false)
  const [modalEliminar,setModalEliminar]=useState(false)
  const [datoEliminar,setDatoEliminar]=useState(initDato)
  const [form,setForm]=useState(initDato)

  const handleChange=(e:ChangeEvent<HTMLInputElement>) => {

    setForm((prev)=>{
      return {
      ...prev,
      [e.target.name]: e.target.value
      }
  } )

  }

  
  const mostrarModalcrear=() => {
    //console.log('Crear')
    setModalCrear(true)
  }

  const cerrarModalcrear=() => {
    setModalCrear(false)
  }

  const mostrarModalEditar=(dato: Dato) => {
    console.log(dato)
    setForm({
      id: dato.id,
      personaje: dato.personaje,
      anime: dato.anime
    })
    setModalEditar(true)
  }

  const cerrarModalEditar=() => {
    setModalEditar(false)
  }

  const registrar= ()=> {
    console.log(form)
    
    setPersonajes([
      ...personajes,
      {
        id: personajes.length+1,
        personaje: form.personaje,
        anime: form.anime
      }
    ])
    setModalCrear(false)
  }
  const editar =() => {
    console.log(form)
    let contador=0
    let nuevaLista=personajes
    nuevaLista.map((personaje)=> {
      
      if (personaje.id===form.id)
      {
         nuevaLista[contador].personaje=form.personaje
         nuevaLista[contador].anime=form.anime
        
      }
      contador+=1

     })  
     console.log(nuevaLista)
     setPersonajes([
      ...nuevaLista
    ])
     setModalEditar(false)
  }

  const mostrarModalEliminar=(dato: Dato) => {
    //console.log(dato)
    setDatoEliminar(dato)
    setModalEliminar(true)
  }


  const eliminar=(dato: Dato)=> {
    //window.confirm(`Desea Eliminar este personaje ?: ${dato.personaje}`)
    //console.log("Eliminar: ", dato)

    let contador=0
    let nuevaLista=personajes
    nuevaLista.map((personaje)=> {
      
      if (personaje.id===dato.id)
      {
         nuevaLista.splice(contador,1)
         
      }
      contador+=1

     })  
     console.log(nuevaLista)
     setPersonajes([
      ...nuevaLista
    ] )
    setDatoEliminar(initDato)
    setModalEliminar(false)
   }

   const cerrarModalEliminar=() => {
    setModalEliminar(false)
  }


  return (
    <>
    {

      // data.map(
      //   (registro)=> 
      //   {
      //   return <h1>{registro.personaje}</h1>
      //   }
      // )
<Container>
<Button
color="success" 
onClick={()=>mostrarModalcrear()}

>Crear</Button>
<Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personaje</th>
                <th>Anime</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {personajes.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personaje}</td>
                  <td>{dato.anime}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => mostrarModalEditar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" 
                    //onClick={()=> eliminar(dato)}
                    onClick={()=> {  return mostrarModalEliminar(dato)}}
                    >Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

<Modal isOpen={modalCrear}>
         
          <ModalHeader>
           <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup> 
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={personajes.length+1}
              />
          </FormGroup>
            
            <FormGroup> 
              <label>
                Personaje: 
              </label>
              <input
                className="form-control"
                name="personaje"
                type="text"
                value={form.personaje}
                onChange={(e)=> {return handleChange(e)}}
              />
          </FormGroup> 
            
            <FormGroup> 
              <label>
                Anime: 
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                value={form.anime}
                onChange={(e)=> {return handleChange(e)}}
              />
            </FormGroup>
           
            


            
          </ModalBody>

          <ModalFooter>
          
            <Button
              color="primary"
              onClick={() => {return registrar()}}
             
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => cerrarModalcrear()}
            >
              Cancelar
            </Button> 
            
          </ModalFooter>
          
      
</Modal>
<Modal isOpen={modalEditar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Personaje: 
              </label>
              <input
                className="form-control"
                name="personaje"
                type="text"
                onChange={handleChange}
                value={form.personaje}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Anime: 
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={handleChange}
                value={form.anime}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => editar()}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => cerrarModalEditar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
</Modal>

<Modal isOpen={modalEliminar}>
          <ModalHeader>
           <div><h3>Eliminar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
          <div>
          <h3>Personaje : {datoEliminar.personaje}</h3>
          <h3>Anime : {datoEliminar.anime}</h3>
          </div>  
          
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => eliminar(datoEliminar)}
            >
              Eliminar
            </Button>
            <Button
              color="danger"
              onClick={() => cerrarModalEliminar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>






</Container>
}
    </>
      
)
}
