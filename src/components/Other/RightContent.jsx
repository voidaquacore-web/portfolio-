import illustration from '../../assets/illustration.png'

const RightContent = () => {
    return (
        <div className="flex w-full items-end justify-center bg-black px-6 md:w-1/2 md:px-0">
            <img className="h-auto max-h-[32rem] w-full max-w-xl object-contain md:max-h-none md:max-w-none" src={illustration} alt="Developer portfolio illustration" />
        </div>
      );
}
 
export default RightContent;
