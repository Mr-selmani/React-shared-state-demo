import { useStore } from "../store/useStore";
import { useForm } from "react-hook-form";

export function ArrayUpdater() {
  const { array, addToArray, removeFromArray } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ value: string }>({ mode: "onSubmit" });

  const onSubmit = (data: { value: string }) => {
    addToArray(data.value.trim());
    reset();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-4 max-w-lg mx-auto w-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-darkteal">
        Array Updater
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 mb-2 mt-auto"
      >
        <input
          type="text"
          {...register("value", { required: "Please enter an item" })}
          className={`w-full px-4 py-2 border rounded-lg bg-white text-darkteal focus:outline-none focus:ring-2 focus:ring-accent transition placeholder:text-teal shadow ${
            errors.value ? "border-red-400 bg-red-50" : "border-teal"
          }`}
          placeholder="Enter an item"
        />
        <button
          type="submit"
          className="bg-teal text-primary font-semibold px-6 py-2 rounded-lg shadow hover:bg-darkteal transition cursor-pointer"
        >
          Add
        </button>
      </form>
      <div className="mb-2 text-darkteal flex items-start gap-1">
        Current:{" "}
        <div className="font-mono flex flex-wrap flex-1 gap-1">
          {array.map((item, index) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 border border-gray-300 px-1 rounded cursor-pointer text-xs mt-1"
              onClick={() => removeFromArray(index)}
            >
              {item} x
            </span>
          ))}
          {array.length === 0 && (
            <span className="text-gray-400 italic mt-px text-xs">No items</span>
          )}
        </div>
      </div>
    </div>
  );
}
