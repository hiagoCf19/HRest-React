const FormAd = ({ especificacao, value, placeholder }) => {
  return (
    <div id={especificacao} className='mr-[50px]' >
      <div className='w-auto flex flex-row' >
        <label
          htmlFor={`txt${especificacao}`}
          className='w-min medium'

        >
          {especificacao}
        </label>
      </div>
      <input type="text" value={value} className='bg-white py-[10px] px-[15px] shadow-xl border-none rounded-xl  my-1 max-w-[300px] outline-none italic text-color21 medium text-[1rem]' placeholder={placeholder} readOnly />
    </div>
  )
}
export default FormAd