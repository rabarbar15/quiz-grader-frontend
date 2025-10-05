const Header = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center md:justify-between md:flex-row">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl">
          Quiz
          <span className="text-primary">Grader</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-11 rounded-full mr-3"
        />
        <div className="font-medium text-center md:text-left">
          <div>Jan Kowalski</div>
          <small>Nauczyciel matematyki</small>
        </div>
      </div>
    </div>
  );
};

export default Header;
