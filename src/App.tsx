import './App.css'
import { useCompraData } from './hooks/useCompraData'
import moment from 'moment';

function App() {

  const { data }  = useCompraData();

  function formatNumberWithDecimalPlaces(number) {
    if (isNaN(number)) {
      return 'Número inválido';
    }
  
    const formattedNumber = number.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formattedNumber;
  }  

  return (
    <>
      <div>
        <h1>Valor Total</h1>
        <h1>{ formatNumberWithDecimalPlaces(data?.valorTotal) }</h1>
      </div>
      <div>
        <h1>Valor Total</h1>
        <h1>{ formatNumberWithDecimalPlaces(data?.valorProximoMes) }</h1>
      </div>
      <br/>
      <div>
        <table className="w-auto">
          <thead>
            <tr>
              <th className="text-md px-6-py-3">Compra</th>
              <th className="text-md px-6-py-3">Data da Parcela</th>
              <th className="text-md px-6-py-3">Valor Total</th>
              <th className="text-md px-6-py-3">Valor da Parcela</th>
              <th className="text-md px-6-py-3">Valor Faltante</th>
              <th className="text-md px-6-py-3">Numero da Parcela</th>
              <th className="text-md px-6-py-3">Numero Total de Parcelas</th>
              <th className="text-md px-6-py-3">Última Parcela ?</th>
              <th className="text-md px-6-py-3">Nome do Cartão</th>
              <th className="text-md px-6-py-3">Pessoa</th>
            </tr>
          </thead>
          <tbody>
            {data?.compras.map(compra => 
              <tr> 
                <td className='text-md px-6-py-3'> {compra.nomeCompra} </td>
                <td className='text-md px-6-py-3'> {moment(compra.dataParcela).format('DD/MM/YYYY')} </td>
                <td className='text-md px-6-py-3'> {formatNumberWithDecimalPlaces(compra.valorTotal)} </td>
                <td className='text-md px-6-py-3'> {formatNumberWithDecimalPlaces(compra.valorParcela)} </td>
                <td className='text-md px-6-py-3'> {formatNumberWithDecimalPlaces(compra.valorFaltante)} </td>                
                <td className='text-md px-6-py-3'> {compra.numeroParcela} </td>
                <td className='text-md px-6-py-3'> {compra.numeroTotalParcela} </td>
                <td className='text-md px-6-py-3'> {compra.ultimaParcela} </td>
                <td className='text-md px-6-py-3'> {compra.nomeCartao} </td>
                <td className='text-md px-6-py-3'> {compra.nomePessoa} </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
