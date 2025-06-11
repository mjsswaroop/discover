
////current working 
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Profile.css';
// import profileImg from './img/profile.jpg';
// import { TbEdit } from "react-icons/tb";

// const Profile = ({ searchQuery, statusFilter }) => {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);  
//   const [loading, setLoading] = useState(true);
//   const [newAvatar, setNewAvatar] = useState(null); // State for new avatar image
//   const [isEditing, setIsEditing] = useState(false); // State to toggle edit form visibility
//   const [updatedUserDetails, setUpdatedUserDetails] = useState({ username: '', email: '', phone: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:5002/api/auth/profile", {
//           headers: { Authorization: token }
//         });

//         setUser(response.data);
//         setUpdatedUserDetails({
//           username: response.data.username,
//           email: response.data.email,
//           phone: response.data.phone,
//         });

//         const postsResponse = await axios.get("http://localhost:5002/api/posts/user", {
//           headers: { Authorization: token }
//         });

//         setPosts(postsResponse.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Profile Fetch Error:", error);
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Handle avatar file change
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setNewAvatar(reader.result);  // Store base64
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle user details update
//   const handleUpdateDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       // Prepare data to send to backend
//       const updatedData = { 
//         username: updatedUserDetails.username,
//         email: updatedUserDetails.email,
//         phone: updatedUserDetails.phone,
//         avatar: newAvatar || user.avatar  // Use new avatar if available
//       };

//       // Send PUT request to update profile
//       const response = await axios.put("http://localhost:5002/api/auth/update-profile", updatedData, {
//         headers: { Authorization: token }
//       });

//       // Update the state with the response data
//       setUser(response.data);
//       setIsEditing(false); // Close the edit form after updating
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Profile Update Error:", error);
//       alert("Error updating profile.");
//     }
//   };

//   if (loading) return <p>Loading profile...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img 
//             src={newAvatar || user.avatar || profileImg} 
//             alt="Profile" 
//             className="profile-pic" 
//           />
//           <button 
//             className="edit-profile-btn" 
//             onClick={() => setIsEditing(!isEditing)}  // Toggle edit form visibility
//           >
//             <TbEdit />
//           </button>
//         </div>

//         {/* Edit Profile Form */}
//         {isEditing && (
//           <div className="edit-profile-form">
//             <input 
//               type="text" 
//               value={updatedUserDetails.username} 
//               onChange={(e) => setUpdatedUserDetails({ ...updatedUserDetails, username: e.target.value })}
//               placeholder="Username"
//             />
//             <input 
//               type="email" 
//               value={updatedUserDetails.email} 
//               onChange={(e) => setUpdatedUserDetails({ ...updatedUserDetails, email: e.target.value })}
//               placeholder="Email"
//             />
//             <input 
//               type="tel" 
//               value={updatedUserDetails.phone} 
//               onChange={(e) => setUpdatedUserDetails({ ...updatedUserDetails, phone: e.target.value })}
//               placeholder="Phone"
//             />
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleAvatarChange}
//             />
//             <button className="save-profile-btn" onClick={handleUpdateDetails}>
//               Save Changes
//             </button>
//           </div>
//         )}

//         <div className="profile-details">
//           <h2>{user.username}</h2>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//         </div>
//       </div>

//       {/* Posts Section */}
//       <div className="posts-section">
//         <h3>Your Posts</h3>
//         {posts.length === 0 ? (
//           <p>No posts yet.</p>
//         ) : (
//           posts.map(post => (
//             <div key={post._id} className="post-card">
//               <div className="post-content">
//                 <div className="post-image-container">
//                   {post.images[0] && (
//                     <img src={`http://localhost:5002${post.images[0]}`} alt="Post" className="post-image" />
//                   )}
//                 </div>

//                 <div className="post-details">
//                   <h4>{post.itemName}</h4>
//                   <p><strong>Category:</strong> {post.category}</p>
//                   <p><strong>Description:</strong> {post.description}</p>
//                   <p><strong>Location:</strong> {post.location}</p>
//                   <p><strong>Status:</strong> {post.status}</p>
//                 </div>
//               </div>

//               {/* Edit and Delete Buttons */}
//               <div className="post-actions">
//                 <button className="edit-post-btn" onClick={() => handleEdit(post._id)}>Edit</button>
//                 <button className="delete-post-btn" onClick={() => handleDelete(post._id)}>Delete</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate
// import axios from 'axios';
// import './Profile.css';
// import profileImg from './img/profile.jpg';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);  
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();  // ✅ Initialize navigate

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:5002/api/auth/profile", {
//           headers: { Authorization: token }
//         });

//         setUser(response.data);

//         const postsResponse = await axios.get("http://localhost:5002/api/posts/user", {
//           headers: { Authorization: token }
//         });

//         setPosts(postsResponse.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Profile Fetch Error:", error);
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Function to handle Delete
//   const handleDelete = async (postId) => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5002/api/posts/${postId}`, {
//         headers: { Authorization: token }
//       });

//       // Update UI after deletion
//       setPosts(posts.filter(post => post._id !== postId));
//     } catch (error) {
//       console.error("Delete Error:", error);
//     }
//   };

//   // ✅ Function to handle Edit (Navigate to Edit Page)
//   const handleEdit = (postId) => {
//     localStorage.setItem("editPostId", postId);
//     navigate(`/edit-post/${postId}`);  // ✅ Navigate properly
//   };

//   if (loading) return <p>Loading profile...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img src={profileImg} alt="Profile" className="profile-pic" />
//         </div>
//         <div className="profile-details">
//           <h2>{user.username}</h2>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//         </div>
//       </div>

//       {/* Posts Section */}
//       <div className="posts-section">
//         <h3>Your Posts</h3>
//         {posts.length === 0 ? (
//           <p>No posts yet.</p>
//         ) : (
//           posts.map(post => (
//             <div key={post._id} className="post-card">
//               <div className="post-content">
//                 <div className="post-image-container">
//                   {post.images[0] && (
//                     <img src={`http://localhost:5002${post.images[0]}`} alt="Post" className="post-image" />
//                   )}
//                 </div>

//                 <div className="post-details">
//                   <h4>{post.itemName}</h4>
//                   <p><strong>Category:</strong> {post.category}</p>
//                   <p><strong>Description:</strong> {post.description}</p>
//                   <p><strong>Location:</strong> {post.location}</p>
//                   <p><strong>Status:</strong> {post.status}</p>
//                 </div>
//               </div>

//               {/* Edit and Delete Buttons */}
//               <div className="post-actions">
//                 <button className="edit-post-btn" onClick={() => handleEdit(post._id)}>Edit</button>
//                 <button className="delete-post-btn" onClick={() => handleDelete(post._id)}>Delete</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import profileImg from './img/profile.jpg';
import { TbEdit } from "react-icons/tb";

const Profile = ({ searchQuery, statusFilter }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [newAvatar, setNewAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserDetails, setUpdatedUserDetails] = useState({ username: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5002/api/auth/profile", {
          headers: { Authorization: token }
        });

        setUser(response.data);
        setUpdatedUserDetails({
          username: response.data.username,
          email: response.data.email,
          phone: response.data.phone,
        });

        const postsResponse = await axios.get("http://localhost:5002/api/posts/user", {
          headers: { Authorization: token }
        });

        setPosts(postsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Profile Fetch Error:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const updatedData = { 
        username: updatedUserDetails.username,
        email: updatedUserDetails.email,
        phone: updatedUserDetails.phone,
        avatar: newAvatar || user.avatar
      };

      const response = await axios.put("http://localhost:5002/api/auth/update-profile", updatedData, {
        headers: { Authorization: token }
      });

      setUser(response.data);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile Update Error:", error);
      alert("Error updating profile.");
    }
  };

  const handleEdit = (postId) => {
    localStorage.setItem("editPostId", postId);
    navigate(`/edit-post/${postId}`);  // ✅ Navigate properly
  };

  const handleDelete = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5002/api/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(posts.filter(post => post._id !== postId));
      alert("deleted the post.");
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete the post.");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  // Filter posts by search and status
  const filteredPosts = posts.filter((post) => {
    const matchesQuery = post.itemName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter ? post.status === statusFilter : true;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img 
            src={newAvatar || user.avatar || profileImg} 
            alt="Profile" 
            className="profile-pic" 
          />
          <button 
            className="edit-profile-btn" 
            onClick={() => setIsEditing(!isEditing)}
          >
            <TbEdit />
          </button>
        </div>

        {isEditing && (
          <div className="edit-profile-form">
            <input 
              type="text" 
              value={updatedUserDetails.username} 
              onChange={(e) => setUpdatedUserDetails({ ...updatedUserDetails, username: e.target.value })}
              placeholder="Username"
            />
            <input 
              type="email" 
              value={updatedUserDetails.email} 
              onChange={(e) => setUpdatedUserDetails({ ...updatedUserDetails, email: e.target.value })}
              placeholder="Email"
            />
            <input 
              type="tel" 
              value={updatedUserDetails.phone} 
              onChange={(e) => setUpdatedUserDetails({ ...updatedUserDetails, phone: e.target.value })}
              placeholder="Phone"
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleAvatarChange}
            />
            <button className="save-profile-btn" onClick={handleUpdateDetails}>
              Save Changes
            </button>
          </div>
        )}

        <div className="profile-details">
          <h2>{user.username}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      </div>

      <div className="posts-section">
        <h3>Your Posts</h3>
        {filteredPosts.length === 0 ? (
          <p>No posts match your search.</p>
        ) : (
          filteredPosts.map(post => (
            <div key={post._id} className="post-card">
              <div className="post-content">
                <div className="post-image-container">
                  {post.images[0] && (
                    <img src={`http://localhost:5002${post.images[0]}`} alt="Post" className="post-image" />
                  )}
                </div>

                <div className="post-details">
                  <h4>{post.itemName}</h4>
                  <p><strong>Category:</strong> {post.category}</p>
                  <p><strong>Description:</strong> {post.description}</p>
                  <p><strong>Location:</strong> {post.location}</p>
                  <p><strong>Status:</strong> {post.status}</p>
                </div>
              </div>

              <div className="post-actions">
                <button className="edit-post-btn" onClick={() => handleEdit(post._id)}>Edit</button>
                <button className="delete-post-btn" onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
