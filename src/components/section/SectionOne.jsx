import LeftContent from "../Other/LeftContent";
import NavBar from "../Other/Nav";
import RightContent from "../Other/RightContent";
import Stack from "../Other/stack";

const SectionOne = () => {
    return ( 
        <main className="mx-auto w-full  max-w-7xl">
            <NavBar />
            <div className="flex flex-col rounded-t-mdS md:flex-row">
                <LeftContent />
                <RightContent />
            </div>
            <Stack />
        </main>
     );
}
 
export default SectionOne;
