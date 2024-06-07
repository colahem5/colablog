const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Cola Blog</h1>
            <div className="links"></div>
            <a href="/">Home</a>
            <a href="/create" style={{
                color: "white", 
                backgroundColor: '#7AC2E0',
                borderRadius: '20px'
            }}>New Blog</a>
        </nav>
     );
}
 
export default Navbar;