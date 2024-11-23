import classNames from "classnames";
import { View } from "../lib/types";

interface ViewTabProps {
  view: View;
  setView: (view: View) => void;
}

const ViewTab = ({ view, setView }: ViewTabProps) => {
  return (
    <div className="flex items-center mx-auto p-1 max-w-96 bg-zinc-200 rounded text-sm">
      <button
        className={classNames("p-1 grow shrink-0 rounded", {
          "opacity-50": view !== View.FORM,
          "bg-zinc-50": view === View.FORM,
        })}
        onClick={() => setView(View.FORM)}
      >
        Form
      </button>
      <button
        className={classNames("p-1 grow shrink-0 rounded", {
          "opacity-50": view !== View.DASHBOARD,
          "bg-zinc-50": view === View.DASHBOARD,
        })}
        onClick={() => setView(View.DASHBOARD)}
      >
        Dashboard
      </button>
    </div>
  );
};

export default ViewTab;
