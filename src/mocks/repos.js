import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`https://api.github.com/users/${username}/repos`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: 152086731,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTIwODY3MzE=",
        name: "accordion-menu",
        full_name: "midudev/accordion-menu",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/accordion-menu",
        description: "Ejercicio Frontend con la creación de un menú acordeón",
        fork: true,
        url: "https://api.github.com/repos/midudev/accordion-menu",
        forks_url: "https://api.github.com/repos/midudev/accordion-menu/forks",
        keys_url:
          "https://api.github.com/repos/midudev/accordion-menu/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/accordion-menu/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/accordion-menu/teams",
        hooks_url: "https://api.github.com/repos/midudev/accordion-menu/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/accordion-menu/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/accordion-menu/events",
        assignees_url:
          "https://api.github.com/repos/midudev/accordion-menu/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/accordion-menu/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/accordion-menu/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/accordion-menu/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/accordion-menu/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/accordion-menu/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/accordion-menu/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/accordion-menu/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/accordion-menu/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/accordion-menu/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/accordion-menu/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/accordion-menu/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/accordion-menu/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/accordion-menu/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/accordion-menu/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/accordion-menu/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/accordion-menu/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/accordion-menu/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/accordion-menu/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/accordion-menu/merges",
        archive_url:
          "https://api.github.com/repos/midudev/accordion-menu/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/accordion-menu/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/accordion-menu/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/accordion-menu/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/accordion-menu/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/accordion-menu/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/accordion-menu/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/accordion-menu/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/accordion-menu/deployments",
        created_at: "2018-10-08T13:41:57Z",
        updated_at: "2025-01-02T16:30:12Z",
        pushed_at: "2018-10-02T20:55:03Z",
        git_url: "git://github.com/midudev/accordion-menu.git",
        ssh_url: "git@github.com:midudev/accordion-menu.git",
        clone_url: "https://github.com/midudev/accordion-menu.git",
        svn_url: "https://github.com/midudev/accordion-menu",
        homepage: "",
        size: 394,
        stargazers_count: 3,
        watchers_count: 3,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 3,
        default_branch: "master",
      },
      {
        id: 836790755,
        node_id: "R_kgDOMeBp4w",
        name: "actas-2024",
        full_name: "midudev/actas-2024",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/actas-2024",
        description: null,
        fork: true,
        url: "https://api.github.com/repos/midudev/actas-2024",
        forks_url: "https://api.github.com/repos/midudev/actas-2024/forks",
        keys_url:
          "https://api.github.com/repos/midudev/actas-2024/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/actas-2024/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/actas-2024/teams",
        hooks_url: "https://api.github.com/repos/midudev/actas-2024/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/actas-2024/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/actas-2024/events",
        assignees_url:
          "https://api.github.com/repos/midudev/actas-2024/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/actas-2024/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/actas-2024/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/actas-2024/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/actas-2024/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/actas-2024/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/actas-2024/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/actas-2024/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/actas-2024/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/actas-2024/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/actas-2024/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/actas-2024/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/actas-2024/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/actas-2024/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/actas-2024/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/actas-2024/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/actas-2024/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/actas-2024/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/actas-2024/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/actas-2024/merges",
        archive_url:
          "https://api.github.com/repos/midudev/actas-2024/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/actas-2024/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/actas-2024/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/actas-2024/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/actas-2024/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/actas-2024/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/actas-2024/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/actas-2024/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/actas-2024/deployments",
        created_at: "2024-08-01T15:04:40Z",
        updated_at: "2025-01-16T09:50:21Z",
        pushed_at: "2024-08-01T14:13:52Z",
        git_url: "git://github.com/midudev/actas-2024.git",
        ssh_url: "git@github.com:midudev/actas-2024.git",
        clone_url: "https://github.com/midudev/actas-2024.git",
        svn_url: "https://github.com/midudev/actas-2024",
        homepage: null,
        size: 1345672,
        stargazers_count: 45,
        watchers_count: 45,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 4,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 4,
        open_issues: 0,
        watchers: 45,
        default_branch: "main",
      },
      {
        id: 433881204,
        node_id: "R_kgDOGdyAdA",
        name: "adventjs-issues",
        full_name: "midudev/adventjs-issues",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/adventjs-issues",
        description: "Crea una issue si encuentras un problema en AdventJS.dev",
        fork: false,
        url: "https://api.github.com/repos/midudev/adventjs-issues",
        forks_url: "https://api.github.com/repos/midudev/adventjs-issues/forks",
        keys_url:
          "https://api.github.com/repos/midudev/adventjs-issues/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/adventjs-issues/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/adventjs-issues/teams",
        hooks_url: "https://api.github.com/repos/midudev/adventjs-issues/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/adventjs-issues/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/adventjs-issues/events",
        assignees_url:
          "https://api.github.com/repos/midudev/adventjs-issues/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/adventjs-issues/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/adventjs-issues/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/adventjs-issues/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/adventjs-issues/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/adventjs-issues/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/adventjs-issues/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/adventjs-issues/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/adventjs-issues/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/adventjs-issues/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/adventjs-issues/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/adventjs-issues/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/adventjs-issues/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/adventjs-issues/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/adventjs-issues/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/adventjs-issues/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/adventjs-issues/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/adventjs-issues/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/adventjs-issues/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/adventjs-issues/merges",
        archive_url:
          "https://api.github.com/repos/midudev/adventjs-issues/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/adventjs-issues/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/adventjs-issues/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/adventjs-issues/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/adventjs-issues/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/adventjs-issues/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/adventjs-issues/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/adventjs-issues/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/adventjs-issues/deployments",
        created_at: "2021-12-01T15:27:21Z",
        updated_at: "2025-01-02T16:28:30Z",
        pushed_at: "2021-12-01T15:27:22Z",
        git_url: "git://github.com/midudev/adventjs-issues.git",
        ssh_url: "git@github.com:midudev/adventjs-issues.git",
        clone_url: "https://github.com/midudev/adventjs-issues.git",
        svn_url: "https://github.com/midudev/adventjs-issues",
        homepage: null,
        size: 0,
        stargazers_count: 34,
        watchers_count: 34,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 41,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 41,
        watchers: 34,
        default_branch: "main",
      },
      {
        id: 444188200,
        node_id: "R_kgDOGnnGKA",
        name: "algolia-pwa-ecommerce",
        full_name: "midudev/algolia-pwa-ecommerce",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/algolia-pwa-ecommerce",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/midudev/algolia-pwa-ecommerce",
        forks_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/forks",
        keys_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/events",
        assignees_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/merges",
        archive_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/algolia-pwa-ecommerce/deployments",
        created_at: "2022-01-03T20:17:22Z",
        updated_at: "2025-01-27T02:03:53Z",
        pushed_at: "2022-01-03T20:17:25Z",
        git_url: "git://github.com/midudev/algolia-pwa-ecommerce.git",
        ssh_url: "git@github.com:midudev/algolia-pwa-ecommerce.git",
        clone_url: "https://github.com/midudev/algolia-pwa-ecommerce.git",
        svn_url: "https://github.com/midudev/algolia-pwa-ecommerce",
        homepage: null,
        size: 4780,
        stargazers_count: 26,
        watchers_count: 26,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 19,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 19,
        open_issues: 0,
        watchers: 26,
        default_branch: "develop",
      },
      {
        id: 148655982,
        node_id: "MDEwOlJlcG9zaXRvcnkxNDg2NTU5ODI=",
        name: "ant-design",
        full_name: "midudev/ant-design",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/ant-design",
        description: "🐜 A UI Design Language",
        fork: true,
        url: "https://api.github.com/repos/midudev/ant-design",
        forks_url: "https://api.github.com/repos/midudev/ant-design/forks",
        keys_url:
          "https://api.github.com/repos/midudev/ant-design/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/ant-design/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/ant-design/teams",
        hooks_url: "https://api.github.com/repos/midudev/ant-design/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/ant-design/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/ant-design/events",
        assignees_url:
          "https://api.github.com/repos/midudev/ant-design/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/ant-design/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/ant-design/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/ant-design/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/ant-design/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/ant-design/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/ant-design/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/ant-design/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/ant-design/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/ant-design/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/ant-design/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/ant-design/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/ant-design/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/ant-design/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/ant-design/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/ant-design/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/ant-design/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/ant-design/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/ant-design/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/ant-design/merges",
        archive_url:
          "https://api.github.com/repos/midudev/ant-design/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/ant-design/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/ant-design/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/ant-design/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/ant-design/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/ant-design/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/ant-design/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/ant-design/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/ant-design/deployments",
        created_at: "2018-09-13T15:08:22Z",
        updated_at: "2025-01-02T16:30:13Z",
        pushed_at: "2018-09-13T12:42:53Z",
        git_url: "git://github.com/midudev/ant-design.git",
        ssh_url: "git@github.com:midudev/ant-design.git",
        clone_url: "https://github.com/midudev/ant-design.git",
        svn_url: "https://github.com/midudev/ant-design",
        homepage: "https://ant.design",
        size: 283941,
        stargazers_count: 3,
        watchers_count: 3,
        language: "TypeScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 3,
        default_branch: "master",
      },
      {
        id: 630361647,
        node_id: "R_kgDOJZKOLw",
        name: "aprende-javascript-problemas",
        full_name: "midudev/aprende-javascript-problemas",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/aprende-javascript-problemas",
        description:
          "Repositorio para indicar problemas en la plataforma de Aprende JavaScript",
        fork: false,
        url: "https://api.github.com/repos/midudev/aprende-javascript-problemas",
        forks_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/forks",
        keys_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/events",
        assignees_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/merges",
        archive_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/aprende-javascript-problemas/deployments",
        created_at: "2023-04-20T08:10:22Z",
        updated_at: "2025-01-10T13:44:49Z",
        pushed_at: "2023-04-20T08:18:11Z",
        git_url: "git://github.com/midudev/aprende-javascript-problemas.git",
        ssh_url: "git@github.com:midudev/aprende-javascript-problemas.git",
        clone_url:
          "https://github.com/midudev/aprende-javascript-problemas.git",
        svn_url: "https://github.com/midudev/aprende-javascript-problemas",
        homepage: "https://aprendejavascript.dev",
        size: 0,
        stargazers_count: 123,
        watchers_count: 123,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 4,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 99,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["aprende-javascript", "curso-javascript", "javascript", "js"],
        visibility: "public",
        forks: 4,
        open_issues: 99,
        watchers: 123,
        default_branch: "main",
      },
      {
        id: 68229894,
        node_id: "MDEwOlJlcG9zaXRvcnk2ODIyOTg5NA==",
        name: "aprende-react-js",
        full_name: "midudev/aprende-react-js",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/aprende-react-js",
        description:
          "Contenido de las sesiones del curso de React JS para EscuelaIT",
        fork: false,
        url: "https://api.github.com/repos/midudev/aprende-react-js",
        forks_url:
          "https://api.github.com/repos/midudev/aprende-react-js/forks",
        keys_url:
          "https://api.github.com/repos/midudev/aprende-react-js/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/aprende-react-js/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/aprende-react-js/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/aprende-react-js/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/aprende-react-js/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/aprende-react-js/events",
        assignees_url:
          "https://api.github.com/repos/midudev/aprende-react-js/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/aprende-react-js/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/aprende-react-js/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/aprende-react-js/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/aprende-react-js/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/aprende-react-js/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/aprende-react-js/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/aprende-react-js/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/aprende-react-js/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/aprende-react-js/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/aprende-react-js/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/aprende-react-js/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/aprende-react-js/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/aprende-react-js/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/aprende-react-js/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/aprende-react-js/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/aprende-react-js/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/aprende-react-js/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/aprende-react-js/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/aprende-react-js/merges",
        archive_url:
          "https://api.github.com/repos/midudev/aprende-react-js/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/aprende-react-js/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/aprende-react-js/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/aprende-react-js/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/aprende-react-js/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/aprende-react-js/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/aprende-react-js/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/aprende-react-js/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/aprende-react-js/deployments",
        created_at: "2016-09-14T17:55:08Z",
        updated_at: "2025-01-02T16:30:31Z",
        pushed_at: "2016-10-19T19:27:39Z",
        git_url: "git://github.com/midudev/aprende-react-js.git",
        ssh_url: "git@github.com:midudev/aprende-react-js.git",
        clone_url: "https://github.com/midudev/aprende-react-js.git",
        svn_url: "https://github.com/midudev/aprende-react-js",
        homepage: "",
        size: 14987,
        stargazers_count: 20,
        watchers_count: 20,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 7,
        mirror_url: null,
        archived: true,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 7,
        open_issues: 0,
        watchers: 20,
        default_branch: "master",
      },
      {
        id: 526350024,
        node_id: "R_kgDOH192yA",
        name: "aprendiendo-electron",
        full_name: "midudev/aprendiendo-electron",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/aprendiendo-electron",
        description: "Aprendiendo Electron desde cero",
        fork: false,
        url: "https://api.github.com/repos/midudev/aprendiendo-electron",
        forks_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/forks",
        keys_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/events",
        assignees_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/merges",
        archive_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/aprendiendo-electron/deployments",
        created_at: "2022-08-18T19:36:46Z",
        updated_at: "2025-02-07T04:49:32Z",
        pushed_at: "2022-08-18T19:37:11Z",
        git_url: "git://github.com/midudev/aprendiendo-electron.git",
        ssh_url: "git@github.com:midudev/aprendiendo-electron.git",
        clone_url: "https://github.com/midudev/aprendiendo-electron.git",
        svn_url: "https://github.com/midudev/aprendiendo-electron",
        homepage: null,
        size: 2,
        stargazers_count: 28,
        watchers_count: 28,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 28,
        default_branch: "main",
      },
      {
        id: 188703944,
        node_id: "MDEwOlJlcG9zaXRvcnkxODg3MDM5NDQ=",
        name: "aprendiendo-react",
        full_name: "midudev/aprendiendo-react",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/aprendiendo-react",
        description: "Curso para aprender React desde cero",
        fork: false,
        url: "https://api.github.com/repos/midudev/aprendiendo-react",
        forks_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/forks",
        keys_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/events",
        assignees_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/aprendiendo-react/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/merges",
        archive_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/aprendiendo-react/deployments",
        created_at: "2019-05-26T16:01:51Z",
        updated_at: "2025-02-25T16:21:25Z",
        pushed_at: "2025-01-03T11:27:31Z",
        git_url: "git://github.com/midudev/aprendiendo-react.git",
        ssh_url: "git@github.com:midudev/aprendiendo-react.git",
        clone_url: "https://github.com/midudev/aprendiendo-react.git",
        svn_url: "https://github.com/midudev/aprendiendo-react",
        homepage: "https://twitch.tv/midudev",
        size: 653,
        stargazers_count: 8094,
        watchers_count: 8094,
        language: "TypeScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 1130,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 23,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1130,
        open_issues: 23,
        watchers: 8094,
        default_branch: "master",
      },
      {
        id: 797340415,
        node_id: "R_kgDOL4Zy_w",
        name: "aprendiendogit.dev",
        full_name: "midudev/aprendiendogit.dev",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/aprendiendogit.dev",
        description: "Landing page del libro de Git",
        fork: false,
        url: "https://api.github.com/repos/midudev/aprendiendogit.dev",
        forks_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/forks",
        keys_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/events",
        assignees_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/merges",
        archive_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/aprendiendogit.dev/deployments",
        created_at: "2024-05-07T16:38:55Z",
        updated_at: "2025-01-17T21:36:46Z",
        pushed_at: "2024-08-08T09:39:00Z",
        git_url: "git://github.com/midudev/aprendiendogit.dev.git",
        ssh_url: "git@github.com:midudev/aprendiendogit.dev.git",
        clone_url: "https://github.com/midudev/aprendiendogit.dev.git",
        svn_url: "https://github.com/midudev/aprendiendogit.dev",
        homepage: "https://aprendiendogit-dev.vercel.app",
        size: 502,
        stargazers_count: 58,
        watchers_count: 58,
        language: "Astro",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 3,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 3,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 3,
        open_issues: 3,
        watchers: 58,
        default_branch: "main",
      },
      {
        id: 133839161,
        node_id: "MDEwOlJlcG9zaXRvcnkxMzM4MzkxNjE=",
        name: "aprendiendoreact.com",
        full_name: "midudev/aprendiendoreact.com",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/aprendiendoreact.com",
        description: "Página web de Aprendiendo React",
        fork: false,
        url: "https://api.github.com/repos/midudev/aprendiendoreact.com",
        forks_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/forks",
        keys_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/events",
        assignees_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/merges",
        archive_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/aprendiendoreact.com/deployments",
        created_at: "2018-05-17T16:14:42Z",
        updated_at: "2025-01-17T21:38:58Z",
        pushed_at: "2019-02-02T15:06:59Z",
        git_url: "git://github.com/midudev/aprendiendoreact.com.git",
        ssh_url: "git@github.com:midudev/aprendiendoreact.com.git",
        clone_url: "https://github.com/midudev/aprendiendoreact.com.git",
        svn_url: "https://github.com/midudev/aprendiendoreact.com",
        homepage: "http://aprendiendoreact.com",
        size: 2039,
        stargazers_count: 7,
        watchers_count: 7,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 7,
        default_branch: "master",
      },
      {
        id: 859457010,
        node_id: "R_kgDOMzpF8g",
        name: "astro-5-dev-books",
        full_name: "midudev/astro-5-dev-books",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/astro-5-dev-books",
        description: "Ejemplo de app con Astro 5 y sus nuevas funcionalidades",
        fork: false,
        url: "https://api.github.com/repos/midudev/astro-5-dev-books",
        forks_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/forks",
        keys_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/events",
        assignees_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/astro-5-dev-books/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/merges",
        archive_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/astro-5-dev-books/deployments",
        created_at: "2024-09-18T17:34:39Z",
        updated_at: "2025-02-21T19:12:16Z",
        pushed_at: "2024-09-18T17:47:44Z",
        git_url: "git://github.com/midudev/astro-5-dev-books.git",
        ssh_url: "git@github.com:midudev/astro-5-dev-books.git",
        clone_url: "https://github.com/midudev/astro-5-dev-books.git",
        svn_url: "https://github.com/midudev/astro-5-dev-books",
        homepage: "https://astro-5-dev-books.vercel.app",
        size: 477,
        stargazers_count: 94,
        watchers_count: 94,
        language: "Astro",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 11,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 11,
        open_issues: 2,
        watchers: 94,
        default_branch: "main",
      },
      {
        id: 648642475,
        node_id: "R_kgDOJql_qw",
        name: "awesome-dev-tools",
        full_name: "midudev/awesome-dev-tools",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/awesome-dev-tools",
        description: "A curated list of awesome tools for developers",
        fork: false,
        url: "https://api.github.com/repos/midudev/awesome-dev-tools",
        forks_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/forks",
        keys_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/events",
        assignees_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/awesome-dev-tools/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/merges",
        archive_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/awesome-dev-tools/deployments",
        created_at: "2023-06-02T12:58:13Z",
        updated_at: "2025-01-02T16:27:34Z",
        pushed_at: "2023-06-02T12:58:14Z",
        git_url: "git://github.com/midudev/awesome-dev-tools.git",
        ssh_url: "git@github.com:midudev/awesome-dev-tools.git",
        clone_url: "https://github.com/midudev/awesome-dev-tools.git",
        svn_url: "https://github.com/midudev/awesome-dev-tools",
        homepage: null,
        size: 0,
        stargazers_count: 36,
        watchers_count: 36,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 36,
        default_branch: "main",
      },
      {
        id: 232631645,
        node_id: "MDEwOlJlcG9zaXRvcnkyMzI2MzE2NDU=",
        name: "awesome-uses",
        full_name: "midudev/awesome-uses",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/awesome-uses",
        description: "Awesome Uses Page",
        fork: true,
        url: "https://api.github.com/repos/midudev/awesome-uses",
        forks_url: "https://api.github.com/repos/midudev/awesome-uses/forks",
        keys_url:
          "https://api.github.com/repos/midudev/awesome-uses/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/awesome-uses/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/awesome-uses/teams",
        hooks_url: "https://api.github.com/repos/midudev/awesome-uses/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/awesome-uses/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/awesome-uses/events",
        assignees_url:
          "https://api.github.com/repos/midudev/awesome-uses/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/awesome-uses/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/awesome-uses/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/awesome-uses/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/awesome-uses/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/awesome-uses/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/awesome-uses/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/awesome-uses/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/awesome-uses/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/awesome-uses/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/awesome-uses/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/awesome-uses/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/awesome-uses/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/awesome-uses/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/awesome-uses/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/awesome-uses/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/awesome-uses/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/awesome-uses/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/awesome-uses/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/awesome-uses/merges",
        archive_url:
          "https://api.github.com/repos/midudev/awesome-uses/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/awesome-uses/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/awesome-uses/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/awesome-uses/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/awesome-uses/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/awesome-uses/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/awesome-uses/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/awesome-uses/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/awesome-uses/deployments",
        created_at: "2020-01-08T18:31:06Z",
        updated_at: "2025-01-02T16:29:15Z",
        pushed_at: "2020-01-09T15:02:33Z",
        git_url: "git://github.com/midudev/awesome-uses.git",
        ssh_url: "git@github.com:midudev/awesome-uses.git",
        clone_url: "https://github.com/midudev/awesome-uses.git",
        svn_url: "https://github.com/midudev/awesome-uses",
        homepage: null,
        size: 682,
        stargazers_count: 4,
        watchers_count: 4,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 4,
        default_branch: "master",
      },
      {
        id: 433024927,
        node_id: "R_kgDOGc9vnw",
        name: "black-friday-app-autocomplete",
        full_name: "midudev/black-friday-app-autocomplete",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/black-friday-app-autocomplete",
        description: "Using Algolia Autocomplete for Black Friday app",
        fork: false,
        url: "https://api.github.com/repos/midudev/black-friday-app-autocomplete",
        forks_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/forks",
        keys_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/events",
        assignees_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/merges",
        archive_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/black-friday-app-autocomplete/deployments",
        created_at: "2021-11-29T11:59:16Z",
        updated_at: "2025-01-02T16:28:06Z",
        pushed_at: "2022-09-05T20:24:49Z",
        git_url: "git://github.com/midudev/black-friday-app-autocomplete.git",
        ssh_url: "git@github.com:midudev/black-friday-app-autocomplete.git",
        clone_url:
          "https://github.com/midudev/black-friday-app-autocomplete.git",
        svn_url: "https://github.com/midudev/black-friday-app-autocomplete",
        homepage: null,
        size: 189,
        stargazers_count: 21,
        watchers_count: 21,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 14,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 14,
        open_issues: 0,
        watchers: 21,
        default_branch: "main",
      },
      {
        id: 692119394,
        node_id: "R_kgDOKUDnYg",
        name: "bun-deploy-app",
        full_name: "midudev/bun-deploy-app",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/bun-deploy-app",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/midudev/bun-deploy-app",
        forks_url: "https://api.github.com/repos/midudev/bun-deploy-app/forks",
        keys_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/bun-deploy-app/teams",
        hooks_url: "https://api.github.com/repos/midudev/bun-deploy-app/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/events",
        assignees_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/bun-deploy-app/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/merges",
        archive_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/bun-deploy-app/deployments",
        created_at: "2023-09-15T15:47:17Z",
        updated_at: "2025-01-02T16:27:24Z",
        pushed_at: "2023-09-23T14:37:01Z",
        git_url: "git://github.com/midudev/bun-deploy-app.git",
        ssh_url: "git@github.com:midudev/bun-deploy-app.git",
        clone_url: "https://github.com/midudev/bun-deploy-app.git",
        svn_url: "https://github.com/midudev/bun-deploy-app",
        homepage: null,
        size: 10,
        stargazers_count: 19,
        watchers_count: 19,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 2,
        open_issues: 1,
        watchers: 19,
        default_branch: "main",
      },
      {
        id: 563876639,
        node_id: "R_kgDOIZwTHw",
        name: "campanadas.dev",
        full_name: "midudev/campanadas.dev",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/campanadas.dev",
        description: "La web de Las Campanadas Dev™️",
        fork: false,
        url: "https://api.github.com/repos/midudev/campanadas.dev",
        forks_url: "https://api.github.com/repos/midudev/campanadas.dev/forks",
        keys_url:
          "https://api.github.com/repos/midudev/campanadas.dev/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/campanadas.dev/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/campanadas.dev/teams",
        hooks_url: "https://api.github.com/repos/midudev/campanadas.dev/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/campanadas.dev/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/campanadas.dev/events",
        assignees_url:
          "https://api.github.com/repos/midudev/campanadas.dev/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/campanadas.dev/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/campanadas.dev/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/campanadas.dev/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/campanadas.dev/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/campanadas.dev/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/campanadas.dev/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/campanadas.dev/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/campanadas.dev/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/campanadas.dev/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/campanadas.dev/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/campanadas.dev/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/campanadas.dev/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/campanadas.dev/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/campanadas.dev/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/campanadas.dev/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/campanadas.dev/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/campanadas.dev/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/campanadas.dev/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/campanadas.dev/merges",
        archive_url:
          "https://api.github.com/repos/midudev/campanadas.dev/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/campanadas.dev/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/campanadas.dev/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/campanadas.dev/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/campanadas.dev/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/campanadas.dev/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/campanadas.dev/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/campanadas.dev/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/campanadas.dev/deployments",
        created_at: "2022-11-09T14:23:58Z",
        updated_at: "2025-01-02T16:28:01Z",
        pushed_at: "2022-11-09T14:35:30Z",
        git_url: "git://github.com/midudev/campanadas.dev.git",
        ssh_url: "git@github.com:midudev/campanadas.dev.git",
        clone_url: "https://github.com/midudev/campanadas.dev.git",
        svn_url: "https://github.com/midudev/campanadas.dev",
        homepage: "https://campanadas.dev",
        size: 8,
        stargazers_count: 14,
        watchers_count: 14,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 14,
        default_branch: "main",
      },
      {
        id: 257681757,
        node_id: "MDEwOlJlcG9zaXRvcnkyNTc2ODE3NTc=",
        name: "cards",
        full_name: "midudev/cards",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/cards",
        description:
          "The easiest way to generate dynamic social images at scale.",
        fork: true,
        url: "https://api.github.com/repos/midudev/cards",
        forks_url: "https://api.github.com/repos/midudev/cards/forks",
        keys_url: "https://api.github.com/repos/midudev/cards/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/cards/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/cards/teams",
        hooks_url: "https://api.github.com/repos/midudev/cards/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/cards/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/cards/events",
        assignees_url:
          "https://api.github.com/repos/midudev/cards/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/cards/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/cards/tags",
        blobs_url: "https://api.github.com/repos/midudev/cards/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/cards/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/cards/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/midudev/cards/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/cards/statuses/{sha}",
        languages_url: "https://api.github.com/repos/midudev/cards/languages",
        stargazers_url: "https://api.github.com/repos/midudev/cards/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/cards/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/cards/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/cards/subscription",
        commits_url: "https://api.github.com/repos/midudev/cards/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/cards/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/cards/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/cards/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/cards/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/cards/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/cards/merges",
        archive_url:
          "https://api.github.com/repos/midudev/cards/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/midudev/cards/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/cards/issues{/number}",
        pulls_url: "https://api.github.com/repos/midudev/cards/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/cards/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/cards/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/midudev/cards/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/cards/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/cards/deployments",
        created_at: "2020-04-21T18:29:52Z",
        updated_at: "2025-01-02T16:29:07Z",
        pushed_at: "2020-07-26T20:58:24Z",
        git_url: "git://github.com/midudev/cards.git",
        ssh_url: "git@github.com:midudev/cards.git",
        clone_url: "https://github.com/midudev/cards.git",
        svn_url: "https://github.com/midudev/cards",
        homepage: "https://cards.microlink.io",
        size: 5057,
        stargazers_count: 5,
        watchers_count: 5,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 5,
        default_branch: "master",
      },
      {
        id: 647404438,
        node_id: "R_kgDOJpablg",
        name: "chat-gpt-plugins-javascript",
        full_name: "midudev/chat-gpt-plugins-javascript",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/chat-gpt-plugins-javascript",
        description: "Cómo crear plugins de ChatGPT con JavaScript",
        fork: false,
        url: "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript",
        forks_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/forks",
        keys_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/events",
        assignees_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/merges",
        archive_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/chat-gpt-plugins-javascript/deployments",
        created_at: "2023-05-30T17:55:54Z",
        updated_at: "2025-02-02T01:38:31Z",
        pushed_at: "2023-05-30T17:56:51Z",
        git_url: "git://github.com/midudev/chat-gpt-plugins-javascript.git",
        ssh_url: "git@github.com:midudev/chat-gpt-plugins-javascript.git",
        clone_url: "https://github.com/midudev/chat-gpt-plugins-javascript.git",
        svn_url: "https://github.com/midudev/chat-gpt-plugins-javascript",
        homepage: null,
        size: 666,
        stargazers_count: 60,
        watchers_count: 60,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 10,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 10,
        open_issues: 0,
        watchers: 60,
        default_branch: "main",
      },
      {
        id: 509970822,
        node_id: "R_kgDOHmWJhg",
        name: "chat-hackathon",
        full_name: "midudev/chat-hackathon",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/chat-hackathon",
        description: "Base de la hackathon de Twilio Julio 2022",
        fork: false,
        url: "https://api.github.com/repos/midudev/chat-hackathon",
        forks_url: "https://api.github.com/repos/midudev/chat-hackathon/forks",
        keys_url:
          "https://api.github.com/repos/midudev/chat-hackathon/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/chat-hackathon/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/chat-hackathon/teams",
        hooks_url: "https://api.github.com/repos/midudev/chat-hackathon/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/chat-hackathon/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/chat-hackathon/events",
        assignees_url:
          "https://api.github.com/repos/midudev/chat-hackathon/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/chat-hackathon/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/chat-hackathon/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/chat-hackathon/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/chat-hackathon/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/chat-hackathon/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/chat-hackathon/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/chat-hackathon/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/chat-hackathon/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/chat-hackathon/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/chat-hackathon/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/chat-hackathon/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/chat-hackathon/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/chat-hackathon/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/chat-hackathon/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/chat-hackathon/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/chat-hackathon/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/chat-hackathon/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/chat-hackathon/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/chat-hackathon/merges",
        archive_url:
          "https://api.github.com/repos/midudev/chat-hackathon/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/chat-hackathon/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/chat-hackathon/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/chat-hackathon/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/chat-hackathon/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/chat-hackathon/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/chat-hackathon/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/chat-hackathon/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/chat-hackathon/deployments",
        created_at: "2022-07-03T08:56:35Z",
        updated_at: "2025-01-02T16:28:13Z",
        pushed_at: "2022-07-10T08:24:58Z",
        git_url: "git://github.com/midudev/chat-hackathon.git",
        ssh_url: "git@github.com:midudev/chat-hackathon.git",
        clone_url: "https://github.com/midudev/chat-hackathon.git",
        svn_url: "https://github.com/midudev/chat-hackathon",
        homepage: null,
        size: 478,
        stargazers_count: 21,
        watchers_count: 21,
        language: "Svelte",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 2,
        open_issues: 1,
        watchers: 21,
        default_branch: "main",
      },
      {
        id: 751515265,
        node_id: "R_kgDOLMs2gQ",
        name: "chat-with-pdf",
        full_name: "midudev/chat-with-pdf",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/chat-with-pdf",
        description: "Chatea con un PDF",
        fork: false,
        url: "https://api.github.com/repos/midudev/chat-with-pdf",
        forks_url: "https://api.github.com/repos/midudev/chat-with-pdf/forks",
        keys_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/chat-with-pdf/teams",
        hooks_url: "https://api.github.com/repos/midudev/chat-with-pdf/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/chat-with-pdf/events",
        assignees_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/chat-with-pdf/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/chat-with-pdf/merges",
        archive_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/chat-with-pdf/deployments",
        created_at: "2024-02-01T19:00:48Z",
        updated_at: "2025-02-09T02:26:03Z",
        pushed_at: "2024-02-14T18:00:21Z",
        git_url: "git://github.com/midudev/chat-with-pdf.git",
        ssh_url: "git@github.com:midudev/chat-with-pdf.git",
        clone_url: "https://github.com/midudev/chat-with-pdf.git",
        svn_url: "https://github.com/midudev/chat-with-pdf",
        homepage: null,
        size: 140,
        stargazers_count: 111,
        watchers_count: 111,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 29,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 4,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 29,
        open_issues: 4,
        watchers: 111,
        default_branch: "main",
      },
      {
        id: 869679459,
        node_id: "R_kgDOM9ZBYw",
        name: "cloudinary-hackathon-astro-example",
        full_name: "midudev/cloudinary-hackathon-astro-example",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url:
          "https://github.com/midudev/cloudinary-hackathon-astro-example",
        description: "Ejemplo para Astro Hackathon 2024",
        fork: false,
        url: "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example",
        forks_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/forks",
        keys_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/events",
        assignees_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/merges",
        archive_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/cloudinary-hackathon-astro-example/deployments",
        created_at: "2024-10-08T17:46:11Z",
        updated_at: "2025-01-08T22:11:29Z",
        pushed_at: "2024-10-08T17:48:13Z",
        git_url:
          "git://github.com/midudev/cloudinary-hackathon-astro-example.git",
        ssh_url:
          "git@github.com:midudev/cloudinary-hackathon-astro-example.git",
        clone_url:
          "https://github.com/midudev/cloudinary-hackathon-astro-example.git",
        svn_url:
          "https://github.com/midudev/cloudinary-hackathon-astro-example",
        homepage: null,
        size: 133,
        stargazers_count: 37,
        watchers_count: 37,
        language: "Astro",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 9,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 9,
        open_issues: 0,
        watchers: 37,
        default_branch: "main",
      },
      {
        id: 163305545,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjMzMDU1NDU=",
        name: "code-sandbox-midudev",
        full_name: "midudev/code-sandbox-midudev",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/code-sandbox-midudev",
        description:
          "Styles and Web Components to reuse in my Code Sandbox examples",
        fork: false,
        url: "https://api.github.com/repos/midudev/code-sandbox-midudev",
        forks_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/forks",
        keys_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/events",
        assignees_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/merges",
        archive_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/code-sandbox-midudev/deployments",
        created_at: "2018-12-27T14:50:22Z",
        updated_at: "2025-01-02T16:30:03Z",
        pushed_at: "2018-12-27T14:58:08Z",
        git_url: "git://github.com/midudev/code-sandbox-midudev.git",
        ssh_url: "git@github.com:midudev/code-sandbox-midudev.git",
        clone_url: "https://github.com/midudev/code-sandbox-midudev.git",
        svn_url: "https://github.com/midudev/code-sandbox-midudev",
        homepage: null,
        size: 1,
        stargazers_count: 4,
        watchers_count: 4,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 4,
        default_branch: "master",
      },
      {
        id: 389754521,
        node_id: "MDEwOlJlcG9zaXRvcnkzODk3NTQ1MjE=",
        name: "codi.link",
        full_name: "midudev/codi.link",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/codi.link",
        description: "HTML, CSS, JS sandbox.",
        fork: false,
        url: "https://api.github.com/repos/midudev/codi.link",
        forks_url: "https://api.github.com/repos/midudev/codi.link/forks",
        keys_url:
          "https://api.github.com/repos/midudev/codi.link/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/codi.link/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/codi.link/teams",
        hooks_url: "https://api.github.com/repos/midudev/codi.link/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/codi.link/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/codi.link/events",
        assignees_url:
          "https://api.github.com/repos/midudev/codi.link/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/codi.link/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/codi.link/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/codi.link/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/codi.link/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/codi.link/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/codi.link/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/codi.link/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/codi.link/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/codi.link/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/codi.link/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/codi.link/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/codi.link/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/codi.link/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/codi.link/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/codi.link/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/codi.link/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/codi.link/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/codi.link/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/codi.link/merges",
        archive_url:
          "https://api.github.com/repos/midudev/codi.link/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/codi.link/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/codi.link/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/codi.link/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/codi.link/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/codi.link/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/codi.link/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/codi.link/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/codi.link/deployments",
        created_at: "2021-07-26T20:03:26Z",
        updated_at: "2025-02-25T14:10:32Z",
        pushed_at: "2025-02-05T10:17:17Z",
        git_url: "git://github.com/midudev/codi.link.git",
        ssh_url: "git@github.com:midudev/codi.link.git",
        clone_url: "https://github.com/midudev/codi.link.git",
        svn_url: "https://github.com/midudev/codi.link",
        homepage: "https://codi.link",
        size: 2954,
        stargazers_count: 685,
        watchers_count: 685,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 173,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 173,
        open_issues: 1,
        watchers: 685,
        default_branch: "main",
      },
      {
        id: 226092438,
        node_id: "MDEwOlJlcG9zaXRvcnkyMjYwOTI0Mzg=",
        name: "Consent-String-SDK-JS",
        full_name: "midudev/Consent-String-SDK-JS",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/Consent-String-SDK-JS",
        description:
          "Transparency and Consent Framework Consent String SDK - javascript",
        fork: true,
        url: "https://api.github.com/repos/midudev/Consent-String-SDK-JS",
        forks_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/forks",
        keys_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/events",
        assignees_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/merges",
        archive_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/Consent-String-SDK-JS/deployments",
        created_at: "2019-12-05T12:01:08Z",
        updated_at: "2025-01-02T16:29:20Z",
        pushed_at: "2019-12-05T12:06:58Z",
        git_url: "git://github.com/midudev/Consent-String-SDK-JS.git",
        ssh_url: "git@github.com:midudev/Consent-String-SDK-JS.git",
        clone_url: "https://github.com/midudev/Consent-String-SDK-JS.git",
        svn_url: "https://github.com/midudev/Consent-String-SDK-JS",
        homepage: "https://iabtechlab.com/gdpr-tech",
        size: 870,
        stargazers_count: 3,
        watchers_count: 3,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 3,
        default_branch: "master",
      },
      {
        id: 635448236,
        node_id: "R_kgDOJeArrA",
        name: "contact-form-vercel-storage",
        full_name: "midudev/contact-form-vercel-storage",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/contact-form-vercel-storage",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/midudev/contact-form-vercel-storage",
        forks_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/forks",
        keys_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/events",
        assignees_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/merges",
        archive_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/contact-form-vercel-storage/deployments",
        created_at: "2023-05-02T18:05:40Z",
        updated_at: "2025-01-02T16:27:40Z",
        pushed_at: "2023-05-02T18:06:12Z",
        git_url: "git://github.com/midudev/contact-form-vercel-storage.git",
        ssh_url: "git@github.com:midudev/contact-form-vercel-storage.git",
        clone_url: "https://github.com/midudev/contact-form-vercel-storage.git",
        svn_url: "https://github.com/midudev/contact-form-vercel-storage",
        homepage: null,
        size: 111,
        stargazers_count: 28,
        watchers_count: 28,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 2,
        open_issues: 0,
        watchers: 28,
        default_branch: "main",
      },
      {
        id: 172121988,
        node_id: "MDEwOlJlcG9zaXRvcnkxNzIxMjE5ODg=",
        name: "contributor-faces",
        full_name: "midudev/contributor-faces",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/contributor-faces",
        description: "Put your contributors faces in your readme.",
        fork: true,
        url: "https://api.github.com/repos/midudev/contributor-faces",
        forks_url:
          "https://api.github.com/repos/midudev/contributor-faces/forks",
        keys_url:
          "https://api.github.com/repos/midudev/contributor-faces/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/contributor-faces/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/contributor-faces/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/contributor-faces/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/contributor-faces/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/contributor-faces/events",
        assignees_url:
          "https://api.github.com/repos/midudev/contributor-faces/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/contributor-faces/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/contributor-faces/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/contributor-faces/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/contributor-faces/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/contributor-faces/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/contributor-faces/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/contributor-faces/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/contributor-faces/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/contributor-faces/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/contributor-faces/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/contributor-faces/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/contributor-faces/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/contributor-faces/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/contributor-faces/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/contributor-faces/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/contributor-faces/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/contributor-faces/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/contributor-faces/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/contributor-faces/merges",
        archive_url:
          "https://api.github.com/repos/midudev/contributor-faces/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/contributor-faces/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/contributor-faces/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/contributor-faces/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/contributor-faces/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/contributor-faces/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/contributor-faces/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/contributor-faces/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/contributor-faces/deployments",
        created_at: "2019-02-22T19:17:51Z",
        updated_at: "2025-01-02T16:30:06Z",
        pushed_at: "2018-12-13T19:52:07Z",
        git_url: "git://github.com/midudev/contributor-faces.git",
        ssh_url: "git@github.com:midudev/contributor-faces.git",
        clone_url: "https://github.com/midudev/contributor-faces.git",
        svn_url: "https://github.com/midudev/contributor-faces",
        homepage: "",
        size: 89,
        stargazers_count: 4,
        watchers_count: 4,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 4,
        default_branch: "master",
      },
      {
        id: 238039222,
        node_id: "MDEwOlJlcG9zaXRvcnkyMzgwMzkyMjI=",
        name: "cost-of-modules",
        full_name: "midudev/cost-of-modules",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/cost-of-modules",
        description:
          "Find out which of your dependencies are slowing you down 🐢",
        fork: true,
        url: "https://api.github.com/repos/midudev/cost-of-modules",
        forks_url: "https://api.github.com/repos/midudev/cost-of-modules/forks",
        keys_url:
          "https://api.github.com/repos/midudev/cost-of-modules/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/cost-of-modules/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/cost-of-modules/teams",
        hooks_url: "https://api.github.com/repos/midudev/cost-of-modules/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/cost-of-modules/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/cost-of-modules/events",
        assignees_url:
          "https://api.github.com/repos/midudev/cost-of-modules/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/cost-of-modules/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/cost-of-modules/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/cost-of-modules/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/cost-of-modules/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/cost-of-modules/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/cost-of-modules/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/cost-of-modules/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/cost-of-modules/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/cost-of-modules/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/cost-of-modules/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/cost-of-modules/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/cost-of-modules/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/cost-of-modules/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/cost-of-modules/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/cost-of-modules/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/cost-of-modules/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/cost-of-modules/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/cost-of-modules/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/cost-of-modules/merges",
        archive_url:
          "https://api.github.com/repos/midudev/cost-of-modules/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/cost-of-modules/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/cost-of-modules/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/cost-of-modules/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/cost-of-modules/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/cost-of-modules/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/cost-of-modules/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/cost-of-modules/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/cost-of-modules/deployments",
        created_at: "2020-02-03T19:01:18Z",
        updated_at: "2025-01-02T16:29:54Z",
        pushed_at: "2019-04-16T01:00:29Z",
        git_url: "git://github.com/midudev/cost-of-modules.git",
        ssh_url: "git@github.com:midudev/cost-of-modules.git",
        clone_url: "https://github.com/midudev/cost-of-modules.git",
        svn_url: "https://github.com/midudev/cost-of-modules",
        homepage: "",
        size: 480,
        stargazers_count: 4,
        watchers_count: 4,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 4,
        default_branch: "master",
      },
      {
        id: 247558208,
        node_id: "MDEwOlJlcG9zaXRvcnkyNDc1NTgyMDg=",
        name: "covid-19-spread-simulator",
        full_name: "midudev/covid-19-spread-simulator",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/covid-19-spread-simulator",
        description: "COVID-19 (Coronavirus) Spread Simulator 🦠",
        fork: false,
        url: "https://api.github.com/repos/midudev/covid-19-spread-simulator",
        forks_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/forks",
        keys_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/teams",
        hooks_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/events",
        assignees_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/merges",
        archive_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/covid-19-spread-simulator/deployments",
        created_at: "2020-03-15T21:54:36Z",
        updated_at: "2025-01-15T02:18:42Z",
        pushed_at: "2023-03-06T15:59:33Z",
        git_url: "git://github.com/midudev/covid-19-spread-simulator.git",
        ssh_url: "git@github.com:midudev/covid-19-spread-simulator.git",
        clone_url: "https://github.com/midudev/covid-19-spread-simulator.git",
        svn_url: "https://github.com/midudev/covid-19-spread-simulator",
        homepage: "https://corona-virus-spread-simulator.midudev.now.sh/",
        size: 298,
        stargazers_count: 137,
        watchers_count: 137,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 51,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 8,
        license: {
          key: "isc",
          name: "ISC License",
          spdx_id: "ISC",
          url: "https://api.github.com/licenses/isc",
          node_id: "MDc6TGljZW5zZTEw",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 51,
        open_issues: 8,
        watchers: 137,
        default_branch: "master",
      },
      {
        id: 331113230,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzExMTMyMzA=",
        name: "covid-vacuna",
        full_name: "midudev/covid-vacuna",
        private: false,
        owner: {
          login: "midudev",
          id: 1561955,
          node_id: "MDQ6VXNlcjE1NjE5NTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/1561955?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/midudev",
          html_url: "https://github.com/midudev",
          followers_url: "https://api.github.com/users/midudev/followers",
          following_url:
            "https://api.github.com/users/midudev/following{/other_user}",
          gists_url: "https://api.github.com/users/midudev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/midudev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/midudev/subscriptions",
          organizations_url: "https://api.github.com/users/midudev/orgs",
          repos_url: "https://api.github.com/users/midudev/repos",
          events_url: "https://api.github.com/users/midudev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/midudev/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/midudev/covid-vacuna",
        description:
          "App para ver el estado de la vacunación COVID-19 en España",
        fork: false,
        url: "https://api.github.com/repos/midudev/covid-vacuna",
        forks_url: "https://api.github.com/repos/midudev/covid-vacuna/forks",
        keys_url:
          "https://api.github.com/repos/midudev/covid-vacuna/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/midudev/covid-vacuna/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/midudev/covid-vacuna/teams",
        hooks_url: "https://api.github.com/repos/midudev/covid-vacuna/hooks",
        issue_events_url:
          "https://api.github.com/repos/midudev/covid-vacuna/issues/events{/number}",
        events_url: "https://api.github.com/repos/midudev/covid-vacuna/events",
        assignees_url:
          "https://api.github.com/repos/midudev/covid-vacuna/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/midudev/covid-vacuna/branches{/branch}",
        tags_url: "https://api.github.com/repos/midudev/covid-vacuna/tags",
        blobs_url:
          "https://api.github.com/repos/midudev/covid-vacuna/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/midudev/covid-vacuna/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/midudev/covid-vacuna/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/midudev/covid-vacuna/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/midudev/covid-vacuna/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/midudev/covid-vacuna/languages",
        stargazers_url:
          "https://api.github.com/repos/midudev/covid-vacuna/stargazers",
        contributors_url:
          "https://api.github.com/repos/midudev/covid-vacuna/contributors",
        subscribers_url:
          "https://api.github.com/repos/midudev/covid-vacuna/subscribers",
        subscription_url:
          "https://api.github.com/repos/midudev/covid-vacuna/subscription",
        commits_url:
          "https://api.github.com/repos/midudev/covid-vacuna/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/midudev/covid-vacuna/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/midudev/covid-vacuna/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/midudev/covid-vacuna/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/midudev/covid-vacuna/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/midudev/covid-vacuna/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/midudev/covid-vacuna/merges",
        archive_url:
          "https://api.github.com/repos/midudev/covid-vacuna/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/midudev/covid-vacuna/downloads",
        issues_url:
          "https://api.github.com/repos/midudev/covid-vacuna/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/midudev/covid-vacuna/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/midudev/covid-vacuna/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/midudev/covid-vacuna/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/midudev/covid-vacuna/labels{/name}",
        releases_url:
          "https://api.github.com/repos/midudev/covid-vacuna/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/midudev/covid-vacuna/deployments",
        created_at: "2021-01-19T21:23:48Z",
        updated_at: "2025-01-21T20:43:05Z",
        pushed_at: "2023-05-26T23:58:58Z",
        git_url: "git://github.com/midudev/covid-vacuna.git",
        ssh_url: "git@github.com:midudev/covid-vacuna.git",
        clone_url: "https://github.com/midudev/covid-vacuna.git",
        svn_url: "https://github.com/midudev/covid-vacuna",
        homepage: "https://covid-vacuna.app",
        size: 15413,
        stargazers_count: 365,
        watchers_count: 365,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 126,
        mirror_url: null,
        archived: true,
        disabled: false,
        open_issues_count: 2,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "covid",
          "covid-19",
          "covid-19-data",
          "covid-19-dataset",
          "covid-19-spain",
          "hacktoberfest",
        ],
        visibility: "public",
        forks: 126,
        open_issues: 2,
        watchers: 365,
        default_branch: "main",
      },
    ]);
  }),
];
