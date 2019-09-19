// Logger details
const logger = (req, res, next) => {
	console.log(
		'Logged ',
		`${req.protocol}://${req.get('host')} ${req.originalUrl}`
	);
	next();
};

module.export = logger;
// MiddleWare is capable to modify request response
