
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/signup" style={styles.link}>Sign Up</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      {username && <span style={styles.user}>Hi, {username}</span>}
    {username && <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>}

    </nav>
  );
}

const styles = {
 nav: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1000,
    gap: '2rem',
  },
  
  link: {
    position: 'relative',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '0.75rem 1.25rem',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    display: 'inline-block',
    
    // Underline effect
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      width: '0',
      height: '2px',
      backgroundColor: '#3b82f6',
      transform: 'translateX(-50%)',
      transition: 'width 0.3s ease-out',
    },
    
    // Hover state
    '&:hover': {
      color: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    },
    
    '&:hover::after': {
      width: '80%',
    },
    
    // Focus state for accessibility
    '&:focus': {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px',
    },
  },
  
  user: {
    color: '#a0a0a0',
    fontSize: '0.9rem',
    fontWeight: '400',
    marginLeft: 'auto',
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    transition: 'all 0.2s ease',
  },
  
  logoutButton: {
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.5s',
    },
    
    '&:hover': {
      backgroundColor: '#dc2626',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
    },
    
    '&:hover::before': {
      left: '100%',
    },
    
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 6px rgba(239, 68, 68, 0.3)',
    },
  },

};


export default Navbar;
