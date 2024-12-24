import axios from "axios";
import { useEffect,useState } from "react";

const useFetchDataGet = (url:string) => {
    const [data,setData] = useState<any>(null);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setData(data);
                setLoading(false);
            } catch (error) {
                // @ts-ignore
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    },[url]);

    return {data,loading,error};
}