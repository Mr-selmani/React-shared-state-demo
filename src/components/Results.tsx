import { useStore } from "../store/useStore";

export function Results() {
  const { number, string, array } = useStore();

  return (
    <div className="bg-white rounded-2xl p-6 w-full mt-10 border border-gray-300">
      <h3 className="text-lg font-bold mb-4 text-darkteal">Results</h3>
      <div className="space-y-3">
        <div>
          <span className="block text-teal font-medium text-sm mb-1">
            Number
          </span>
          <span className="text-darkteal font-mono text-2xl font-semibold">
            {number}
          </span>
        </div>
        <div className="border-t border-accent/40 pt-3">
          <span className="block text-teal font-medium text-sm mb-1">
            String
          </span>
          <span className="text-darkteal font-mono text-2xl font-semibold">
            {string || "(empty)"}
          </span>
        </div>
        <div className="border-t border-accent/40 pt-3">
          <span className="block text-teal font-medium text-sm mb-1">
            Array
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {array.length === 0 ? (
              <span className="text-gray-400 italic">No items</span>
            ) : (
              array.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-accent text-darkteal rounded-full px-4 py-1 text-sm font-medium shadow-sm"
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
