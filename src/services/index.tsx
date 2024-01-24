export default async function getData(url : string) {
    // const res = await fetch("http://localhost:3000/api/products", {
    //   cache : 'no-store'
    // });
    // untuk menggunakan caching & revalidation, maka kita beri , dan tambajkan objek
    const res = await fetch(url, {
      // secara default , next.js melakukan caching sehingga tidak melakuak request kembali ke API, namun kita bisa membuat request kembali dengan memberi cache : no-store
      cache: "no-store",
      // walau mengguanakan force-cache kita dapat memeriksa datanya dengan memberi revalidation
      next: {
        // revalidate : 60
        // atau kita bisa memberi revalidation ketika event tertentu
        tags: ["products"],
      },
    });
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  }