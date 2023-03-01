import React from "react"
import { blog } from "../../../data"
import peaiNegro from"../../../../src/imagenesNoe/peaiNegro.png"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Mantengase actualizado y reciba las ultimas actualizaciones</h1>
            <span>Propuestas educativas para aprender ingles.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>INSTITUTO</h1>
            <h1>Miss.Noe_online.english</h1>
            <img src={ peaiNegro} alt="noe"/>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explorar</h3>
            <ul>
              <li>Sobre nosotros</li>
              <li>Servicios</li>
              <li>Coursos</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Enlaces rapidos</h3>
            <ul>
              <li>Contactenos</li>
              <li>Pricing</li>
              <li>Terms & Condiciones</li>
              <li>Privacidad</li>
              <li>Comentarios</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Preguntas?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                 Merlo, Buenos Aires, Argentina.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +54 11 51424362
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                noemoni@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 Todos los derechos reservados | Esta plantilla esta hecha con <i className='fa fa-heart'></i> by MGdesarrollo
        </p>
      </div>
    </>
  )
}

export default Footer
