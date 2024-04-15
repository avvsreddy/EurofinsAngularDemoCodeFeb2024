import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ApifacadeService, IServiceToken, MockService } from './service/apifacade.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), 
    [
      {provide: IServiceToken, useClass:ApifacadeService}
    ],
]};
