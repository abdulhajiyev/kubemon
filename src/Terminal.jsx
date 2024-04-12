const Terminal = ({ isVisible, toggleVisibility }) => {
    return (
        <div>
            {/* Transparent overlay */}
            {isVisible && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25 transition-opacity duration-300"
                    style={{ zIndex: '9998' }}
                />
            )}
            {/* Terminal popup */}
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-200 rounded-lg p-4 border transition-opacity duration-300 ${
                    isVisible
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                style={{ zIndex: '9999', width: '85%', height: '85%' }}
            >
                <div className="flex justify-between gap-2 items-center p-2">
                    <div className='font-bold text-2xl'>
                        SSH2 Terminal Emulator
                    </div>
                    <div className="gap-2 flex">
                        <button
                        type='button'
                            className="btn btn-circle btn-outline btn-sm"
                            // style={{
                            //     position: 'absolute',
                            //     top: '5px',
                            //     right: '5px',
                            //     padding: '5px 10px',
                            //     border: 'none',

                            //     cursor: 'pointer',
                            //     transition: 'opacity 0.3s ease',
                            // }}
                            onClick={() => {
                                toggleVisibility()
                                setTimeout(() => toggleVisibility(), 300)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Terminal