const ContactForm = () => {

  return (
    <div>
        <h1>Contact me</h1>
    <form>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="message" placeholder="message" />
        <button className="submit">submit</button>
    </form>
    </div>
    
  );
};

export default ContactForm