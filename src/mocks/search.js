import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`https://api.github.com/search/users?q=`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      total_count: 225178,
      incomplete_results: false,
      items: [
        {
          login: "github",
          id: 9919,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",
          avatar_url: "https://avatars.githubusercontent.com/u/9919?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/github",
          html_url: "https://github.com/github",
          followers_url: "https://api.github.com/users/github/followers",
          following_url:
            "https://api.github.com/users/github/following{/other_user}",
          gists_url: "https://api.github.com/users/github/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/github/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/github/subscriptions",
          organizations_url: "https://api.github.com/users/github/orgs",
          repos_url: "https://api.github.com/users/github/repos",
          events_url: "https://api.github.com/users/github/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/github/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "githubteacher",
          id: 2132216,
          node_id: "MDQ6VXNlcjIxMzIyMTY=",
          avatar_url: "https://avatars.githubusercontent.com/u/2132216?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubteacher",
          html_url: "https://github.com/githubteacher",
          followers_url: "https://api.github.com/users/githubteacher/followers",
          following_url:
            "https://api.github.com/users/githubteacher/following{/other_user}",
          gists_url:
            "https://api.github.com/users/githubteacher/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubteacher/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubteacher/subscriptions",
          organizations_url: "https://api.github.com/users/githubteacher/orgs",
          repos_url: "https://api.github.com/users/githubteacher/repos",
          events_url:
            "https://api.github.com/users/githubteacher/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubteacher/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "githubfollow",
          id: 67248948,
          node_id: "MDQ6VXNlcjY3MjQ4OTQ4",
          avatar_url: "https://avatars.githubusercontent.com/u/67248948?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubfollow",
          html_url: "https://github.com/githubfollow",
          followers_url: "https://api.github.com/users/githubfollow/followers",
          following_url:
            "https://api.github.com/users/githubfollow/following{/other_user}",
          gists_url:
            "https://api.github.com/users/githubfollow/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubfollow/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubfollow/subscriptions",
          organizations_url: "https://api.github.com/users/githubfollow/orgs",
          repos_url: "https://api.github.com/users/githubfollow/repos",
          events_url:
            "https://api.github.com/users/githubfollow/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubfollow/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "githubnext",
          id: 89615882,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjg5NjE1ODgy",
          avatar_url: "https://avatars.githubusercontent.com/u/89615882?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubnext",
          html_url: "https://github.com/githubnext",
          followers_url: "https://api.github.com/users/githubnext/followers",
          following_url:
            "https://api.github.com/users/githubnext/following{/other_user}",
          gists_url: "https://api.github.com/users/githubnext/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubnext/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubnext/subscriptions",
          organizations_url: "https://api.github.com/users/githubnext/orgs",
          repos_url: "https://api.github.com/users/githubnext/repos",
          events_url:
            "https://api.github.com/users/githubnext/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubnext/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "githubschool",
          id: 2271728,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjIyNzE3Mjg=",
          avatar_url: "https://avatars.githubusercontent.com/u/2271728?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubschool",
          html_url: "https://github.com/githubschool",
          followers_url: "https://api.github.com/users/githubschool/followers",
          following_url:
            "https://api.github.com/users/githubschool/following{/other_user}",
          gists_url:
            "https://api.github.com/users/githubschool/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubschool/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubschool/subscriptions",
          organizations_url: "https://api.github.com/users/githubschool/orgs",
          repos_url: "https://api.github.com/users/githubschool/repos",
          events_url:
            "https://api.github.com/users/githubschool/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubschool/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "dev1ninja",
          id: 82922629,
          node_id: "MDQ6VXNlcjgyOTIyNjI5",
          avatar_url: "https://avatars.githubusercontent.com/u/82922629?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dev1ninja",
          html_url: "https://github.com/dev1ninja",
          followers_url: "https://api.github.com/users/dev1ninja/followers",
          following_url:
            "https://api.github.com/users/dev1ninja/following{/other_user}",
          gists_url: "https://api.github.com/users/dev1ninja/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dev1ninja/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dev1ninja/subscriptions",
          organizations_url: "https://api.github.com/users/dev1ninja/orgs",
          repos_url: "https://api.github.com/users/dev1ninja/repos",
          events_url: "https://api.github.com/users/dev1ninja/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dev1ninja/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "github-education-resources",
          id: 6667880,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY2Njc4ODA=",
          avatar_url: "https://avatars.githubusercontent.com/u/6667880?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/github-education-resources",
          html_url: "https://github.com/github-education-resources",
          followers_url:
            "https://api.github.com/users/github-education-resources/followers",
          following_url:
            "https://api.github.com/users/github-education-resources/following{/other_user}",
          gists_url:
            "https://api.github.com/users/github-education-resources/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/github-education-resources/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/github-education-resources/subscriptions",
          organizations_url:
            "https://api.github.com/users/github-education-resources/orgs",
          repos_url:
            "https://api.github.com/users/github-education-resources/repos",
          events_url:
            "https://api.github.com/users/github-education-resources/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/github-education-resources/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "actions",
          id: 44036562,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjQ0MDM2NTYy",
          avatar_url: "https://avatars.githubusercontent.com/u/44036562?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/actions",
          html_url: "https://github.com/actions",
          followers_url: "https://api.github.com/users/actions/followers",
          following_url:
            "https://api.github.com/users/actions/following{/other_user}",
          gists_url: "https://api.github.com/users/actions/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/actions/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/actions/subscriptions",
          organizations_url: "https://api.github.com/users/actions/orgs",
          repos_url: "https://api.github.com/users/actions/repos",
          events_url: "https://api.github.com/users/actions/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/actions/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "shiftkey",
          id: 359239,
          node_id: "MDQ6VXNlcjM1OTIzOQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/359239?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/shiftkey",
          html_url: "https://github.com/shiftkey",
          followers_url: "https://api.github.com/users/shiftkey/followers",
          following_url:
            "https://api.github.com/users/shiftkey/following{/other_user}",
          gists_url: "https://api.github.com/users/shiftkey/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/shiftkey/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/shiftkey/subscriptions",
          organizations_url: "https://api.github.com/users/shiftkey/orgs",
          repos_url: "https://api.github.com/users/shiftkey/repos",
          events_url: "https://api.github.com/users/shiftkey/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/shiftkey/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: true,
          score: 1,
        },
        {
          login: "githubwing",
          id: 12854998,
          node_id: "MDQ6VXNlcjEyODU0OTk4",
          avatar_url: "https://avatars.githubusercontent.com/u/12854998?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubwing",
          html_url: "https://github.com/githubwing",
          followers_url: "https://api.github.com/users/githubwing/followers",
          following_url:
            "https://api.github.com/users/githubwing/following{/other_user}",
          gists_url: "https://api.github.com/users/githubwing/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubwing/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubwing/subscriptions",
          organizations_url: "https://api.github.com/users/githubwing/orgs",
          repos_url: "https://api.github.com/users/githubwing/repos",
          events_url:
            "https://api.github.com/users/githubwing/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubwing/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "JetBrains",
          id: 878437,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjg3ODQzNw==",
          avatar_url: "https://avatars.githubusercontent.com/u/878437?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/JetBrains",
          html_url: "https://github.com/JetBrains",
          followers_url: "https://api.github.com/users/JetBrains/followers",
          following_url:
            "https://api.github.com/users/JetBrains/following{/other_user}",
          gists_url: "https://api.github.com/users/JetBrains/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/JetBrains/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/JetBrains/subscriptions",
          organizations_url: "https://api.github.com/users/JetBrains/orgs",
          repos_url: "https://api.github.com/users/JetBrains/repos",
          events_url: "https://api.github.com/users/JetBrains/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/JetBrains/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "githubhaohao",
          id: 17926884,
          node_id: "MDQ6VXNlcjE3OTI2ODg0",
          avatar_url: "https://avatars.githubusercontent.com/u/17926884?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubhaohao",
          html_url: "https://github.com/githubhaohao",
          followers_url: "https://api.github.com/users/githubhaohao/followers",
          following_url:
            "https://api.github.com/users/githubhaohao/following{/other_user}",
          gists_url:
            "https://api.github.com/users/githubhaohao/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubhaohao/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubhaohao/subscriptions",
          organizations_url: "https://api.github.com/users/githubhaohao/orgs",
          repos_url: "https://api.github.com/users/githubhaohao/repos",
          events_url:
            "https://api.github.com/users/githubhaohao/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubhaohao/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "skills",
          id: 103777734,
          node_id: "O_kgDOBi-Fxg",
          avatar_url: "https://avatars.githubusercontent.com/u/103777734?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/skills",
          html_url: "https://github.com/skills",
          followers_url: "https://api.github.com/users/skills/followers",
          following_url:
            "https://api.github.com/users/skills/following{/other_user}",
          gists_url: "https://api.github.com/users/skills/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/skills/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/skills/subscriptions",
          organizations_url: "https://api.github.com/users/skills/orgs",
          repos_url: "https://api.github.com/users/skills/repos",
          events_url: "https://api.github.com/users/skills/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/skills/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "githubtraining",
          id: 2036237,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjIwMzYyMzc=",
          avatar_url: "https://avatars.githubusercontent.com/u/2036237?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/githubtraining",
          html_url: "https://github.com/githubtraining",
          followers_url:
            "https://api.github.com/users/githubtraining/followers",
          following_url:
            "https://api.github.com/users/githubtraining/following{/other_user}",
          gists_url:
            "https://api.github.com/users/githubtraining/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/githubtraining/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/githubtraining/subscriptions",
          organizations_url: "https://api.github.com/users/githubtraining/orgs",
          repos_url: "https://api.github.com/users/githubtraining/repos",
          events_url:
            "https://api.github.com/users/githubtraining/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/githubtraining/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "docker",
          id: 5429470,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjU0Mjk0NzA=",
          avatar_url: "https://avatars.githubusercontent.com/u/5429470?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/docker",
          html_url: "https://github.com/docker",
          followers_url: "https://api.github.com/users/docker/followers",
          following_url:
            "https://api.github.com/users/docker/following{/other_user}",
          gists_url: "https://api.github.com/users/docker/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/docker/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/docker/subscriptions",
          organizations_url: "https://api.github.com/users/docker/orgs",
          repos_url: "https://api.github.com/users/docker/repos",
          events_url: "https://api.github.com/users/docker/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/docker/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "GitHub30",
          id: 12811398,
          node_id: "MDQ6VXNlcjEyODExMzk4",
          avatar_url: "https://avatars.githubusercontent.com/u/12811398?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/GitHub30",
          html_url: "https://github.com/GitHub30",
          followers_url: "https://api.github.com/users/GitHub30/followers",
          following_url:
            "https://api.github.com/users/GitHub30/following{/other_user}",
          gists_url: "https://api.github.com/users/GitHub30/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/GitHub30/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/GitHub30/subscriptions",
          organizations_url: "https://api.github.com/users/GitHub30/orgs",
          repos_url: "https://api.github.com/users/GitHub30/repos",
          events_url: "https://api.github.com/users/GitHub30/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/GitHub30/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "community",
          id: 93784371,
          node_id: "O_kgDOBZcJMw",
          avatar_url: "https://avatars.githubusercontent.com/u/93784371?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/community",
          html_url: "https://github.com/community",
          followers_url: "https://api.github.com/users/community/followers",
          following_url:
            "https://api.github.com/users/community/following{/other_user}",
          gists_url: "https://api.github.com/users/community/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/community/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/community/subscriptions",
          organizations_url: "https://api.github.com/users/community/orgs",
          repos_url: "https://api.github.com/users/community/repos",
          events_url: "https://api.github.com/users/community/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/community/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "GNOME",
          id: 1801039,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjE4MDEwMzk=",
          avatar_url: "https://avatars.githubusercontent.com/u/1801039?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/GNOME",
          html_url: "https://github.com/GNOME",
          followers_url: "https://api.github.com/users/GNOME/followers",
          following_url:
            "https://api.github.com/users/GNOME/following{/other_user}",
          gists_url: "https://api.github.com/users/GNOME/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/GNOME/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/GNOME/subscriptions",
          organizations_url: "https://api.github.com/users/GNOME/orgs",
          repos_url: "https://api.github.com/users/GNOME/repos",
          events_url: "https://api.github.com/users/GNOME/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/GNOME/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "nikitavoloboev",
          id: 6391776,
          node_id: "MDQ6VXNlcjYzOTE3NzY=",
          avatar_url: "https://avatars.githubusercontent.com/u/6391776?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nikitavoloboev",
          html_url: "https://github.com/nikitavoloboev",
          followers_url:
            "https://api.github.com/users/nikitavoloboev/followers",
          following_url:
            "https://api.github.com/users/nikitavoloboev/following{/other_user}",
          gists_url:
            "https://api.github.com/users/nikitavoloboev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nikitavoloboev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nikitavoloboev/subscriptions",
          organizations_url: "https://api.github.com/users/nikitavoloboev/orgs",
          repos_url: "https://api.github.com/users/nikitavoloboev/repos",
          events_url:
            "https://api.github.com/users/nikitavoloboev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nikitavoloboev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "bevacqua",
          id: 934293,
          node_id: "MDQ6VXNlcjkzNDI5Mw==",
          avatar_url: "https://avatars.githubusercontent.com/u/934293?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/bevacqua",
          html_url: "https://github.com/bevacqua",
          followers_url: "https://api.github.com/users/bevacqua/followers",
          following_url:
            "https://api.github.com/users/bevacqua/following{/other_user}",
          gists_url: "https://api.github.com/users/bevacqua/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/bevacqua/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/bevacqua/subscriptions",
          organizations_url: "https://api.github.com/users/bevacqua/orgs",
          repos_url: "https://api.github.com/users/bevacqua/repos",
          events_url: "https://api.github.com/users/bevacqua/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/bevacqua/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "learn-co-curriculum",
          id: 6208017,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjYyMDgwMTc=",
          avatar_url: "https://avatars.githubusercontent.com/u/6208017?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/learn-co-curriculum",
          html_url: "https://github.com/learn-co-curriculum",
          followers_url:
            "https://api.github.com/users/learn-co-curriculum/followers",
          following_url:
            "https://api.github.com/users/learn-co-curriculum/following{/other_user}",
          gists_url:
            "https://api.github.com/users/learn-co-curriculum/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/learn-co-curriculum/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/learn-co-curriculum/subscriptions",
          organizations_url:
            "https://api.github.com/users/learn-co-curriculum/orgs",
          repos_url: "https://api.github.com/users/learn-co-curriculum/repos",
          events_url:
            "https://api.github.com/users/learn-co-curriculum/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/learn-co-curriculum/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "PatrickJS",
          id: 1016365,
          node_id: "MDQ6VXNlcjEwMTYzNjU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1016365?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/PatrickJS",
          html_url: "https://github.com/PatrickJS",
          followers_url: "https://api.github.com/users/PatrickJS/followers",
          following_url:
            "https://api.github.com/users/PatrickJS/following{/other_user}",
          gists_url: "https://api.github.com/users/PatrickJS/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/PatrickJS/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/PatrickJS/subscriptions",
          organizations_url: "https://api.github.com/users/PatrickJS/orgs",
          repos_url: "https://api.github.com/users/PatrickJS/repos",
          events_url: "https://api.github.com/users/PatrickJS/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/PatrickJS/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "ahmetb",
          id: 159209,
          node_id: "MDQ6VXNlcjE1OTIwOQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/159209?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ahmetb",
          html_url: "https://github.com/ahmetb",
          followers_url: "https://api.github.com/users/ahmetb/followers",
          following_url:
            "https://api.github.com/users/ahmetb/following{/other_user}",
          gists_url: "https://api.github.com/users/ahmetb/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ahmetb/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ahmetb/subscriptions",
          organizations_url: "https://api.github.com/users/ahmetb/orgs",
          repos_url: "https://api.github.com/users/ahmetb/repos",
          events_url: "https://api.github.com/users/ahmetb/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ahmetb/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "desktop",
          id: 13171334,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEzMTcxMzM0",
          avatar_url: "https://avatars.githubusercontent.com/u/13171334?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/desktop",
          html_url: "https://github.com/desktop",
          followers_url: "https://api.github.com/users/desktop/followers",
          following_url:
            "https://api.github.com/users/desktop/following{/other_user}",
          gists_url: "https://api.github.com/users/desktop/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/desktop/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/desktop/subscriptions",
          organizations_url: "https://api.github.com/users/desktop/orgs",
          repos_url: "https://api.github.com/users/desktop/repos",
          events_url: "https://api.github.com/users/desktop/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/desktop/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "splunk",
          id: 651467,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY1MTQ2Nw==",
          avatar_url: "https://avatars.githubusercontent.com/u/651467?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/splunk",
          html_url: "https://github.com/splunk",
          followers_url: "https://api.github.com/users/splunk/followers",
          following_url:
            "https://api.github.com/users/splunk/following{/other_user}",
          gists_url: "https://api.github.com/users/splunk/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/splunk/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/splunk/subscriptions",
          organizations_url: "https://api.github.com/users/splunk/orgs",
          repos_url: "https://api.github.com/users/splunk/repos",
          events_url: "https://api.github.com/users/splunk/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/splunk/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "signalapp",
          id: 702459,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjcwMjQ1OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/702459?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/signalapp",
          html_url: "https://github.com/signalapp",
          followers_url: "https://api.github.com/users/signalapp/followers",
          following_url:
            "https://api.github.com/users/signalapp/following{/other_user}",
          gists_url: "https://api.github.com/users/signalapp/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/signalapp/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/signalapp/subscriptions",
          organizations_url: "https://api.github.com/users/signalapp/orgs",
          repos_url: "https://api.github.com/users/signalapp/repos",
          events_url: "https://api.github.com/users/signalapp/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/signalapp/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "jedisct1",
          id: 124872,
          node_id: "MDQ6VXNlcjEyNDg3Mg==",
          avatar_url: "https://avatars.githubusercontent.com/u/124872?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jedisct1",
          html_url: "https://github.com/jedisct1",
          followers_url: "https://api.github.com/users/jedisct1/followers",
          following_url:
            "https://api.github.com/users/jedisct1/following{/other_user}",
          gists_url: "https://api.github.com/users/jedisct1/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jedisct1/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jedisct1/subscriptions",
          organizations_url: "https://api.github.com/users/jedisct1/orgs",
          repos_url: "https://api.github.com/users/jedisct1/repos",
          events_url: "https://api.github.com/users/jedisct1/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jedisct1/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "kornelski",
          id: 72159,
          node_id: "MDQ6VXNlcjcyMTU5",
          avatar_url: "https://avatars.githubusercontent.com/u/72159?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/kornelski",
          html_url: "https://github.com/kornelski",
          followers_url: "https://api.github.com/users/kornelski/followers",
          following_url:
            "https://api.github.com/users/kornelski/following{/other_user}",
          gists_url: "https://api.github.com/users/kornelski/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/kornelski/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/kornelski/subscriptions",
          organizations_url: "https://api.github.com/users/kornelski/orgs",
          repos_url: "https://api.github.com/users/kornelski/repos",
          events_url: "https://api.github.com/users/kornelski/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/kornelski/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "svn2github",
          id: 1322930,
          node_id: "MDQ6VXNlcjEzMjI5MzA=",
          avatar_url: "https://avatars.githubusercontent.com/u/1322930?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/svn2github",
          html_url: "https://github.com/svn2github",
          followers_url: "https://api.github.com/users/svn2github/followers",
          following_url:
            "https://api.github.com/users/svn2github/following{/other_user}",
          gists_url: "https://api.github.com/users/svn2github/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/svn2github/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/svn2github/subscriptions",
          organizations_url: "https://api.github.com/users/svn2github/orgs",
          repos_url: "https://api.github.com/users/svn2github/repos",
          events_url:
            "https://api.github.com/users/svn2github/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/svn2github/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
        {
          login: "nikic",
          id: 216080,
          node_id: "MDQ6VXNlcjIxNjA4MA==",
          avatar_url: "https://avatars.githubusercontent.com/u/216080?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nikic",
          html_url: "https://github.com/nikic",
          followers_url: "https://api.github.com/users/nikic/followers",
          following_url:
            "https://api.github.com/users/nikic/following{/other_user}",
          gists_url: "https://api.github.com/users/nikic/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nikic/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/nikic/subscriptions",
          organizations_url: "https://api.github.com/users/nikic/orgs",
          repos_url: "https://api.github.com/users/nikic/repos",
          events_url: "https://api.github.com/users/nikic/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nikic/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
          score: 1,
        },
      ],
    });
  }),
];
