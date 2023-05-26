import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// Icons
import { BsFillAlarmFill } from "react-icons/bs";

const Product = () => {
    // 4 - Rota Dinamica
    const {id} = useParams();

    // 5 - Carregamento de dados individual
    const url = "http://localhost:3000/products/" + id;

    const {data: product, loading, error} = useFetch(url);

    console.log(product);

  return (
    <>
        {error && <p>Deu ruim viado logo um erro</p> }
        {loading && <h2 className="reloginho"> <BsFillAlarmFill /> </h2> }
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$: {product.price}</p>
                {/* 6 - Nested routes */}
                <Link to={`/products/${product.id}/info`} >Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product