export default function ContactForm() {
    return (
      <form className="contact-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="tel" placeholder="Teléfono" />
        <textarea placeholder="Cuéntanos tu caso" rows={5}></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    );
  }
  