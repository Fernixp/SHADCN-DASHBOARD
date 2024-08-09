import { payments } from "@/data/payments.data";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button";
async function fetchData() {
  return payments;
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div className="mx-auto py-5">
      <div className="flex justify-between items-center ">
      <div className="text-yellow-500 font-bold text-xl">CLIENTES</div>
      <Button variant={'default'}>Agregar</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}