import { CONFIG } from '@/lib/constants/config';
import { newClient } from 'project-oracle-helpers';
export const apiClient = newClient(CONFIG.serverUrl);
