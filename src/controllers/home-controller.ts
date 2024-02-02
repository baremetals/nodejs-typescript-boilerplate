import { HTTP_STATUS_CODES } from '@/utils/status-codes';
import { Request, Response, NextFunction } from 'express';
import catchAsync from '@/hooks/catchAsync';

const healthHandler = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    res.status(HTTP_STATUS_CODES.OK).send('I am healthy');
  },
);


const rootHandler = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    res.status(HTTP_STATUS_CODES.OK).send(
      `
        "<html>"
        "<body style='padding: 10px;'>"
        "<h1>Welcome to the API</h1>"
        "<div>"
        "Check the docs: <a href='/api-docs'>here</a>"
        "</div>"
        "</body>"
        "</html>"
  `,
    );
  },
);

export { rootHandler, healthHandler };