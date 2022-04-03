import React from "react";
import Boton from "./Boton";
import Pantalla_salida from "./Pantalla_salida";

class Calculadora extends React.Component {
    
    render(){
        return (
            <div className="frame">
                <Titulo value="Calculeitor"></Titulo>
                <div class = "clase_principial">
                    <Pantalla_salida></Pantalla_salida>
                    <div className="Boton_Regilla">
                        <Boton label="Borrar"></Boton>
                        <Boton label="/"></Boton>
                        <Boton label="."></Boton>
                    </div>
                    <div className="Boton_Regilla">
                        <Boton label="7"></Boton>
                        <Boton label="8"></Boton>
                        <Boton label="9"></Boton>
                        <Boton label="*"></Boton>
                    </div>
                    <div className="Boton_Regilla">
                        <Boton label="4"></Boton>
                        <Boton label="5"></Boton>
                        <Boton label="6"></Boton>
                        <Boton label="-"></Boton>
                    </div>
                    <div className="Boton_Regilla">
                        <Boton label="1"></Boton>
                        <Boton label="2"></Boton>
                        <Boton label="3"></Boton>
                        <Boton label="+"></Boton>
                    </div>
                    <div className="Boton_Regilla">
                        <Boton label="0"></Boton>
                        <Boton label="="></Boton>
                    </div>
                </div>
            </div>
        )

    }
} 
export default Calculadora