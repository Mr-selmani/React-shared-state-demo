import { useStore } from "../store/useStore";
import { useForm } from "react-hook-form";

export function StringUpdater() {
  const { string, updateString } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ value: string }>({ mode: "onSubmit" });

  const onSubmit = (data: { value: string }) => {
    updateString(data.value);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-4 max-w-lg mx-auto w-full">
      <h3 className="text-lg font-semibold mb-4 text-darkteal">
        String Updater
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-2">
        <input
          type="text"
          {...register("value", { required: "Please enter a string" })}
          className={`w-full px-4 py-2 border rounded-lg bg-white text-darkteal focus:outline-none focus:ring-2 focus:ring-accent transition placeholder:text-teal shadow ${
            errors.value ? "border-red-400 bg-red-50" : "border-teal"
          }`}
          placeholder="Enter a string"
        />
        <button
          type="submit"
          className="bg-teal text-primary font-semibold px-6 py-2 rounded-lg shadow hover:bg-darkteal transition cursor-pointer"
        >
          Update
        </button>
      </form>
      <p className="mb-2 text-darkteal">
        Current: <span className="font-mono">{string || "(empty)"}</span>
      </p>
    </div>
  );
}
