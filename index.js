     1	import express from 'express';
     2	import { syncToHeaven } from './heaven-bot.js';
     3	import dotenv from 'dotenv';
...
    83	  console.log(`🚀 Heaven Automation Server running on port ${PORT}`);
    84	  console.log(`📡 Webhook endpoint: http://localhost:${PORT}/api/heaven-sync`);
    85	  console.log(`💚 Health check: http://localhost:${PORT}/health`);
    86	});
