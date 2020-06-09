/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { Config } from './models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config!: Config;

  constructor(private readonly http: HttpClient) {}

  public fetch() {
    return new Promise((resolve, reject) => {
      if (environment.configLocal) {
        this.config = environment.configLocal;
        resolve(this.config);
      } else if (environment.configRemote) {
        this.http.get<Config>(environment.configRemote).subscribe((config) => {
          this.config = config;
          resolve(this.config);
        });
      } else {
        reject('No config provided');
      }
    });
  }

  public get apiUrl() {
    return this.config.api;
  }
}
