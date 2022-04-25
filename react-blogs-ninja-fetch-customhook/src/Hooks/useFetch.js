import { useEffect, useState } from "react";
const useFetch=(url) =>{
    const [data,setData] = useState(null);
    const [pending,setPending] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    
    useEffect(()=>{
        const abort = new AbortController();
        setTimeout(()=>{
            fetch(url,{signal: abort.signal})
            .then((res) => {
                if(!res.ok){
                    throw Error('Something Went Wrong')
                }
                return res.json()
            })
            .then((data)=>{
                setData(data);
                setPending(false);
                setErrorMessage(null)
            }).catch((err) =>{
                setPending(false);
                setData([]);
                setErrorMessage(err.message)
            })
        },1000)

        return () => abort.abort();
    },[url]);
    return {data,pending,errorMessage}
}

export default useFetch;