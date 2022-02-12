
//global variable, for html page, refer tpsvr @ npm.
package_json_tool = require("../package-json-tool.js");

module.exports = {

	"package_json_tool": function (done) {

		var pkg1 = {
			dependencies: { aa: 1 },
			devDependencies: {},
		};
		var pkg2 = {
			dependencies: {},
		};

		done(!(
			//.hasDependencies(pkg, prefix)		//check 'dependencies', or [prefix + 'Dependencies']
			package_json_tool.hasDependencies(pkg1) &&
			!package_json_tool.hasDependencies(pkg1, "dev") &&
			!package_json_tool.hasDependencies(pkg1, "peer") &&

			//.hasAnyDependencies(pkg)		//check any of 'dependencies' or 'devDependencies'
			package_json_tool.hasAnyDependencies(pkg1) &&
			!package_json_tool.anyDependencies(pkg2)	//shortcut
		));
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('package_json_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
