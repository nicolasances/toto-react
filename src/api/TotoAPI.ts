import moment from 'moment';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

let endpointResolver: ((api: string) => string) | undefined;

/**
 * Configure the TotoAPI endpoint resolver.
 * Must be called once during app initialization before using any TotoAPI-based clients.
 * @param resolver - Function that maps an API name to its base URL.
 */
export function configureTotoAPI(resolver: (api: string) => string): void {
  endpointResolver = resolver;
}

export function cid() {

  let ts = moment().format('YYYYMMDDHHmmssSSS');

  let random = (Math.random() * 100000).toFixed(0).padStart(5, '0');

  return ts + '-' + random;

}

/**
 * Wrapper for the fetch() React method that adds the required fields for Toto authentication
 * @param noHeaderOverride set to true to avoid that this method overrides some of the headers
 */
export class TotoAPI {

  fetch(api: string, path: string, options?: any, noHeaderOverride: boolean = false) {

    if (options == null) options = { method: 'GET', headers: {} };
    if (options.headers == null) options.headers = {};

    let idToken = cookies.get('user') ? cookies.get('user').idToken : null

    // Adding standard headers
    if (!noHeaderOverride) {
      options.headers['Accept'] = 'application/json';
      options.headers['x-correlation-id'] = cid();
      options.headers['x-client'] = "totoMoneyWeb";
      options.headers['Authorization'] = 'Bearer ' + idToken;
      options.headers['auth-provider'] = "toto";
    }

    const baseUrl = endpointResolver ? endpointResolver(api) : `/${api}`;

    return fetch(baseUrl + path, options);
  }
}
