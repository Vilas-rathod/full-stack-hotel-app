import React from 'react';

const NewHome = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <h2>Phegon Hotels</h2>
        </div>
        <ul style={styles.navLinks}>
          <li><a href="#" style={styles.navLink}>Home</a></li>
          <li><a href="#" style={styles.navLink}>Hotels</a></li>
          <li><a href="#" style={styles.navLink}>Bookings</a></li>
          <li><a href="#" style={styles.navLink}>Profile</a></li>
          <li><a href="#" style={styles.navLink}>Admin</a></li>
        </ul>
        <div style={styles.userActions}>
          <button style={styles.loginBtn}>Login</button>
          <button style={styles.signupBtn}>Sign Up</button>
        </div>
      </nav>

      {/* Main Body */}
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Find Your Perfect Stay</h1>
          <p style={styles.heroSubtitle}>Book hotels with ease and manage your stays effortlessly.</p>
          <div style={styles.searchBar}>
            <input type="text" placeholder="Destination" style={styles.searchInput} />
            <input type="date" style={styles.searchInput} />
            <input type="date" style={styles.searchInput} />
            <input type="number" placeholder="Guests" min="1" style={styles.searchInput} />
            <button style={styles.searchBtn}>Search</button>
          </div>
        </section>

        {/* Filters Section */}
        <section style={styles.filters}>
          <h3 style={styles.sectionTitle}>Filters</h3>
          <div style={styles.filterOptions}>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Price Range</label>
              <input type="range" min="50" max="500" defaultValue="200" style={styles.slider} />
              <span>$50 - $500</span>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Star Rating</label>
              <select style={styles.select}>
                <option>All</option>
                <option>3 Stars</option>
                <option>4 Stars</option>
                <option>5 Stars</option>
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Amenities</label>
              <div style={styles.checkboxGroup}>
                <label><input type="checkbox" /> Wi-Fi</label>
                <label><input type="checkbox" /> Pool</label>
                <label><input type="checkbox" /> Parking</label>
              </div>
            </div>
            <button style={styles.applyFilterBtn}>Apply Filters</button>
          </div>
        </section>

        {/* Hotel Listings */}
        <section style={styles.listings}>
          <h3 style={styles.sectionTitle}>Available Hotels</h3>
          <div style={styles.hotelGrid}>
            {/* Hotel Card 1 */}
            <div style={styles.hotelCard}>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Hotel Deluxe"
                style={styles.hotelImage}
              />
              <div style={styles.hotelInfo}>
                <h4 style={styles.hotelName}>Hotel Deluxe</h4>
                <p style={styles.hotelLocation}>New York, NY</p>
                <p style={styles.hotelRating}>★★★★☆ (4.5)</p>
                <p style={styles.hotelPrice}>$150 / night</p>
                <button style={styles.bookBtn}>Book Now</button>
              </div>
            </div>

            {/* Hotel Card 2 */}
            <div style={styles.hotelCard}>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Ocean View Resort"
                style={styles.hotelImage}
              />
              <div style={styles.hotelInfo}>
                <h4 style={styles.hotelName}>Ocean View Resort</h4>
                <p style={styles.hotelLocation}>Miami, FL</p>
                <p style={styles.hotelRating}>★★★★★ (5.0)</p>
                <p style={styles.hotelPrice}>$250 / night</p>
                <button style={styles.bookBtn}>Book Now</button>
              </div>
            </div>

            {/* Hotel Card 3 */}
            <div style={styles.hotelCard}>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Mountain Lodge"
                style={styles.hotelImage}
              />
              <div style={styles.hotelInfo}>
                <h4 style={styles.hotelName}>Mountain Lodge</h4>
                <p style={styles.hotelLocation}>Aspen, CO</p>
                <p style={styles.hotelRating}>★★★★☆ (4.2)</p>
                <p style={styles.hotelPrice}>$180 / night</p>
                <button style={styles.bookBtn}>Book Now</button>
              </div>
            </div>
          </div>
          <button style={styles.loadMoreBtn}>Load More</button>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4>About Us</h4>
            <p>
              Phegon Hotels offers a seamless booking experience for travelers worldwide.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Terms of Service</a></li>
              <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" style={styles.footerLink}>Contact Us</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: support@phegonhotels.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2025 Phegon Hotels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Styles object (inline CSS)
const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  // Navbar Styles
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
  },
  userActions: {
    display: 'flex',
    gap: '1rem',
  },
  loginBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  signupBtn: {
    backgroundColor: '#3498db',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  // Main Body Styles
  main: {
    flex: 1,
    padding: '2rem',
    backgroundColor: '#f4f6f9',
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 0',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px',
    marginBottom: '2rem',
  },
  heroTitle: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '1.5rem',
  },
  searchBar: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  searchInput: {
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    width: '150px',
  },
  searchBtn: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  filters: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  filterOptions: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  filterLabel: {
    fontWeight: 'bold',
    color: '#34495e',
  },
  slider: {
    width: '150px',
  },
  select: {
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  applyFilterBtn: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
  listings: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  hotelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  hotelCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s',
  },
  hotelImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  hotelInfo: {
    padding: '1rem',
  },
  hotelName: {
    fontSize: '1.25rem',
    color: '#2c3e50',
    margin: '0 0 0.5rem',
  },
  hotelLocation: {
    fontSize: '1rem',
    color: '#7f8c8d',
    margin: '0 0 0.5rem',
  },
  hotelRating: {
    fontSize: '1rem',
    color: '#f1c40f',
    margin: '0 0 0.5rem',
  },
  hotelPrice: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#e74c3c',
    margin: '0 0 1rem',
  },
  bookBtn: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  loadMoreBtn: {
    display: 'block',
    margin: '0 auto',
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  // Footer Styles
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  footerSection: {
    flex: '1 1 200px',
    margin: '1rem',
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
  },
  footerLink: {
    color: '#bdc3c7',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  footerBottom: {
    borderTop: '1px solid #34495e',
    paddingTop: '1rem',
  },
};

export default NewHome;