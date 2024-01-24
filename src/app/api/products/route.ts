// untuk membuat API route, kita beri nama file yaitu route
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Nike Air Force 1'07",
    price: 1909000,
    image : 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/a8254cc4-b776-47b2-898f-7e6e1f564c94/air-force-1-07-shoes-RgcF1Q.png'
  },
  {
    id: 2,
    title: "Nike Air Max 90 SE",
    price: 2199000,
    image : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e91e13c-f515-45c2-9c30-25f634e49d6c/air-max-90-se-shoes-FQ39pC.png'
  },
  {
    id: 3,
    title: "Nike Air Max 100",
    price: 2199000,
    image : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b8e1cab-afa0-4b7b-a275-f19dc35fdf07/air-max-1-shoes-nVDKqc.png'
  },
  
  
];
export async function GET(request: NextRequest) {
  console.log(request);
  const { searchParams } = new URL(request.url);
  // untuk mengambil params kita bisa menggunakan NextRequest, lalu kita buat URL baru yang berasal dari request.url
  // Lalu kita ambil id nya dengan cara get
  const id = searchParams.get("id");
  if (id) {
    // jika ada id, return data berdasarkan id
    const detailProduct = await retrieveDataById('products', id)
    // lalu kita tangani jika tidak menemukan item yang ,memiliki id yang sama
    if(!detailProduct){
        return NextResponse.json({ status: 404, message: "Data not found", data : []})
    }
    return NextResponse.json({ status: 200, message: "ok", data : detailProduct });
  }
  const products = await retrieveData('products')
  return NextResponse.json({ status: 200, message: "ok", data : products });
}
