import app from './app';

/**
 * Bootstrap the application. Start express.
 */
const main = async () => {
  try {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    process.exit(1);
  }
};

main();
