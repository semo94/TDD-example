var config = {
	port: process.env.PORT || 3000,
	db: process.env.MONGOLAB_URI || "mongodb://127.0.0.1/userapi",
	test_port: 3001,
	test_db: "mongodb://127.0.0.1/userapi_test"
}
module.exports = config;
