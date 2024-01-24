// untuk membuat dynamic routing, kita masukkan fila page.tsx kedalam folder yang nama nya terbungkus array sepert [slug]
// untuk menangkap params nya kita gunakan params lalu nama dynamic route nya contoh slug, id, dll

import app from "@/lib/firebase/init";
import getData from "@/services";
import Link from "next/link";

// unruk menangkap semua parameter, kita gunakan [...nama  folder]
type DetailProductPageProps = {
  params: {
    slug: string;
  };
};

console.log(app)

const DetailProductPage = async (props: DetailProductPageProps) => {
  const { params } = props;
  console.log(params);
  const products = await getData("http://localhost:3000/api/products")
  console.log(products);
  return (
    <div>
      {/* <h1>{params.slug ? "Detail product page" : "Product Page"}</h1> */}
      <div className="grid grid-cols-3 place-items-center">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <Link
            href={'/product/detail/' + product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3 "
              key={product.id}
            >
              
                <img
                  className="p-8 rounded-t-lg h-80 w-full object-cover"
                  src={product.image}
                  alt="product image"
                />
              
              <div className="px-5 pb-5">
                
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                    {product.name}
                  </h5>
                

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.price.toLocaleString("ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </span>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* {params.slug ? (
        <>
          <h1>Category : {params.slug[0]}</h1>
          <h1>product : {params.slug[1]}</h1>
          <h1>id : {params.slug[2]}</h1>
        </>
      ) : null} */}
    </div>
  );
};
export default DetailProductPage;
