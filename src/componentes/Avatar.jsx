export default function Avatar({url}) {
    return (
        <div className="m-3 rounded-full border-[5px] border-[#67A5DF] object-cover overflow-hidden w-[200px] h-[200px] text-center" >
            <img className="w-full" src={url} alt="avatar" />
        </div>

    )
}