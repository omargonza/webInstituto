
import React from 'react';
import { Link } from "react-router-dom";




function IrCursos() {

    
  return (
    
    <Link to="/CourseHome">
        <a className="fa fa-long-arrow-alt-right" href="/CourseHome">
        <button >
        VER CURSO 
      </button>
      </a>
    </Link>
    
  );
}
export default IrCursos;
