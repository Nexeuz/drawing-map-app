import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from '@env/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';



@NgModule({
  declarations: [],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiMapsKey
    }),
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: `${environment.host}` }}],
})
export class CoreModule { }
