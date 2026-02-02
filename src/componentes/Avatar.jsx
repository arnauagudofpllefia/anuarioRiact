export default function Avatar({url}) {
  return (
    <div className="flex justify-center">
      <img className="w-28 h-28 rounded-full object-cover border-4 border-[#67A5DF]" src={url} alt="avatar" />
    </div>
  )
} 