type SkillProps = {
  name: string;
  src: string;
};

export function Skill({ name, src }: SkillProps) {
  return (
    <div className="group my-2  flex flex-col items-center shrink-0">
      <button
        className={`border-transparent h-28 w-28 box-content flex items-center justify-center border-8 bg-clip-content hover:border-collapse hover:border-8 hover:border-solid hover:border-blue rounded-full hover:animate-pulsate bg-gray`}
      >
        <img src={src} alt={name} width={65} className="fill-white" />
      </button>

      <h3 className="opacity-0 group-hover:opacity-100 relative top-1 text-blue text-xl">
        {name}
      </h3>
    </div>
  );
}
