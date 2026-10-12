import { Definition } from "@garlic/ui";

export default function Page() {
  return (
    <>
      <p className="text-3xl text-black font-bold mb-4">Definition</p>

      <p className="text-xl text-black font-bold mb-4">All definition positions</p>
      <div className="flex flex-col gap-32">
        {/* bottom */}
        <div className="grid grid-cols-3 gap-32 justify-items-center">
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "bottom-left",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            bottom-left
          </Definition>
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "bottom",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            bottom
          </Definition>
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "bottom-right",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            bottom-right
          </Definition>
        </div>

        {/* left - right */}
        <div className="grid grid-cols-3 gap-32">
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg justify-self-start"
            tooltip={{
              position: "left",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            left
          </Definition>
          <div></div>
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg justify-self-end"
            tooltip={{
              position: "right",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            right
          </Definition>
        </div>

        {/* top */}
        <div className="grid grid-cols-3 gap-32 justify-items-center">
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "top-left",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            top-left
          </Definition>
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "top",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            top
          </Definition>
          <Definition
            definition="Prevents garlic from burning"
            className="bg-amber-500 text-white p-4 rounded-lg"
            tooltip={{
              position: "top-right",
              className: "bg-fuchsia-200 text-black p-4 rounded-lg",
              show: true,
            }}
          >
            top-right
          </Definition>
        </div>
      </div>

      <p className="text-xl text-black font-bold mb-4">Inline definition</p>
      <span className="relative items-center">
        Cook the garlic with its{" "}
        <Definition
          definition="Prevents garlic from burning"
          className="bg-amber-500 text-white p-4 rounded-lg"
          tooltip={{
            position: "top",
            className: "bg-fuchsia-200 text-black p-4 rounded-lg",
          }}
        >
          skin on
        </Definition>
        {" "}for 1 minute.
      </span>
    </>
  );
}
