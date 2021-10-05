export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615cc9b788100700df8ecdb0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-fqjhy3vh",
                  apiId: "192498c8-3881-42c0-837b-a93a95635154",
                },
                {
                  buildHookId: "615cc9b78e3dc500c8a18a5a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8drxn4kz",
                  apiId: "de0947bc-dfc0-46b5-8af2-9ad4210403ac",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/OsMi1508/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8drxn4kz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
