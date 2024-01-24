import Modal from "@/components/core/Modal";
import getData from "@/services";

export default async function DetailPage(props: any) {
  const { params } = props;
  const detail = await getData(
    "http://localhost:3000/api/products?id=" + params.id
  );
  console.log(detail);
  return (
    <Modal>
      <img
        src={detail.data.image}
        alt=""
        className="w-full object-cover h-[57vh] col-span-2"
      />
      <div className="bg-white px-6 p-4">
        <h3>{detail.data.name}</h3>
        <h3>Price : {detail.data.price}</h3>
      </div>
    </Modal>
  );
}
