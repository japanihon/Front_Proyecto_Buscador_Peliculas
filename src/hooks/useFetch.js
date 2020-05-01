import {useState, useEffect} from 'react';

export default function useFetch(url, option){
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        
        const prueba = async ()=>{
            try{
                const res = await fetch(url, option);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);
            }
        }
        prueba();
        
        /*
        //OTRA FORMA DE LLAMAR A LA API
       fetch(url).
       then((response)=>{
           return response.json();
        }).then((json)=>{
           setResult(json);
           setLoading(false);
       }).catch(error=>{
           setError(error);
       });
       */

    },[option, url]);

    return {loading, result, error}
}