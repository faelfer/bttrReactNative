type EnviromentProps = {
	name: string;
	baseUrl: string;
	sentryDsn: string;
	onesignalAppId: string;
};

// PRODUCTION
// const environment: EnviromentProps = {
// 	name: 'production',
// 	baseUrl: 'https://reidogas.deway.com.br/api',
// 	sentryDsn: 'https://242af10d995a4124937783af0c7581eb@o4504487025115136.ingest.sentry.io/4504673666334720',
// 	onesignalAppId: 'e894f831-09c3-437c-a591-baa16627c64d',
// };

// STAGING
// const environment = {
//   name: 'staging',
//   baseUrl: 'https://nossogas-dev.deway.com.br/api',
//   sentryDsn:
//     'https://242af10d995a4124937783af0c7581eb@o4504487025115136.ingest.sentry.io/4504673666334720',
//   onesignalAppId: 'e894f831-09c3-437c-a591-baa16627c64d',
// };

// DEVELOPMENT
// const environment = {
//   name: 'development',
//   baseUrl: 'https://5182-177-22-40-238.sa.ngrok.io/api',
//   sentryDsn: 'https://242af10d995a4124937783af0c7581eb@o4504487025115136.ingest.sentry.io/4504673666334720',
//   onesignalAppId: 'e894f831-09c3-437c-a591-baa16627c64d',
// };

// TESTING
const environment = {
	name: 'testing',
	baseUrl: 'http://10.0.2.2:8000/api',
	sentryDsn: 'https://242af10d995a4124937783af0c7581eb@o4504487025115136.ingest.sentry.io/4504673666334720',
	onesignalAppId: 'e894f831-09c3-437c-a591-baa16627c64d',
};

export default environment;
