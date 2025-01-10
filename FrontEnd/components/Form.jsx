

const Form = () => {
    return (
        <>
            <h1 className="text-4xl my-10 font-semibold text-center"> Welcome to Spam Email Detector</h1>
            <div className="form flex flex-col w-[100vw] lg:px-40 md:px-28 sm:px-16 max-sm:px-6">
                <label htmlFor="input-email" className="my-2">Email</label>
                <textarea id="input-email" className="border border-black h-96 rounded-md focus:outline-none px-4 focus:ring-4 focus:ring-amber-200 focus:border-amber-600 resize-none py-4" placeholder="Only the Body"></textarea>
                <div className="flex justify-end">
                    <button className="bg-amber-600 my-8 px-8 py-2 rounded-md text-white hover:bg-[#d37000] w-fit ">Check</button>
                </div>
            </div>
        </>
    )
}

export default Form