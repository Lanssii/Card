export default function card(props) {
  return (
    <div
      className={`bg-[#CBDCEB] relative rounded-3xl rounded-br-3xl pt-6 pr-10 pb-12 pl-6 h-[250px] ${
        props.number % 2 === 0 ? "w-[500px]" : "w-[350px]"
      }`}
    >
      <h1 className="text-black-900 font-bold text-xl mb-4">{props.title}</h1>
      <p>{props.text}</p>
      <div className="bg-transparent z-1 w-8 h-8 rounded-br-2xl absolute right-0 bottom-11 shadow-[10px_2px_0_rgba(109,148,197,1)]"></div>
      <div className="bg-transparent absolute bottom-0 right-11 z-2 rounded-br-2xl w-6 h-6 shadow-[2px_10px_0_rgba(109,148,197,1)]"></div>
      <div className="absolute bottom-0 right-0 pt-1 pl-1  flex justify-end items-end bg-[#6D94C5] rounded-tl-3xl">
        <div className="bg-[#CBDCEB] rounded-full w-10 h-10 flex justify-center items-center text-black-900 font-semibold text-xl">
          {props.number}
        </div>
      </div>
    </div>
  );
}
