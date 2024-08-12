import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4 text-">
      <Badge variant={"default"}>Badge</Badge>
      <Badge variant={"destructive"}>Badge</Badge>
      <Badge variant={"outline"}>Badge</Badge>
      <Badge capitalize variant={"info"}>holA</Badge>
      <Badge capitalize variant={"success"} >munDo</Badge>
    </div>
  );
}
