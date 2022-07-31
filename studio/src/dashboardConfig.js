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
                    "62e65e768720ed466ee81670",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-csqtiugj",
                  apiId: "3c897309-dccc-447d-8db2-cd3901b176a8",
                },
                {
                  buildHookId: "62e65e76051ac743b3ee1a5d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tkg7yb59",
                  apiId: "7c851437-3897-45a8-a0ab-cb4396fde5fe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kevinvobw/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tkg7yb59.netlify.app",
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
