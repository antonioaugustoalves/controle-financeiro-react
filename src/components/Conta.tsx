interface ContaProps {
  id?: number; // Usar interrogação quando a  prop for opcional
  descricao: string;
  valor: number;
  tipo: string;
}
export function Conta(props:ContaProps){
  return(
    <div className="container-conta">
      <h3>{props.descricao}</h3>
      <p>Valor: R$ {props.valor} </p>
      <p>Tipo: {props.tipo}</p>
    </div>
  )
}