import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
  textarea {
    resize: none;
  }
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">contact page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6930072572914!2d88.43288657542372!3d22.36521767964006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026c512afb6a91%3A0xdd69f0a5a3157114!2sBaruipur%20Station%20Rd%20%26%20Madarat%20Rd%2C%20Masterpara%2C%20Subuddhipur%2C%20Baruipur%2C%20West%20Bengal%20700144!5e0!3m2!1sen!2sin!4v1681589119171!5m2!1sen!2sin" 
    width="100%"
    height="350" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>

    {/* form inputs */}

    <div className="container">
      <div className="contact-form">
        <form action="" className="contact-inputs" method ="POST">
          <input type="text" placeholder="username" 
          name="username"
          required
          autoComplete="off" />
          <input type="email" placeholder="Email" name="Email"
          autoComplete="off"
          required
          />
          
          <textarea name="Message" 
          placeholder="Enter Your Message"
          cols="30" 
          rows="10"
          require
          autoComplete="off"
          />

          <input type="submit" value="send" />
        </form>
      </div>
    </div>

  </Wrapper>;
};

export default Contact;
