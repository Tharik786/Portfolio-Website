import axios from 'axios';
import { Repository } from '../types';

export const fetchRepositories = async (username: string): Promise<Repository[]> => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 9
      },
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};