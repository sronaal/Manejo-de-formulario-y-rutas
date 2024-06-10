import { FormularioProducto } from "../components/FormularioProducto"

export const AgregarProducto = () => {

    return (

        <>
            <div className="container-fluid mx-auto p-5">
                <div className="d-flex justify-content-center">
                    <div className="col-10">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Agregar Productos</h2>
                            </div>

                            <div className="card-body">

                                <FormularioProducto/>
                                
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}