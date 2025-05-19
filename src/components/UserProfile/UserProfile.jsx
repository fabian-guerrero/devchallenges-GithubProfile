import "./UserProfile.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { timeAgo } from "../../utils/timeAgo";
import StatsPill from "../StatsPill/StatsPill";
import IconSvg from "../IconsSvg/IconSvg";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const INITIAL_REPOS_TO_SHOW = 4;

export default function UserProfile({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setRepos([]);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username.login}/repos`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setLoading(true);
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading repositories...</p>;
  if (error) return <p>Error: {error}</p>;

  const displayedRepos = showAll
    ? repos
    : repos.slice(0, INITIAL_REPOS_TO_SHOW);

  return (
    <div data-component="user-profile">
      <div className="user-info">
        <img src={username.avatar_url} className="user-avatar" />
        <div className="user-stats">
          <div className="stat-wrapper">
            <StatsPill label="Followers" stat={username.followers} />
          </div>
          <div className="stat-wrapper">
            <StatsPill label="Following" stat={username.following} />
          </div>
          {username.location && (
            <div className="stat-wrapper">
              <StatsPill label="Location" stat={username.location} />
            </div>
          )}
        </div>
      </div>
      <div className="user-bio-details">
        <p className="user-name primary-font-large-text">{username.login}</p>
        <p className="user-bio primary-font-body-text">{username.bio}</p>
      </div>
      <ul className="repositories-list">
        {displayedRepos.length > 0 ? (
          displayedRepos.map((repo) => (
            <li key={repo.id} className="repository-item">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <p className="repository-name primary-font-title">
                  {repo.name}
                </p>
                <p className="repository-description primary-font-body-text">
                  {repo.description}
                </p>
                <div className="repository-info-wrapper">
                  {repo.license && repo.license.name && (
                    <span className="repository-info primary-font-small-text">
                      <IconSvg iconName="shield" />
                      {repo.license.name}
                    </span>
                  )}
                  <span className="repository-info primary-font-small-text">
                    <IconSvg iconName="nesting" />
                    {repo.forks}
                  </span>
                  <span className="repository-info primary-font-small-text">
                    <IconSvg iconName="star" />
                    {repo.stargazers_count}
                  </span>
                  <span className="repository-time-ago primary-font-small-text">
                    {timeAgo(repo.updated_at)}
                  </span>
                </div>
              </a>
            </li>
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </ul>
      {repos.length > INITIAL_REPOS_TO_SHOW && (
        <button
          className="show-more-btn primary-font-body-text"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "View less repositories" : "View all repositories"}
        </button>
      )}
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.object.isRequired,
};
