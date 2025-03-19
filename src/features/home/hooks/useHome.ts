/**
* Hook padrão para a feature home
*/
import { useState, useEffect } from 'react';

function useHome() {
const [data, setData] = useState(null);
    useEffect(() => {
        // TODO: Implementar a lógica do hook
    }, []);

    return data;
}

export default useHome;