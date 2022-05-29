import { useEffect, useState } from "react";

const usePurchase = itemId => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [itemId]);
    return [items];
}
export default usePurchase;