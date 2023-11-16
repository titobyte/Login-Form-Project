const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`menu-icon`}>
        <div>Link 1</div>
        <div>Link 2</div>
        <div>Link 3</div>
      </div>
    </nav>
  );
};

export default NavBar;