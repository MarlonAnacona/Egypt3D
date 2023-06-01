import React, { useState } from 'react';
import Modal from 'react-modal';
import "./Profile.css";

export function Profile() {
    const [avatar, setAvatar] = useState('/images/perfil.png');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAvatarSelector, setShowAvatarSelector] = useState(false);
    const avatars = [
        '/images/anubis.png',
        '/images/momia.png',
        '/images/jeroglifico.png',
        '/images/faraon.png',
        '/images/sarcofago.png',
        '/images/escarabajo.png',
        '/images/gato.png',
        '/images/piramides.png',
        '/images/esfinge.png',
        '/images/cleopatra.png',
        '/images/bastones.png',
        '/images/ra.png',
        // Agrega más rutas de imágenes de avatar según tus necesidades
      ];
  
    const handleAvatarSelection = (selectedAvatar) => {
        setAvatar(selectedAvatar);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleNewPasswordChange = (event) => {
      setNewPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes enviar los datos actualizados al servidor
      console.log('Avatar:', avatar);
      console.log('Name:', name);
      console.log('Email:', email);
    };
  
    const handleChangePassword = () => {
      setShowChangePassword(true);
    };
  
    const handleCloseChangePassword = () => {
      setShowChangePassword(false);
      setNewPassword('');
      setConfirmPassword('');
    };
  
    const handleSavePassword = () => {
      if (newPassword === confirmPassword) {
        // Realizar el cambio de contraseña
        console.log('Contraseña cambiada');
        setShowChangePassword(false);
        setNewPassword('');
        setConfirmPassword('');
      } else {
        // Mostrar mensaje de error o realizar alguna otra acción
        console.log('Las contraseñas no coinciden');
      }
    };

    const handleOpenAvatarSelector = () => {
        setShowAvatarSelector(true);
      };

      const handleCloseAvatarSelector = () => {
        setShowAvatarSelector(false);
      };

      const handleConfirmAvatarSelection = () => {
        // Realiza las acciones necesarias al confirmar la selección del avatar
        setShowAvatarSelector(false);
      };
      
    return (
      <div className="container">
        <div className="profile-card">
          <h1>Perfil</h1>
          <div className="avatar-preview">
            <img src={avatar} alt="Avatar Preview" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="texto" htmlFor="avatar">Avatar:</label>
              <button type="button" onClick={handleOpenAvatarSelector}>Seleccionar Avatar</button>
            </div>
            <div className="form-group">
              <label className="texto" htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                className='input'
                placeholder='Tu nombre ' //Cambiar en back
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label className="texto" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className='input'
                placeholder='Tu email' // Cambiar en Back
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button type="button" onClick={handleChangePassword}>
              Cambiar Contraseña
            </button>
            <button type="submit">Guardar</button>
          </form>
        </div>
        
        {showAvatarSelector && (
        <Modal
            isOpen={showAvatarSelector}
            onRequestClose={handleCloseAvatarSelector}
            className="avatar-selector-modal"
            overlayClassName="avatar-selector-modal-overlay"
        >
            <div className="avatar-selector-modal-content">
            <button
                className="avatar-selector-modal-close-button"
                onClick={handleCloseAvatarSelector}
            >
                <span>&#10005;</span>
            </button>
            <h2>Seleccionar Avatar</h2>
            <div className="avatar-grid">
                {avatars.map((avatarOption) => (
                <div
                    key={avatarOption}
                    className={`avatar-option ${
                    avatar === avatarOption ? "selected" : ""
                    }`}
                    onClick={() => handleAvatarSelection(avatarOption)}
                >
                    <img src={avatarOption} alt="Avatar" />
                </div>
                ))}
            </div>
            <button onClick={handleConfirmAvatarSelection}>Confirmar</button>
            </div>
        </Modal>
        )}


        <Modal
        isOpen={showChangePassword}
        onRequestClose={handleCloseChangePassword}
        className="password-modal"
        overlayClassName="password-modal-overlay"
        >
        <div className="modal-content">
            <button className="modal-close-button" onClick={handleCloseChangePassword}>
            <span className="modal-close-icon">&#10005;</span>
            </button>
            <h2 className='modal-title'>Cambiar Contraseña</h2>
            <div className="form-group">
            <label htmlFor="new-password">Nueva Contraseña:</label>
            <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={handleNewPasswordChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Contraseña:</label>
            <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            </div>
            <div className="password-modal-buttons">
            <button className="modal-save-button" onClick={handleSavePassword}>
                Guardar Contraseña
            </button>
            </div>
        </div>
        </Modal>
      </div>
    );
  };