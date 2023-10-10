import {Trash, Pencil} from 'phosphor-react'
import { Conta } from "./Conta";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface Conta {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'pagar' | 'receber';
}
export function Extrato() {
  // Aqui faremos a chamada para a API com Axios
  // Buscaremos as contas no banco de dados via API-REST

  const contas: Conta[] = [
    { id: 1, descricao: 'Salario Outubro', valor: 3000.00, tipo: 'receber' },
    { id: 2, descricao: 'Almoço', valor: 80.00, tipo: 'pagar' },
    { id: 3, descricao: 'Transporte', valor: 400.00, tipo: 'pagar' },
    { id: 4, descricao: 'Celular', valor: 200.00, tipo: 'pagar' },
    { id: 5, descricao: 'Aluguel Sala Comercial', valor: 900, tipo: 'receber' },
    { id: 6, descricao: 'Criação de Identidade visual', valor: 500.00, tipo: 'receber' },
    { id: 7, descricao: 'Criação de Identidade visual', valor: 500.00, tipo: 'receber' },
    { id: 8, descricao: 'Criação de E-BOOK', valor: 200.00, tipo: 'receber' },
    { id: 9, descricao: 'Compra de material', valor: 300.00, tipo: 'pagar' },
    { id: 10, descricao: 'Hospedagem e Dominio', valor: 240.00, tipo: 'pagar' },

  ];

  const totalPagar = contas.filter(conta => conta.tipo === 'pagar')
    .reduce((total, conta) => total + conta.valor, 0)
  const totalReceber = contas.filter(conta => conta.tipo === 'receber')
    .reduce((total, conta) => total + conta.valor, 0)

  const saldo = totalReceber - totalPagar;

  return (
    <div>
      <h2>Extrato</h2>
      <table className="table-auto">
        <thead>
          <tr className="border bg-blue-200 text-blue-800 px-4 py-2">
            <td className="px-4 py-2 border border-blue-800 font-semibold text-xl text-center">ID</td>
            <td className="px-4 py-2 border border-blue-800 font-semibold text-xl text-center">Descrição</td>
            <td className="px-4 py-2 border border-blue-800 font-semibold text-xl text-center">Valor</td>
            <td className="px-4 py-2 border border-blue-800 font-semibold text-xl text-center">Tipo</td>
            <td colSpan={2} className="px-4 py-2 border border-blue-800 font-semibold text-xl">Ações</td>
          </tr>
        </thead>
        <tbody>
          {contas.map(conta=>(
            <tr>
              <td className="border border-blue-600 px-4 py-2">{conta.id}</td>
              <td className="border border-blue-600 px-4 py-2">{conta.descricao}</td>
              <td className="border border-blue-600 px-4 py-2">{conta.valor.toFixed(2)}</td>
              <td className="border border-blue-600 px-4 py-2">{conta.tipo}</td>
              <td className="border border-blue-600 px-4 py-2">
              <button className="px-4 py-2 text-blue-900">
                <Pencil size={20}/>
              </button>
              <button  className="px-4 py-2 text-red-800">
                <Trash size={20}/>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex space-x-4 mt-5">
        <div className=" flex-col p-4 max-w-sm mx-auto bg-green-300 rounded-xl flex items-center shadow-md space-x-4s">
          <h3 className="font-semibold text-2xl">Total a receber:</h3>
          <p className="text-3xl text-green-700">R${totalReceber.toFixed(2)}</p>
        </div>

        <div className=" flex-col p-4 max-w-sm mx-auto bg-red-300 rounded-xl flex items-center shadow-md space-x-4s">
          <h3 className="font-semibold text-2xl">Total a pagar:</h3>
          <p className="text-3xl text-red-700">R${totalPagar.toFixed(2)}</p>
        </div>
        <div className=" flex-col p-4 max-w-sm mx-auto bg-yellow-300 rounded-xl flex items-center shadow-md space-x-4s">
          <h3 className="font-semibold text-2xl">Saldo atual:</h3>
          <p className="text-3xl text-blue-700">R$ {saldo.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}