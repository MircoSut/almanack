import Notes from "@/components/Notes";
import UtilityBar from "@/components/UtilityBar";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col mx-10 my-2 border-2 border-green-500 h-screen">
        <UtilityBar />
        <Notes />
      </div>
    </div>
  );
}
