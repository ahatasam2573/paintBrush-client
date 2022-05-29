import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://frozen-brushlands-82202.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems];
}

export default useItems;