import app from './app';
app();

process.on('SIGTERM', () => {
  // tslint:disable-next-line: no-console
  console.log('SIGTERM detected. Shutting down.');
  process.exit();
});
