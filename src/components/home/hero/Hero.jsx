import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import IrCursos from "../../../botones/IrCursos"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='BIENVENIDOS AL INSTITUTO' title='La Mejor Experiencia en Educación en Linea' />
            <p>Propuestas educativas para estudiar ingles.</p>
            <div className='button'>
              <button className='primary-btn'>
                COMIENZA AHORA <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
              <IrCursos/>
              

            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
