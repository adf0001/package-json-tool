
// package-json-tool @ npm, tools for package.json

//check 'dependencies', or [prefix + 'Dependencies']
var hasDependencies = function (pkg, prefix) {
	if (!prefix) {
		return (pkg.dependencies && Object.keys(pkg.dependencies).length > 0);
	}

	var dep = pkg[prefix + "Dependencies"];
	return (dep && Object.keys(dep).length > 0);
}

//check any of 'dependencies' or 'devDependencies'
var hasAnyDependencies = function (pkg) {
	return (pkg.dependencies && Object.keys(pkg.dependencies).length > 0) ||
		(pkg.devDependencies && Object.keys(pkg.devDependencies).length > 0);
}

//module

module.exports = {
	hasDependencies: hasDependencies,

	hasAnyDependencies: hasAnyDependencies,
	anyDependencies: hasAnyDependencies,	//shortcut

};
