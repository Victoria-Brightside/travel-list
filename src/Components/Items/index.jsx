import "./Items.css"
import { useState } from "react";

function Items() {
    const [num, setNum] = useState("");
    const [item, setItem] = useState("");
    const [arrayItems, setArrayItems] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!num || !item) return;
        setArrayItems(listaPrevia => [...listaPrevia, { num, item }]);
        console.log(num, item);
        setNum("");
        setItem("");
    }


    return (
        <>
            <section className="getInfo_container">
                <h2 className="getInfo_question">¿Qué necesitas para tu viaje?</h2>
                <form onSubmit={handleSubmit} className="getInfo_form">
                    <input
                        className="getInfo_number"
                        type="number"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                    <input
                        className="getInfo_text"
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        placeholder="Pasaporte.." />
                    <button className="getInfo_btn" type="submit"> Agregar </button>
                </form>
            </section>

            <section className="items_container">
                {arrayItems.map((obj, index) => (
                    <div className="single_item" key={index}>
                        <input className="check_item" type="checkbox" />
                        <h3> {obj.num} {obj.item} </h3>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Items;