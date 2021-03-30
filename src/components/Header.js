
const Header = ({toggleColorMode, colorMode}) => {
    return ( 
        <div className="header">
            <h1 className="title">Jane's Notes</h1>
            <div className={`color-theme ${colorMode}`} onClick={toggleColorMode}></div>
        </div>
     );
}
 
export default Header;