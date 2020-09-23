import { v4 as uuidv4 } from 'uuid';

export let config: IConfig = {
  tenantId: '',
  environment: 'sandbox',
  version: '2.0',
};

export const setConfig = (obj: IConfig) => {
  config = { ...obj };
};

export const MAIN_SCRIPT_DOMAIN = `https://js.verygoodvault.com`;
export const BACKUP_SCRIPT_DOMAIN = `https://js3.verygoodvault.com`;
export const TRACE_ID = uuidv4();
