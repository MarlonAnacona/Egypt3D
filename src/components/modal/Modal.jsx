import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

Modal.setAppElement("#root");

const ImagenModal = ({ isOpen, onRequestClose }) => {

  // Crea un arreglo de objetos, cada uno con un número de imagen y una descripción única
  const guides = [
    { number: 1, description: "Registrate en el menu de la parte superior" },
    { number: 2, description: "Ingresa tu datos" },
    { number: 3, description: "Posteriormente ingresa con los datos que te registraste" },
    { number: 4, description: "Una vez ingreses, puede selecionar el modulo dandole click y ver su contenido" },
    { number: 5, description: "Puedes desplazarte entre el mismo modulo para mayor información" },
    { number: 6, description: "Al final de cada modulo habrá una evaluación, para conocer de tus conocimientos" },
    { number: 7, description: "" },
    { number: 8, description: "En el menu tambien podrás ir a tu perfil y modificar tus datos" },
    { number: 9, description: "Tienes un menú en el cual podrás navegar y así mismo cerrar la sesión" },
    // Añade más objetos aquí según la cantidad de guías que tengas
  ];

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="ImagenModal" overlayClassName="Overlay">
      {/* Botón para cerrar el modal */}
      <button onClick={onRequestClose} className="CloseButton"><AiOutlineClose /></button>
      {/* Título del modal */}
      <h2 className="ModalTitle">GUIA EGYPT 3D</h2>
      {/* Renderizar cada guía */}
      {guides.map(({ number, description }) => (
        <div key={number}>
          {/* Mostrar imagen correspondiente a la guía */}
          <img src={`/images/guia${number}.png`} alt={`Descripción de Guía ${number}`} />
          {/* Mostrar descripción de la guía */}
          <p>{description}</p>
        </div>
      ))}
    </Modal>
  );
};

export default ImagenModal;
