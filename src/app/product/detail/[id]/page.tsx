import getData from "@/services";

export default async function DetailPage(props: any) {
  const { params } = props;
  const detail = await getData(
    "http://localhost:3000/api/products?id=" + params.id
  );
  console.log(detail);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700 ">
        <img
          src={detail.data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white px-6 p-4">
          <h3>{detail.data.title}</h3>
          <h3>Price : {detail.data.price}</h3>
        </div>
      </div>
    </div>
  );
}
