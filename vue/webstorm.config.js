/**
 * 这个文件没啥用，如果使用的是 WebStorm
 * Languages and Frameworks | JavaScript | Webpack
 * 手动 -> 指向当前文件，适配 css @import
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'~@': path.resolve(__dirname, 'src/')
		}
	}
}
