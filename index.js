export default function ({types: t}) {
  return {
    visitor: {
      ClassMethod(path) {
        // TODO: Add logic to detect that the render() method belongs to a React component
        if (path.node.key.name !== "render") {
          return;
        }

        const componentName = path.find(parent => parent.isClassDeclaration())
        if (componentName.node.id.name === "MyClass") {
          const returnStatement = path.get("body").get("body")[0];
          returnStatement.get("argument").remove();
          returnStatement.set("argument", t.BooleanLiteral(false));
        }
      }
    }
  };
}
