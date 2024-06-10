import { useForm } from 'react-hook-form';
import { useProductos } from '../components/ContextProducto'; // Ajusta la ruta según tu estructura

export const FormularioProducto = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: {
            nombreProducto: '',
            categoriaProducto: '',
            precioProducto: '',
            stockProduto: ''
        }
    });

    const { addProducto } = useProductos();

    const onSubmit = (data) => {
        addProducto(data);
        reset(); // Limpiar los campos del formulario
    };

    return (
        <>
            <form className='row g-3' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-md-6 form-group mb-3'>
                    <label className='form-label'>Nombre Producto</label>
                    {errors.nombreProducto?.type === 'required' && <p className='alert alert-danger' role='alert'>El nombre del producto es obligatorio</p>}
                    <input
                        type="text"
                        name='nombreProducto'
                        className='form-control'
                        placeholder='Nombre Productos'
                        {...register("nombreProducto", { required: true })}
                        aria-invalid={errors.nombreProducto ? 'true' : 'false'}
                    />
                </div>

                <div className="col-md-6 form-group mb-3">
                    <label className='form-label'>Categoria Productos</label>
                    {errors.categoriaProducto?.type === 'required' && <p className='alert alert-danger' role='alert'>La categoria es obligatoria</p>}
                    <select
                        className='form-control'
                        {...register("categoriaProducto", { required: true })}
                        aria-invalid={errors.categoriaProducto ? 'true' : 'false'}
                    >
                        <option value="Viveres">Viveres</option>
                        <option value="Electrodomesticos">Electrodomesticos</option>
                        <option value="Aseo">Aseo</option>
                        <option value="Ropa">Ropa</option>
                    </select>
                </div>

                <div className='col-md-6 form-group mb-3'>
                    <label className='form-label'>Precio Producto</label>
                    {errors.precioProducto?.type === 'required' && <p className='alert alert-danger' role='alert'>El precio del producto es obligatorio</p>}
                    <input
                        type="text"
                        name='precioProducto'
                        className='form-control'
                        placeholder='Precio del producto'
                        {...register("precioProducto", { required: true })}
                        aria-invalid={errors.precioProducto ? 'true' : 'false'}
                    />
                </div>

                <div className='col-md-6 form-group mb-3'>
                    <label className='form-label'>Stock Producto</label>
                    {errors.stockProduto?.type === 'required' && <p className='alert alert-danger' role='alert'>Ingrese la cantidad del producto</p>}
                    <input
                        type="text"
                        name='stockProduto'
                        className='form-control'
                        placeholder='Cantidad'
                        {...register("stockProduto", { required: true })}
                        aria-invalid={errors.stockProduto ? 'true' : 'false'}
                    />
                </div>

                <button className='btn btn-success btn-block'>Agregar Producto</button>
            </form>
        </>
    );
};
