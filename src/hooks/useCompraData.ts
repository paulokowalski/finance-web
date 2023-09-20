import { useQuery } from '@tanstack/react-query'
import axios, {AxiosPromise} from "axios"
import { CompraData } from "../interface/CompraData";

const API_URL = "http://192.168.68.126:8080/finance/v1/compra/10/paulo";

const fetchData = async (): AxiosPromise<CompraData> => {
    const response = axios.get(API_URL, {});
    return response;
}

export function useCompraData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['compra-data'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data
    }
}