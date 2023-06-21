import styles from './Contact.module.css';

export function Contact(){
    return (
    <div className={styles['contact-container']}>
    <form className={styles['contact-form']} >

      <h2 className={styles['contact-title']}>Formulario de contacto</h2>
  
      <h4 className={styles['contact-text']}>Escríbenos y en breve nos pondremos en contacto contigo!</h4>

      <div className={styles['form-group']}>
        
        <input
          className={styles['textfield']}
          type="text"
          id="name"
          placeholder="Tu nombre"       
        />
      </div>

      <div className={styles['form-group']}>
        
        <input
          className={styles['textfield']}
          type="text"
          id="email"
          placeholder="Tu email"       
        />
      </div>

      <div className={styles['form-group']}>
        
        <input
          className={styles['textfield']}
          type="text"
          id="phone"
          placeholder="Tu telefono"       
        />
      </div>

      <div className={styles['form-group']}>
        
        <input
          className={styles['textfield']}
          type="text"
          id="subject"
          placeholder="Escribe el asunto"       
        />
      </div>

      <div className={styles['form-group']}>
        <textarea
          className={styles['texto_mensaje']}
          id="message"
          placeholder="Deja aquí tu comentario..." 
          name="introducir_mensaje" 
          required="obligatorio"
        />
      </div>


      <button type="submit" className={styles['contact-button']}>
        Enviar
      </button>
    </form>
  </div>
)
}