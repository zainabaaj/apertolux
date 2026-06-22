"use client";
import Image from "next/image";
import { useState } from "react";

export default function ModelComparison({ models }) {
  const [compareModels, setCompareModels] = useState([]);

  const toggleCompare = (model) => {
    setCompareModels((prev) => {
      const exists = prev.find((m) => m.name === model.name);

      if (exists) {
        return prev.filter((m) => m.name !== model.name);
      }

      if (prev.length >= 3) {
        return [...prev.slice(1), model];
      }

      return [...prev, model];
    });
  };

  return (
    <>
      {/* Product Grid */}

      <div className="grid gap-8 lg:grid-cols-3 bg-[#F8F8F8] mx-8 ">
        {models.map((item) => {
          const selected = compareModels.find(
            (m) => m.name === item.name
          );

          return (
            <div
              key={item.name}
              className="group overflow-hidden rounded-[36px] bg-white border border-gray-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-medium text-[#0A192F]">
                  {item.name}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                  {item.description}
                </p>

                

                <button
                  onClick={() => toggleCompare(item)}
                  className={`mt-8 w-full rounded-full py-3 transition ${
                    selected
                      ? "bg-[#0A192F] text-white"
                      : "border border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white"
                  }`}
                >
                  {selected ? "Selected" : "Compare"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Compare Drawer */}

  {compareModels.length >= 2 && (
  <section className="py-24 lg:py-32">

    <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

      <div className="mb-16 text-center">

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
          Model Comparison
        </p>

        <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
          Compare Selected Models
        </h2>

        <p className="text-gray-600">
          Side-by-side comparison of your selected hot tubs.
        </p>

      </div>

      <div className="overflow-hidden rounded-[36px] border border-gray-200 bg-white">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>

              <tr className="border-b border-gray-200">

                <th className="p-8 text-left text-gray-400">
                  Feature
                </th>

                {compareModels.map((model) => (
                  <th
                    key={model.name}
                    className="p-8 text-left"
                  >
                    <div className="space-y-4">

                      <Image
                        src={model.image}
                        alt={model.name}
                        width={150}
                        height={150}    
                        className="h-28 w-28 object-contain"
                      />

                      <div className="text-xl font-light text-[#0A192F]">
                        {model.name}
                      </div>

                    </div>
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              {[
                ["Capacity", "capacity"],
                ["Volume", "volume"],
                ["Diameter", "diameter"],
                ["Heater", "heater"],
                ["Weight", "weight"],
              ].map(([label, key]) => (

                <tr
                  key={key}
                  className="border-b border-gray-100"
                >

                  <td className="p-8 font-medium text-[#0A192F]">
                    {label}
                  </td>

                  {compareModels.map((model) => (
                    <td
                      key={model.name}
                      className="p-8 text-gray-600"
                    >
                      {model[key]}
                    </td>
                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="mt-8 text-center">

        <button
          onClick={() => setCompareModels([])}
          className="rounded-full border border-[#0A192F] px-8 py-3 text-[#0A192F] transition hover:bg-[#0A192F] hover:text-white"
        >
          Clear Comparison
        </button>

      </div>

    </div>

  </section>
)}
    </>
  );
}