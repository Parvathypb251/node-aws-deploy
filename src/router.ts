import express from 'express';

const router = express.Router();
router.use('/health-checks', (req, res) => {
  res.sendStatus(200);
});
export default router;
