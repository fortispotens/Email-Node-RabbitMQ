module.exports = {
	apps: [
		{
			name: 'EmailRabbitMQ',
			script: './src/index.js',
			exec_mode: 'cluster_mode',
			instances: 'max',
			env: {
				NODE_ENV: 'production',
			},
		},
		{
			name: 'emailWorker',
			args: 'consumeMessage',
			exec_mode: 'fork',
			watch: false,
			script: './src/emailService/emailWorker.js',
			instances: '1',
		},
	],
};
