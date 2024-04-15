import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SampleServiceClient, ServiceClient, token } from './Service/ServiceClient.Service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    [
      { provide: token, useClass: SampleServiceClient }
    ],
  ]
};
