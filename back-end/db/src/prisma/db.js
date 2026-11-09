import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

dotenv.config({
  path: path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../.env'
  ),
});

import mongo from '@prisma/orm-mongo/runtime';
import { contractFromJson } from '@prisma/orm-mongo/static';
import contractJson from './contract.json' with { type: 'json' };


export const contract = contractFromJson(contractJson);

export const db = mongo({
  contract,
  url: process.env.DATABASE_URL,
});
