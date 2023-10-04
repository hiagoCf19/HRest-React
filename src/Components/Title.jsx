const Title = ({ descricao, title }) => {
  return (
    <span  >
      <b className="flex justify-center text-colorPrimary  text-base uppercase tracking-[5px]">{descricao}</b>
      <h1 className="sm:text-[33px] text-[30px]">
        <b> {title}</b>
      </h1>
    </span>
  )
}
export default Title