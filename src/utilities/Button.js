const Button = ({ name, link, onClick }) => {
  return (
    <>
      {onClick ? (
        <button type="button" onClick={onClick} className="w-[140px] p-2 font-semibold bg-slate-600 text-slate-300 shadow-xl rounded-lg border-2 lg:text-lg hover:opacity-75">
          {name}
        </button>
      ) : (
        <button type="button" className="w-[140px] p-2 font-semibold bg-slate-600 text-slate-300 shadow-xl rounded-lg border-2 lg:text-lg hover:opacity-75">
          <a href={link}>{name}</a>
        </button>
      )}
    </>
  );
};

export default Button;
