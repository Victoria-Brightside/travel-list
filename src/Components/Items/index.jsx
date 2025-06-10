import "./Items.css"

function Items() {

    return (
        <>
            <section className="getInfo_container">
                <h2 className="getInfo_question">¿Qué necesitas para tu viaje?</h2>
                <input className="getInfo_number" type="number" />
                <input className="getInfo_text" type="text" placeholder="Pasaporte.." />
                <button className="getInfo_btn"> Agregar </button>
            </section>

            <section className="items_container">
                <div className="single_item" >
                    <input className="check_item" type="checkbox" />
                    <h3> Nombre item </h3>
                </div>


            </section>
        </>
    )
}

export default Items;