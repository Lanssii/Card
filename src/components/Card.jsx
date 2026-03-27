export default function card(props) {
  return (
    <div className="bg-[#CBDCEB] relative rounded-3xl rounded-br-3xl pt-6 pr-10 pb-12 pl-6 ">
      <h1 className="text-black-900 font-bold text-xl">Subscribe</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt velit
        qui molestiae doloribus tempora, officiis obcaecati exercitationem nisi
        libero placeat, ad ut, quo omnis quaerat dignissimos non inventore ea
        distinctio!
      </p>
      <div className="bg-transparent z-1  w-4 h-4 rounded-br-lg absolute right-0 bottom-8 shadow-[4px_4px_0_rgba(109,148,197,1)]"></div>
      <div className="bg-transparent absolute bottom-0 right-8 rounded-br-lg w-4 h-4 shadow-[4px_4px_0_rgba(109,148,197,1)]"></div>
      <div className="absolute bottom-0 right-0 pt-1 pl-1  flex justify-end items-end bg-[#6D94C5] rounded-tl-2xl">
        <div className="bg-[#CBDCEB] rounded-full w-7 h-7 flex justify-center items-center text-black-900 font-semibold text-xl">
          {props.number}
        </div>
      </div>
    </div>
  );
}
