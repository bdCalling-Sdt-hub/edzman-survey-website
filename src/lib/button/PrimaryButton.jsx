
function PrimaryButton({ text }) {
    return (
        <div>
            <button className='bg-[#00B0F2] hover:bg-[#00B0F2]/70 rounded-lg text-sm px-4 py-3 font-semibold text-white'>
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton