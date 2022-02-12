# package-json-tool
tools for package.json

# Install
```
npm install package-json-tool
```

# Usage & Api
```javascript
var package_json_tool = require("package-json-tool");

var pkg1 = {
	dependencies: { aa: 1 },
	devDependencies: {},
};
var pkg2 = {
	dependencies: {},
};

//.hasDependencies(pkg, prefix)		//check 'dependencies', or [prefix + 'Dependencies']
package_json_tool.hasDependencies(pkg1) &&
!package_json_tool.hasDependencies(pkg1, "dev") &&
!package_json_tool.hasDependencies(pkg1, "peer") &&

//.hasAnyDependencies(pkg)		//check any of 'dependencies' or 'devDependencies'
package_json_tool.hasAnyDependencies(pkg1) &&
!package_json_tool.anyDependencies(pkg2)	//shortcut

```
