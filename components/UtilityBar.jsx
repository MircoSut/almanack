import { Button } from "./ui/button";

const UtilityBar = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-4 items-center">
      <Button>Create Note</Button>
      <div>Search bar</div>
      <div>Filters</div>
      <Button>AI</Button>
    </div>
  );
};

export default UtilityBar;
