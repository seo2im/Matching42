module.exports = {
	presets : ['@babel/preset-env', '@babel/preset-react'],
	plugins : ['@babel/plugin-transform-async-to-generator',
				'@babel/plugin-transform-arrow-functions',
				'@babel/plugin-transform-template-literals',
				'@babel/plugin-syntax-dynamic-import']
}