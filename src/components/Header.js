
const Header = ({toggleColorMode, colorMode}) => {
    return ( 
        <div className="header">
            <h1 className="title">T O D O</h1>
            <div className={`color-theme ${colorMode}`} onClick={toggleColorMode}></div>
        </div>
     );
}
 
export default Header;