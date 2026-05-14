import React, { useEffect, useState } from "react";

function App() {
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  // Fetch API Data using async/await and error handling
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setApiError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  // Handle Input Changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors and success messages when user starts typing
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (success) setSuccess("");
  };

  // Form Validation Function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  // Form Submit Function
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setIsSubmitting(true);
      
      // Simulate API call delay for form submission
      setTimeout(() => {
        setErrors({});
        setSuccess("Registration Successful!");
        console.log("Submitted Data:", formData);
        
        // Reset Form
        setFormData({ name: "", email: "", password: "" });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>Registration Form</h1>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g., Jane Doe"
              value={formData.name}
              onChange={handleChange}
              style={{ ...styles.input, borderColor: errors.name ? "red" : "#ccc" }}
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g., jane@example.com"
              value={formData.email}
              onChange={handleChange}
              style={{ ...styles.input, borderColor: errors.email ? "red" : "#ccc" }}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter at least 6 characters"
              value={formData.password}
              onChange={handleChange}
              style={{ ...styles.input, borderColor: errors.password ? "red" : "#ccc" }}
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            style={{ ...styles.button, opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Success Message */}
        {success && <p style={styles.successText}>{success}</p>}

        {/* API Data Section */}
        <div style={styles.apiSection}>
          <h2 style={styles.subHeader}>User Data from API</h2>
          
          {loading && <p style={styles.centerText}>Loading users...</p>}
          {apiError && <p style={styles.errorText}>{apiError}</p>}
          
          <div style={styles.userList}>
            {!loading && !apiError && users.map((user) => (
              <div key={user.id} style={styles.userCard}>
                <p style={styles.userText}><strong>Name:</strong> {user.name}</p>
                <p style={styles.userText}><strong>Email:</strong> {user.email}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

// Extracted Styles Object for cleaner JSX
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Changed to flex-start so it scrolls well
    padding: "40px 20px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
    color: "#333",
    fontSize: "24px",
  },
  subHeader: {
    textAlign: "center",
    color: "#444",
    fontSize: "20px",
    marginBottom: "15px",
  },
  inputGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontSize: "14px",
    color: "#555",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
    boxSizing: "border-box", // Prevents input from overflowing container
    outline: "none",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: "13px",
    marginTop: "4px",
    display: "block",
  },
  successText: {
    color: "#2ecc71",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
    backgroundColor: "#e8f8f5",
    padding: "10px",
    borderRadius: "6px",
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    backgroundColor: "#0056b3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.2s",
  },
  apiSection: {
    marginTop: "40px",
    borderTop: "1px solid #eee",
    paddingTop: "20px",
  },
  userList: {
    maxHeight: "300px", // Adds a scrollbar to the user list so the page isn't too long
    overflowY: "auto",
    paddingRight: "5px",
  },
  userCard: {
    backgroundColor: "#f8f9fa",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    borderLeft: "4px solid #0056b3",
  },
  userText: {
    margin: "4px 0",
    fontSize: "14px",
    color: "#333",
  },
  centerText: {
    textAlign: "center",
    color: "#666",
  }
};

export default App;