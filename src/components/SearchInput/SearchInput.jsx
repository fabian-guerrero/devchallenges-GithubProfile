import { useEffect, useRef, useState } from "react";
import IconSvg from "../IconsSvg/IconSvg";
import UserProfile from "../UserProfile/UserProfile";
import "./SearchInput.css";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [userSelected, setUserSelected] = useState(false);

  const inputWrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputWrapperRef.current &&
        !inputWrapperRef.current.contains(event.target)
      ) {
        setSuggestions([]);
        setUserSelected(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUsers = async (searchTerm) => {
    console.log("🔑 Runtime Token:", import.meta.env.VITE_GITHUB_TOKEN);
    if (searchTerm.length < 3) {
      setSuggestions([]);
      setSearchCompleted(false);
      return;
    }
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      const data = await response.json();
      const usersWithBio = await Promise.all(
        data.items.map(async (user) => {
          const userDetails = await fetch(
            `https://api.github.com/users/${user.login}`,
            {
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );
          const userData = await userDetails.json();
          return {
            login: user.login,
            bio: userData.bio,
            avatar_url: user.avatar_url,
            location: userData.location,
            followers: userData.followers,
            following: userData.following,
          };
        })
      );
      setSuggestions(usersWithBio || []);
      setSearchCompleted(true);
    } catch (error) {
      console.error("Error fetching users:", error);
      setSearchCompleted(true);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setSuggestions([]);
    setUserSelected(true);
    console.log("selectedUser ", selectedUser);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setUserSelected(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      fetchUsers(value);
    }, 100);
    setTimeoutId(newTimeoutId);
  };

  return (
    <>
      <div
        data-component="input-wrapper"
        className="input-wrapper"
        ref={inputWrapperRef}
      >
        <IconSvg iconName="search" customClass="search-icon" />
        <input
          type="text"
          placeholder="Username"
          value={query}
          onChange={handleChange}
          className="input-field primary-font-body-text"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.slice(0, 5).map((user) => (
              <li
                key={user.login}
                className="suggestion-item"
                onClick={() => handleSelectUser(user)}
              >
                <div
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-link"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="user-avatar"
                  />
                  <div className="user-details">
                    <p className="user-name primary-font-body-text">
                      {user.login}
                    </p>
                    <p className="user-bio primary-font-small-text">
                      {user.bio || "No bio available"}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {searchCompleted &&
          suggestions.length === 0 &&
          query.length >= 3 &&
          !userSelected && (
            <ul className="suggestions-list">
              <li className="suggestion-item">
                <p className="user-name primary-font-body-text">
                  No se encontraron resultados
                </p>
              </li>
            </ul>
          )}
      </div>
      <div>{selectedUser && <UserProfile username={selectedUser} />}</div>
    </>
  );
}
