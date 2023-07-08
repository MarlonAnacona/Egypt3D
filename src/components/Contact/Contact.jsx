import styles from './Contact.module.css';

export function Contact() {
  return (
    <div className={styles['contact-container']}>
      <form className={styles['contact-form']}>

        <h2 className={styles['contact-title']}>Formulario de contacto</h2>

        <h4 className={styles['contact-text']}>Escríbenos y en breve nos pondremos en contacto contigo!</h4>

        {/* Campo para el nombre */}
        <div className={styles['form-group']}>
          <input
            className={styles['textfield']}
            type="text"
            id="name"
            placeholder="Tu nombre"
          />
        </div>

        {/* Campo para el email */}
        <div className={styles['form-group']}>
          <input
            className={styles['textfield']}
            type="text"
            id="email"
            placeholder="Tu email"
          />
        </div>

        {/* Campo para el teléfono */}
        <div className={styles['form-group']}>
          <input
            className={styles['textfield']}
            type="text"
            id="phone"
            placeholder="Tu telefono"
          />
        </div>

        {/* Campo para el asunto */}
        <div className={styles['form-group']}>
          <input
            className={styles['textfield']}
            type="text"
            id="subject"
            placeholder="Escribe el asunto"
          />
        </div>

        {/* Campo para el mensaje */}
        <div className={styles['form-group']}>
          <textarea
            className={styles['texto_mensaje']}
            id="message"
            placeholder="Deja aquí tu comentario..."
            name="introducir_mensaje"
            required="obligatorio"
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className={styles['contact-button']}>
          Enviar
        </button>
      </form>
    </div>
  );
}
