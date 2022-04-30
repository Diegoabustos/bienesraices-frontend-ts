exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/layout",
    component: require.resolve("./src/components/layout.tsx"),
    context: {},
    defer: true,
  })
}
