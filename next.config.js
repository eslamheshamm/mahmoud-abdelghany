module.exports = {
	reactStrictMode: true,
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/" },
			"/about": { page: "/about" },
			"/blog": { page: "/blog" },
			"/fonts-in-use": { page: "/fonts-in-use" },
			"/typefaces": { page: "/typefaces" },
		};
	},
};
