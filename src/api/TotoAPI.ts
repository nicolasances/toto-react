import moment from 'moment';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

/**
 * A function that resolves an API name to its base URL.
 * Each consuming app provides its own implementation.
 */
export type EndpointResolver = (api: string) => string | undefined;

export function cid() {

  let ts = moment().format('YYYYMMDDHHmmssSSS');

  let random = (Math.random() * 100000).toFixed(0).padStart(5, '0');

  return ts + '-' + random;

}

/**
 * Wrapper for the fetch() React method that adds the required fields for Toto authentication.
 *
 * Instantiate with a custom EndpointResolver so that each consuming app can provide its own
 * endpoint map without coupling this package to any specific app's configuration.
 *
 * @param resolveEndpoint - Function that maps an API name to its base URL.
 * @param noHeaderOverride set to true to avoid that this method overrides some of the headers
 */
export class TotoAPI {

  constructor(private readonly resolveEndpoint: EndpointResolver) {}

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

    const baseUrl = this.resolveEndpoint(api) ?? `/${api}`;

    return fetch(baseUrl + path, options);
  }
}
