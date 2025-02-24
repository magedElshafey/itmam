
interface CopyRightProps {
    copyRight? : string
}
const CopyRight : React.FC<CopyRightProps> = ({copyRight}) => {
  return (
    <div className="w-full flex justify-center">
    <p className="w-full md:w-[70%] text-center text-white leading-relaxed">
      {copyRight}
    </p>
  </div>
  )
}

export default CopyRight