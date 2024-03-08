import { NavLink, Outlet } from "react-router-dom";

export default function ProfilePage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {profiles.map((profile) => (
        <h1 key={profile}>
          <NavLink
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "text-primary" : "text-secondary";
            }}
          >
            Profile {profile}
          </NavLink>
        </h1>
      ))}
      <Outlet />
    </div>
  );
}
