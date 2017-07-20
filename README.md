# WIP: babel-plugin-replace-render-with-false

Do not use, as this is not ready at all. See current progress: https://astexplorer.net/#/gist/72f197ca045924108ee9bd6facafeae7/849c44d9e603bdc625b734c412fa17a68ffc753e

### Use case

When using an application as a dependency, you may want to disable rendering a couple of components because they aren't needed anymore. Instead of adding `if (someCondition) return false` all around the code-base, this plugin will allow to do it at transpile time.

Define the list of components as plugin configuration, and the render() method will be replaced by `return false;`
