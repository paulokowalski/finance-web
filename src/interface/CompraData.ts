import { CompraParcelaData } from "../interface/CompraParcelaData";

export interface CompraData {
    valorTotal:number,
    valorProximoMes:string,
    compras:CompraParcelaData[]
}