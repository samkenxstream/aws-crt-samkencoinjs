/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0.
 */

/**
 * Module for AWS Authentication logic - signing http requests, events, chunks, etc...
 *
 * @packageDocumentation
 * @module auth
 * @preferred
 */

 import { AwsSigningConfigBase } from '../common/auth';



export interface BrowserCredentialProvider
 {
    /** Credentials provider to fetch signing credentials with */
    provider: any;

    /** callback for refresh credential when session expired, returns AWSCredentials
    * @param provider. The callback will pass the provider as a parameter
    */
    updateCredential: Function;
 }



/**
 * Standard AWS Credentials
 *
 */
export interface AWSCredentials {
    /** Optional region */
    aws_region?: string,
    /** AWS access id */
    aws_access_id: string,
    /** AWS secret access key */
    aws_secret_key: string,
    /** Session token for session credentials */
    aws_sts_token?: string,
    /** credential provider  */
    aws_credential_provider?: BrowserCredentialProvider
}

export interface AwsSigningConfig extends AwsSigningConfigBase {
  /** Sources the AWS Credentials used to sign the websocket connection handshake */
  provider : AWSCredentials;
}
