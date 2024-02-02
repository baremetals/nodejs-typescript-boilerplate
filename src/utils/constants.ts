export const ACCOUNT_CREATION_SESSION_PREFIX = 'registration-attempt-';
export const ACCOUNT_ACTIVATED = 'ACCOUNT_ACTIVATED';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 2; // 48 hours

export const passwordMinLength = 6;
export const passwordMaxLength = 72;
export const nameMinLength = 3;
export const nameMaxLength = 24;

export const UserStatuses = {
  ACTIVE: 'active',
  DELETED: 'deleted',
  LOCKED_OUT: 'locked_out',
  BANNED: 'banned',
};

export const InputFields = {
  AUTH: {
    PASSWORD: 'password',
    CONFIRM_PASSWORD: 'confirmPassword',
    CURRENT_PASSWORD: 'currentPassword',
    NEW_PASSWORD: 'newPassword',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
  },
};

// basics
export const websiteName = '';
export const SOCKET_ADDRESS_PRODUCTION = '';
export const SERVER_HOSTNAME_DOCKER_PRODUCTION = '';
export const REDIS_HOSTNAME_PRODUCTION = 'redis';
export const ROUTE_TOKEN = 'token';
export const RESET_PASSWORD_PARTIAL_URL = '/auth/reset-password';
export const ACCOUNT_ACTIVATION_PARTIAL_URL = 'auth/activate-account';
// times
export const ONE_SECOND = 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;

// rate limits
// client socket chat
export const chatDelayUnregisteredUser = ONE_SECOND * 3;
export const chatDelayLoggedInUser = 300;
// ip:general
export const perIpSlidingWindowTime = 30 * ONE_MINUTE;
export const perIpSlidingWindowLimit = 500;
export const perIpFixedWindowCounterTime = 30 * ONE_SECOND;
export const perIpFixedWindowCounterLimit = 50;
// ip: registration
export const registrationSlidingWindowLimit = 5;
export const registrationFixedWindowCounterTime = 10 * ONE_SECOND;
export const registrationFixedWindowCounterLimit = 2;
// ip: password reset email
export const passwordResetEmailSlidingWindowLimit = 3;
export const passwordResetEmailFixedWindowCounterTime = 10 * ONE_SECOND;
export const passwordResetEmailFixedWindowCounterLimit = 1;
// login
export const failedLoginCounterExpiration = 10 * ONE_MINUTE;
export const failedLoginCountTolerance = 3;
// redis key prefixes
export const REDIS_KEY_PREFIXES = {
  FAILED_LOGINS: '',
};
// cookies
export const CookieNames = {
  ACCESS_TOKEN: '',
};

