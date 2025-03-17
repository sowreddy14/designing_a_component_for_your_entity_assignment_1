import "./usercard.css";

const Usercard = () => {
  const profilePhoto = "https://th.bing.com/th/id/OIP.ZugpBU6RwS8ftzBQyaXuegHaJQ?w=208&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // 
  const name = "Harry";
  const email = "hari.doe@example.com";
  const phone = "+91825061";
  const address = "143 side Street, Graveyard, UK";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <div className="user-details">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;