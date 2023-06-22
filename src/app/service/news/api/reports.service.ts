/**
 * Spaceflight News API
 * The Spaceflight News API (SNAPI) is a product by [The Space Devs](https://thespacedevs.com) (TSD). It\'s the most complete and up-to-date spaceflight news API currently available.  While this API is **free to use**, we do encourage developers to support us through [Patreon](https://www.patreon.com/TheSpaceDevs) to keep the API up and running.   ### FAQs & Tutorials   - [GitHub repository](https://github.com/TheSpaceDevs/Tutorials/): contains FAQs and tutorials for TSD APIs   - [TSD FAQ](https://github.com/TheSpaceDevs/Tutorials/blob/main/faqs/faq_TSD.md): TSD-specific FAQ (e.g. history, network, funding, etc.)   - [SNAPI FAQ](https://github.com/TheSpaceDevs/Tutorials/blob/main/faqs/faq_SNAPI.md): SNAPI-specific FAQ   ### Feedback & Support   If you need any help with SNAPI, you can ask in the [`💬feedback-and-help`](https://discord.com/channels/676725644444565514/1019976345884827750) forum of the TSD [Discord server](https://discord.gg/p7ntkNA) or email [derk@spaceflightnewsapi.net](mailto:derk@spaceflightnewsapi.net).
 *
 * The version of the OpenAPI document: v4.0.3 (v4)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { PaginatedReportList } from '../model/paginatedReportList';
// @ts-ignore
import { Report } from '../model/report';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ReportsService {

    protected basePath = 'https://api.spaceflightnewsapi.net/v4/ar2cles';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param limit Number of results to return per page.
     * @param newsSite Search for documents with a news_site__name present in a list of comma-separated values. Case insensitive.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param publishedAtGt Get all documents published after a given ISO8601 timestamp (excluded).
     * @param publishedAtGte Get all documents published after a given ISO8601 timestamp (included).
     * @param publishedAtLt Get all documents published before a given ISO8601 timestamp (excluded).
     * @param publishedAtLte Get all documents published before a given ISO8601 timestamp (included).
     * @param search Search for documents with a specific phrase in the title or summary.
     * @param summaryContains Search for all documents with a specific phrase in the summary.
     * @param summaryContainsAll Search for documents with a summary containing all keywords from comma-separated values.
     * @param summaryContainsOne Search for documents with a summary containing at least one keyword from comma-separated values.
     * @param titleContains Search for all documents with a specific phrase in the title.
     * @param titleContainsAll Search for documents with a title containing all keywords from comma-separated values.
     * @param titleContainsOne Search for documents with a title containing at least one keyword from comma-separated values.
     * @param updatedAtGt Get all documents updated after a given ISO8601 timestamp (excluded).
     * @param updatedAtGte Get all documents updated after a given ISO8601 timestamp (included).
     * @param updatedAtLt Get all documents updated before a given ISO8601 timestamp (excluded).
     * @param updatedAtLte Get all documents updated before a given ISO8601 timestamp (included).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsList(limit?: number, newsSite?: string, offset?: number, ordering?: string, publishedAtGt?: string, publishedAtGte?: string, publishedAtLt?: string, publishedAtLte?: string, search?: string, summaryContains?: string, summaryContainsAll?: string, summaryContainsOne?: string, titleContains?: string, titleContainsAll?: string, titleContainsOne?: string, updatedAtGt?: string, updatedAtGte?: string, updatedAtLt?: string, updatedAtLte?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<PaginatedReportList>;
    public reportsList(limit?: number, newsSite?: string, offset?: number, ordering?: string, publishedAtGt?: string, publishedAtGte?: string, publishedAtLt?: string, publishedAtLte?: string, search?: string, summaryContains?: string, summaryContainsAll?: string, summaryContainsOne?: string, titleContains?: string, titleContainsAll?: string, titleContainsOne?: string, updatedAtGt?: string, updatedAtGte?: string, updatedAtLt?: string, updatedAtLte?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<PaginatedReportList>>;
    public reportsList(limit?: number, newsSite?: string, offset?: number, ordering?: string, publishedAtGt?: string, publishedAtGte?: string, publishedAtLt?: string, publishedAtLte?: string, search?: string, summaryContains?: string, summaryContainsAll?: string, summaryContainsOne?: string, titleContains?: string, titleContainsAll?: string, titleContainsOne?: string, updatedAtGt?: string, updatedAtGte?: string, updatedAtLt?: string, updatedAtLte?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<PaginatedReportList>>;
    public reportsList(limit?: number, newsSite?: string, offset?: number, ordering?: string, publishedAtGt?: string, publishedAtGte?: string, publishedAtLt?: string, publishedAtLte?: string, search?: string, summaryContains?: string, summaryContainsAll?: string, summaryContainsOne?: string, titleContains?: string, titleContainsAll?: string, titleContainsOne?: string, updatedAtGt?: string, updatedAtGte?: string, updatedAtLt?: string, updatedAtLte?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (newsSite !== undefined && newsSite !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>newsSite, 'news_site');
        }
        if (offset !== undefined && offset !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>offset, 'offset');
        }
        if (ordering !== undefined && ordering !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ordering, 'ordering');
        }
        if (publishedAtGt !== undefined && publishedAtGt !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>publishedAtGt, 'published_at_gt');
        }
        if (publishedAtGte !== undefined && publishedAtGte !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>publishedAtGte, 'published_at_gte');
        }
        if (publishedAtLt !== undefined && publishedAtLt !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>publishedAtLt, 'published_at_lt');
        }
        if (publishedAtLte !== undefined && publishedAtLte !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>publishedAtLte, 'published_at_lte');
        }
        if (search !== undefined && search !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>search, 'search');
        }
        if (summaryContains !== undefined && summaryContains !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>summaryContains, 'summary_contains');
        }
        if (summaryContainsAll !== undefined && summaryContainsAll !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>summaryContainsAll, 'summary_contains_all');
        }
        if (summaryContainsOne !== undefined && summaryContainsOne !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>summaryContainsOne, 'summary_contains_one');
        }
        if (titleContains !== undefined && titleContains !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>titleContains, 'title_contains');
        }
        if (titleContainsAll !== undefined && titleContainsAll !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>titleContainsAll, 'title_contains_all');
        }
        if (titleContainsOne !== undefined && titleContainsOne !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>titleContainsOne, 'title_contains_one');
        }
        if (updatedAtGt !== undefined && updatedAtGt !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>updatedAtGt, 'updated_at_gt');
        }
        if (updatedAtGte !== undefined && updatedAtGte !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>updatedAtGte, 'updated_at_gte');
        }
        if (updatedAtLt !== undefined && updatedAtLt !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>updatedAtLt, 'updated_at_lt');
        }
        if (updatedAtLte !== undefined && updatedAtLte !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>updatedAtLte, 'updated_at_lte');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v4/reports/`;
        return this.httpClient.request<PaginatedReportList>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id A unique integer value identifying this report.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsRetrieve(id: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Report>;
    public reportsRetrieve(id: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Report>>;
    public reportsRetrieve(id: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Report>>;
    public reportsRetrieve(id: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling reportsRetrieve.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v4/reports/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: undefined})}/`;
        return this.httpClient.request<Report>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
