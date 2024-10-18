type ProjectProps = {
  name: number;
};

export function Project({ name }: ProjectProps) {
  return (
    <div className="group my-2 h-[22rem] w-[22rem] flex flex-col items-center shrink-0 ">
      <h3 className="opacity-0 group-hover:opacity-100 relative bottom-2 text-blue text-3xl">
        {name}
      </h3>

      <button
        className={
          "border-transparent  box-content flex items-center justify-center border-8 bg-clip-content p-2 group-hover:border-collapse group-hover:border-8 group-hover:border-solid group-hover:border-blue rounded-3xl hover:animate-pulsate-border group bg-gray"
        }
      >
        <div className="h-80 w-80 bg-[url('https://github.com/Gilvan-Araujo.png')] bg-contain ">
          {name}
        </div>
      </button>
    </div>
  );
}
