export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  // lalu kita panggil saat layouting untuk merender folder yang telah deiberi @
  return (
    <div className="p-5">
      {children}
      <div className="mt-5 flex gap-4">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
}
