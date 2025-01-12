

const Toast = (props) => {
    return (
        <div
            className={`absolute border border-amber-950 w-80 max-sm:w-64 h-24 rounded-md left-0 right-0 mx-auto bg-amber-50 px-4 flex flex-col justify-center transition-opacity ${props.display ? "opacity-100" : "opacity-0"} z-50`}
        >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer absolute right-3 top-3" onClick={() => { props.setDisplay(false) }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <h2 className='text-2xl font-normal w-fit'>Spam: <strong>{props.isSpam === 'true' ? "True" : "False"}</strong></h2>
            <p className='text-sm w-fit'>The email you provided was {props.isSpam === 'true' ? "" : "not "}a spam email.</p>
        </div>
    )
}

export default Toast