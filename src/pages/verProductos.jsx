import { GridProductos } from "../components/GridProductos"

export const VerProductos = () => {

    return (
        
        <>
            <h1 className="text-center p-4">Productos guardados</h1>
            <div className="container d-flex justify-content-center mb-3  p-4 ">

                <GridProductos/>
           </div>
        </>
    )
}