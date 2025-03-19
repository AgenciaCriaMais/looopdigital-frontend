/**
* Hook padrão para a feature auth
*/
import { useState, useEffect } from 'react';

function useAuth() {
const [data, setData] = useState(null);
    useEffect(() => {
        // TODO: Implementar a lógica do hook
    }, []);

    return data;
}

export default useAuth;