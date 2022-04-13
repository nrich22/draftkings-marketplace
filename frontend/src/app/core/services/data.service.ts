import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, expand, takeWhile } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface PaginatedResponse<T> {
  count: number;
  page: number;
  page_length: number;
  items: Array<T>;
}

export type QueryParams = { [key: string]: any };

export interface DataServiceRequestOptions {
  queryParams?: QueryParams;
  recursive?: boolean;
}

/**
 * The base HTTP service that all HTTP services inherit from. This class provides
 * basic functionality when dealing with Skirmish's API, such as recursive list calls,
 * handling paginated responses, converting query param objects to strings, and setting
 * JSON headers if needed
 *
 * Author: Kyle Kaniecki <kanieckikyle@gmail.com>
 */
export class DataService {
  private _jsonHeaders: HttpHeaders = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  ).set(
    'Access-Control-Allow-Origin',
    '*'
  ).set(
    'authority', 'marketplace.draftkings.com'
  );

  constructor(protected http: HttpClient) {}

  /**
   * Requests an API endpoint and expects a paginated list response to be returned
   *
   * @param endpoint - The API endpoint that we are going to call. NOTE: This is only
   *  the endpoint, not the whole URL
   *
   * @param options - The options for this get all request
   *
   * @param options.queryParams - The query parameter object that will be converted into
   *  a query param string to send with the request
   *
   * @param options.recursive - A request option flag that designates that this request
   *  should keep requesting until we retreive all of the entries
   */
  protected _getAll<T>(
    endpoint: string,
    { queryParams = {}, recursive = false }: DataServiceRequestOptions = {}
  ): Observable<PaginatedResponse<T>> {
    this.checkEndpoint(endpoint);

    // A helper function that generates our http call for us and returns the call
    const generateListRequest = (queryParams: {
      [key: string]: any;
    }): Observable<PaginatedResponse<T>> => {
      return this.http.get<PaginatedResponse<T>>(
        `${environment.baseUrl}${endpoint}${this.convertParamsToString(
          queryParams
        )}`,
        { headers: this._jsonHeaders }
      );
    };

    // Setup the variable that we will be storing our http call in
    let call: ReturnType<typeof generateListRequest> = generateListRequest(
      queryParams
    );
    // If this call is recursive, then let's expand it until we get all of the items we can
    if (recursive) {
      return call.pipe(
        expand((response) =>
          generateListRequest({
            ...queryParams,
            page: response.page + 1,
            page_length: response.page_length,
          })
        ),
        takeWhile(
          (response) => response.items.length === response.page_length,
          true
        )
      );
    }

    return call.pipe(catchError(this.handleError));
  }

  /**
   * Sends a GET request to the specified endpoint and returns the result
   *
   * @param endpoint - The API endpoint that we are going to call. NOTE: This is only
   *  the endpoint, not the whole URL
   *
   * @param params - QueryParams object that will be converted to a string and appended
   *  to the end of the request URL
   */
  protected _get<T>(endpoint: string, params?: QueryParams): Observable<T> {
    this.checkEndpoint(endpoint);
    return this.http
      .get<T>(
        `${environment.baseUrl}${endpoint}${this.convertParamsToString(
          params
        )}`,
        {
          headers: this._jsonHeaders,
        }
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Sends a post request to the specified endpoint and returns the result
   *
   * @param endpoint - The API endpoint that we are going to call. NOTE: This is only
   *  the endpoint, not the whole URL
   *
   * @param data - the data to append to the post request's body
   */
  protected _post<T>(endpoint: string, data: any): Observable<T> {
    this.checkEndpoint(endpoint);
    return this.http
      .post<T>(`${environment.baseUrl}${endpoint}`, data)
      .pipe(catchError(this.handleError));
  }

  protected _put<T>(endpoint: string, data: any): Observable<T> {
    this.checkEndpoint(endpoint);
    return this.http
      .put<T>(`${environment.baseUrl}${endpoint}`, data)
      .pipe(catchError(this.handleError));
  }

  protected _patch<T>(
    endpoint: string,
    data: any,
    queryParams?: QueryParams
  ): Observable<T> {
    this.checkEndpoint(endpoint);
    return this.http
      .patch<T>(
        `${environment.baseUrl}${endpoint}${this.convertParamsToString(
          queryParams
        )}`,
        data
      )
      .pipe(catchError(this.handleError));
  }

  protected _delete<T>(endpoint: string, params?: any): Observable<T> {
    this.checkEndpoint(endpoint);
    return this.http
      .delete<T>(
        `${environment.baseUrl}${endpoint}${this.convertParamsToString(params)}`
      )
      .pipe(catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    const response = error.error;
    return throwError(new Error(response.error));
  }

  private checkEndpoint(endpoint: string): void {
    if (endpoint[endpoint.length - 1] !== '/') {
      throw new Error('Endpoints must end with /');
    }
  }

  private convertParamsToString(params: QueryParams | undefined): string {
    if (!params) {
      return '';
    }

    return (
      '?' +
      Object.keys(params)
        .map((key) => {
          const value = params[key];
          if (value instanceof Array) {
            return value
              .map((e) => `${key}=${encodeURIComponent(e)}`)
              .join('&');
          } else if (value instanceof Date) {
            return `${key}=${value.toISOString().substring(0, 10)}`;
          } else if (value !== null && value !== undefined && value !== '') {
            return `${key}=${encodeURIComponent(value)}`;
          }
          return '';
        })
        .filter(Boolean)
        .join('&')
    );
  }
}