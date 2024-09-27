import { newClient } from 'project-oracle-helpers/dist/apiClient';
import { CONFIG } from '../constants/config';
export const apiClient = newClient(CONFIG.serverUrl);
