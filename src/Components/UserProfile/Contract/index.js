import React, { Component } from 'react';
//import firebase from 'firebase';

import './index.css';
//import { request } from 'http';

export default class Contract extends Component {
  constructor(props){
    super(props);

    this.state = {
      signed: false,
      lenguage: 'ES',
      agency: 'RESA Housing',
      name: '',
      surnames: '',
      passport: '',
      passportPic: '',
      street: '',
      houseNr: '',
      floorNr: '',
      doorNr: '',
      zipCode:'',
      city: '',
      country: '',
      tel:'',
      mobile: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      roomNr: '',
      rent: 0,
      expenses: 90,
      datesError: false,
      payedDeposit: 0,
      payedRent: 0,
    }

   // this.db = firebase.auth();

    //this.signContract = this.signContract.bind(this);
    this.totalRent = this.state.rent + this.state.expenses;
    this.deposit = this.totalRent * 2;
    this.balanceDeposit = this.deposit - this.state.payedDeposit;
    this.balanceRent = this.state.rent - this.state.payedRent;
    this.toBePayedAtCheckIn = this.balanceDeposit + this.balanceRent;

  }

  
  signContract(e){
    e.preventDefault();
    this.setState({signed: true});
  }

  render(){
   
    
    return (

      <div className="contracts">

        <div className="lenguage">
          <div className="es">
            <h4>ES</h4>
          </div>
          <div className="en">
            <h4>EN</h4>
          </div>
        </div>

        <div className="contract-body">
        
          <div className="date">
            <p>En Barcelona, a {this.props.checkIn}.</p>
          </div>

          <div className="title">
            <h3>REUNIDOS</h3>
          </div>
          
          <div className="paragraph">
            <p>De una parte, D. Ariel Cima Porto, con NIF 48.109.279-H y de otra parte,
              D./Dña. {this.props.name} {this.props.surnname} , NIF/pasaporte {this.props.passport}, teléfono {this.props.phone}, 
              dirección de correo electrónico {this.props.email} , 
              domicilio habitual en {this.props.street}  {this.props.houseNr}  {this.props.floorNr} {this.props.doorNr}, {this.props.zip} {this.props.city}, {this.props.country} , en adelante el ESTUDIANTE.
            </p><br/>
          </div>
        

          <div className="title">
            <h3>MANIFIESTAN</h3><br/>
          </div>
          
          <div className="paragraph">
            <ol>
              <li>Que D. Ariel Cima Porto es propietario de la finca sita en C/ Ample, nº 53 de Barcelona.</li>
              <li>Que {this.state.agency} ha hecho la gestión para la búsqueda del alojamiento al ESTUDIANTE.</li>
              <li>Durante la duración del presente contrato el ESTUDIANTE estudiará {this.props.studies} en  {this.props.school}.</li>
              <li>Que el ESTUDIANTE, está interesado en alojarse en el piso sito en Carrer Ample 53, Principal Primera, 08002 de Barcelona.</li>
              <li>Que el ESTUDIANTE, está interesado en alojarse en la habitación Nr {this.props.roomNr}.</li>
              <li>Por el que se firma el presente contrato de uso y disfrute de habitación en piso compartido, sin que dicho alojamiento suponga en ningún caso un arrendamiento ni total ni parcial de la vivienda.</li>
            </ol><br/>
          </div>
      
          <div className="title">
            <h3>ACUERDAN</h3><br/>
          </div>
          
          <div className="sub-title">
            <h2>Primero: Periodo del arrendamiento. </h2>
          </div>

          <div className="paragraph">
            <p>El ESTUDIANTE se alojará desde el {this.props.checkIn} hasta el {this.props.checkOut}, siendo la habitación de uso EXCLUSIVO, y pudiendo utilizar junto el resto de estudiantes todas las zonas comunes.<br/>
                El horario de entrada el primer día del contrato será entre las 9am y las 10pm, y la salida de la vivienda el último día de contrato será con anterioridad a las 12am. <br/>
                Ample 53 priorizará que los estudiantes que se alojen en el piso sean personas que cursen los mismos estudios o con un perfil similar.
            </p><br/>
          </div>

          <div className="sub-title">
            <h2>Segundo: Cuota mensual. </h2>
          </div>
          
          <div className="paragraph">
            <p>El ESTUDIANTE abonará un importe mensual de {this.totalRent}euros <span>suministros incluidos</span> con anterioridad al día 5 de cada mes en el número de cuenta de Ariel Cima Porto:</p>
          </div>

          <div className="chart">
            <h6>Beneficiario: Ariel Cima Porto </h6><br/>
            <h6>Entidad financiera: Caja de Ingenieros </h6><br/>
            <h6>Dirección entidad financiera: Via Laietana 39, 08003 Barcelona</h6><br/>
            <h6>Número de cuenta: 3025-0002-4614-3339-2076 </h6><br/>
            <h6>Código IBAN ES73-3025-0002-4614-3339-2076  </h6><br/>
            <h6>Código Swift: CDENESBBXXX</h6><br/>
          </div>

          <div className="paragraph">
            <p><span>No se procederá a la entrega de llaves si no estuviera previamente abonado la totalidad dela fianza y el primer mes de alquiler.</span></p>
          </div>

          <div className="sub-title">
            <h2>Tercero: Fianza y Balance de Pagos, comisiones Bancarias</h2>
          </div>

          <div className="paragraph">
            <p>El ESTUDIANTE dejará en depósito en concepto de fianza un importe de <span>{this.deposit} euros</span> para cubrir posibles desperfectos en la vivienda. </p>
          </div>

          <table>
            <tr>
              <th>BALANCE DE PAGOS</th>
            </tr>

            <tr>
              <th>Concepto</th>
              <th>Importe</th>
              <th>Pagado</th>
              <th>A pagar</th>
            </tr>

            <tr>
              <th>Depósito</th>
              <th>{this.deposit}</th>
              <th>{this.state.payedDeposit}</th>
              <th>{this.balanceDeposit}</th>
            </tr>

            <tr>
              <th>Alquiler 1er mes</th>
              <th>{this.state.rent}</th>
              <th>{this.state.payedRent}</th>
              <th>{this.balanceRent}</th>
            </tr>

            <tr>
              <th>TOTAL A PAGAR</th>
              <th>{this.toBePayedAtCheckIn}</th>
            </tr>

          </table>

          <div className="paragraph">
            <p>En el momento de la firma del presente contrato el pago se puede hacer en efectivo por Transferencia Bancaria antes de la entrega de las llaves. <br/>
              <span>El último mes de alquiler no podrá dejarse de abonar a cuenta de la fianza. Si el alumno no abonara alguna mensualidad, no se le devolverá ningún importe de la fianza y tendrá que abandonar el alojamiento.</span>
            </p>
          </div>

          <div className="sub-title">
            <h2>Cuarto: Comisiones Bancarias </h2>
          </div>

          <div className="paragraph">
            <p>Las comisiones bancarias de todos los pagos realizados por el Estudiante y de la devolución de la fianza deberán ser asumidos por el Estudiante.</p>
          </div>

          <div className="sub-title">
            <h2>Quinto: Suministros.</h2>
          </div>

          <div className="paragraph">
            <p>Los suministros, luz, agua, gas y Internet, no pueden darse de baja por el ESTUDIANTE con independencia que los utilicen o no.</p>
          </div>

          <div className="sub-title">
            <h2>Sexto: Acceso a las zonas comunes de la vivienda. Obligación de colaboración.</h2>
          </div>

          <div className="paragraph">
            <p>La propiedad podrá acceder a las zonas comunes del piso sin necesidad de autorización ni comunicación al ESTUDIANTE.<br/>
              El ESTUDIANTE prestarán toda su colaboración para que la propiedad pueda mostrar el piso a terceras personas.
            </p>
          </div>

          <div className="sub-title">
            <h2>Séptimo: Régimen de visitas con pernoctación.</h2>
          </div>

          <div className="paragraph">
            <p>Las visitas con pernoctación están <span>TOTALMENTE PROHIBIDAS</span>.</p>
          </div>


          <div className="sub-title">
            <h2>Octavo: Régimen de visitas sin pernoctación. Prohibición de fiestas.</h2>
          </div>

          <div className="paragraph">
            <p>El ESTUDIANTE podrán recibir visitas todos los días de duración del contrato, pero siempre durante el horario comprendido entre las 9h y las 22h. Fuera de este horario no podrá haber ninguna persona invitada en el piso. En caso de incumplimiento de esta obligación se descontará de la fianza del estudiante un importe de 100 euros por cada persona que estuviera en el piso fuera del horario establecido.<br/>
              <span>Está totalmente prohibida la celebración de fiestas en el piso. En caso de celebrarse una fiesta serán automáticamente expulsados todos los ESTUDIANTE que convivan en el piso que estuvieran en ella. El ESTUDIANTE que esté en ese momento en el piso deberán informar a Ariel Cima de la celebración de la fiesta para evitar ser también expulsados.</span></p>
          </div>

          <div className="sub-title">
            <h2>Noveno: Comportamiento con los vecinos de la finca.</h2>
          </div>

          <div className="paragraph">
            <p>El presente contrato quedará rescindido debiendo abandonar la vivienda de forma automática si los vecinos de la finca mostraran su disconformidad debido a una inadecuada conducta del ESTUDIANTE.</p>
          </div>

          <div className="sub-title">
            <h2>EL ESTUDIANTE no podrá:</h2>
          </div>

          <div className="paragraph">
            <ul>
              <li>Fumar.</li>
              <li>Llevar animales al piso. </li>
              <li>Realizar perforaciones en la pared bajo ningún concepto, incluyendo la colocación de cuadros, póster, estanterías, o similares.</li>
              <li>Celebrar fiestas </li>
            </ul>
          </div>
          
          <div className="sub-title">
            <h2>Décimo: Reparaciones.</h2>
          </div>

          <div className="paragraph">
            <p>Si fuera necesario la reparación de cualquier elemento de la vivienda, se procederá a su reparación en el menor tiempo posible y razonable, debiendo el ESTUDIANTE soportar los inconvenientes de la reparación sin derecho a una rebaja en el alquiler.<br/>
              Si la reparación impidiera el alojamiento del ESTUDIANTE durante un período de tiempo en la vivienda, se retornaría el importe del alquiler proporcionalmente a los días impeditivos de alojamiento.<br/>
              En caso que deban realizarse reparaciones en electrodomésticos, mobiliario o cualquier otro equipo debido al mal uso del Estudiante, los costos de dichas reparaciones se le imputarán a éste.<br/>
              En caso que no se pueda identificar el responsable de la rotura o desperfecto, los costos se dividirán por el total de los estudiantes alojados en dicho momento.
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimoprimero: Resolución anticipada.</h2>
          </div>

          <div className="paragraph">
            <p>Si el estudiante resolviera el presente contrato con anterioridad al plazo pactado, no le será retornado el importe de la fianza depositado.<br/>
              No obstante, si se pudiera alquilar nuevamente la habitación, se le devolvería al estudiante la parte proporcional de los días alquilados, descontado un importe de 100 euros por los gastos de gestión. 
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimosegundo: Penalización por retraso en el pago. </h2>
          </div>

          <div className="paragraph">
            <p>Si transcurrido el día 5 del mes, el ESTUDIANTE no hubiera pagado el importe del alquiler de la habitación, <span>le serán descontados 25 euros de la fianza depositada</span> en el momento que el propietario efectuara cualquier gestión para su cobro, tanto vía correo electrónico como vía telefónica.<br/>
              Si en un plazo de 5 días desde que se le requiera para el pago de la renta el ESTUDIANTE no hubiere efectuado tampoco el ingreso, el ESTUDIANTE deberá abandonar la vivienda de forma automática.
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimotercero: Mantenimiento en buen estado de la vivienda.</h2>
          </div>

          <div className="paragraph">
            <p>El alquiler de la habitación incluye limpieza semanal de las zonas comunes.<br/>
              No obstante, el ESTUDIANTE deberán mantener limpias las zonas comunes del piso. La propiedad efectuará revisiones periódicas y en el supuesto de que las zonas comunes no se mantuvieran limpias, enviará un equipo de limpieza cuyo coste (15 euros/hora) será abonado a partes iguales entre todos el ESTUDIANTE y descontado directamente de la fianza.
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimocuarto: Limpieza final de la habitación.</h2>
          </div>

          <div className="paragraph">
            <p>ELa habitación deberá dejarse en el mismo estado en el que se recibe. Por la limpieza final de la habitación se descontarán al ESTUDIANTE de la fianza un importe de <span>20 euros</span>. </p>
          </div>

          <div className="sub-title">
            <h2>Decimoquinto: Habitación.</h2>
          </div>

          <div className="paragraph">
            <p> Las habitaciones están preparadas para poder cerrarlas con llave. Las habitaciones disponen de almohada y juego de sabanas. <br/>
              Si el ESTUDANTE desea sábanas NUEVAS puede avisar antes de su llegada y deberá abonarlas en el momento de la entrega de llaves <span>50 euros</span>. 
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimosexto: Perdida de las llaves</h2>
          </div>

          <div className="paragraph">
            <p> En caso de pérdida de las llaves del piso, el estudiante deberá abonar 50 euros. Dicho importe será descontado directamente de la fianza<br/>
              Al finalizar la estancia, el estudiante deberá dejar las llaves en la habitación donde ha estado alojado. En caso de que las llaves no estuvieran en dicho lugar, se descontarán 50 euros directamente de la fianza.
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimoséptimo: Juzgados y Tribunales de Barcelona. </h2>
          </div>

          <div className="paragraph">
            <p>Las partes, renunciando a su propio fuero, someten cualquier divergencia surgida del presente contrato a los Juzgados y Tribunales de Barcelona.
            </p>
          </div>

          <div className="sub-title">
            <h2>Decimoctavo: Seguridad. </h2>
          </div>

          <div className="paragraph">
            <p>El piso podrá estar dotado de cámaras de seguridad dirigidas a la puerta de entrada del alojamiento.
            </p>
          </div>




          <div className="firmasField">

            <div className="firma">
              <p>Ariel Cima Porto</p>
            </div>
            
            <div className="firma">
              <p> EL ESTUDIANTE{this.props.name} {this.props.surname}</p>
            </div>

          </div>

        </div>

      </div>

    );
  }

}
