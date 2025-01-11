import { useContext } from "react"
import Context from "../Context/ContextInit"


const Form = () => {
    const context = useContext(Context);
    const { ref, textareaRef } = context;
    return (
        <div className=" bg-white py-10" ref={ref}>
            <h1 className="text-4xl font-semibold text-center max-[590px]:text-3xl max-[480px]:px-5"> Welcome to Spam Email Detector</h1>
            <div className="form flex flex-col w-[100vw] lg:px-40 md:px-28 sm:px-16 max-sm:px-6">
                <label htmlFor="input-email" className="my-2">Email</label>
                <textarea id="input-email" className="h-96 rounded-md focus:outline-none px-4 focus:ring-4 focus:ring-amber-200 border border-amber-600 resize-none py-4" placeholder="Only the Body" ref={textareaRef}></textarea>
                <div className="flex justify-end">
                    <button className="bg-amber-600 my-8 px-8 py-2 rounded-md text-white hover:bg-[#d37000] w-fit ">Check</button>
                </div>
            </div>
        </div>
    )
}

export default Form