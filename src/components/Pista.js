import jinete from '../resources/jinete.gif';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

const Pista = ({dispatch, jugando, jinetes, loading}) => {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function demo() {
        console.log('inicia descanso');
        await sleep(1000);
        console.log('finaliza descanso');
    }

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        console.log(jinetes)
    }, [loading]);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador

        
        console.log('cambio jugando')
        if(jugando){
            var i = 150;
            while(i <= 152){
                let listJinetes = ['j1', 'j2', 'j3', 'j4', 'j5'];
                demo();
                listJinetes.forEach(jugador => {
                    document.getElementById(jugador).style.display = "inline";

                    document.getElementById(jugador).style.marginLeft = i + "px";
                    console.log('Se movio el jugador: ' + jugador);
                    //console.log(jugador);
                })
                i++;
                //console.log('Numero de i: ' + i);
            }
        }

        
        
    }, [jugando]);

    return (
        <>
            <div className="bg-image p-3">
                { jinetes[0] && <span>Jugador1: {jinetes[0].nombre} </span>}<br />
                { jinetes[1] && <span>Jugador2: {jinetes[1].nombre} </span>}<br />
                { jinetes[2] && <span>Jugador3: {jinetes[2].nombre} </span>}<br />
                { jinetes[3] && <span>Jugador3: {jinetes[3].nombre} </span>}<br />
                { jinetes[4] && <span>Jugador5: {jinetes[4].nombre} </span>}<br />
                {/*
                <span>{jinetes.jugador2 == null? '' : jinetes.jugador2.nombre}</span><br />
                <span>{jinetes.jugador3 == null? '' : jinetes.jugador3.nombre}</span><br />
                <span>{jinetes.jugador4 == null? '' : jinetes.jugador4.nombre}</span><br />
                <span>{jinetes.jugador5 == null? '' : jinetes.jugador5.nombre}</span><br />
                */}
                <img src={jinete} width="150" className="pi-jinete" id="j1"/><br />
                <img src={jinete} width="150" className="pi-jinete" id="j2"/><br />
                <img src={jinete} width="150" className="pi-jinete" id="j3"/><br />
                <img src={jinete} width="150" className="pi-jinete" id="j4"/><br />
                <img src={jinete} width="150" className="pi-jinete" id="j5"/><br />

                <button onClick={() => console.log(jinetes)}>Mostrar jinetes</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
      jugando: state.juego.jugando,
      jinetes: state.juego.jinetes,
      loading: state.juego.loading
    }
}

export default connect(mapStateToProps)(Pista)