import { ERROR_MESSAGES } from '@/utils/error-messages';
import AppError from '@/utils/appError';
import { fetch } from 'undici';
import { HTTP_STATUS_CODES } from '@/utils/status-codes';

export default async function fetchHook<T, U>(
  url: string,
  body: T,
): Promise<U> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      // Handle HTTP errors
      console.error(`HTTP error: ${res.status}`);
      throw new AppError(ERROR_MESSAGES.SERVER_GENERIC, res.status);
    }

    try {
      return (await res.json()) as U;
    } catch (jsonError) {
      console.error('JSON parsing error:', jsonError);
      throw new AppError(ERROR_MESSAGES.SERVER_RESPONSE_NOT_JSON, res.status);
    }
  } catch (error: any) {
    console.error('Fetch error:', error);
    throw new AppError(
      error.message || ERROR_MESSAGES.SERVER_GENERIC,
      error.status ? error.status : HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
    );
  }
}
