import { newClient } from 'project-oracle-helpers';
import { CONFIG } from '../constants/config';
export const apiClient = newClient(CONFIG.serverUrl);
