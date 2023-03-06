import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Description {
  'height' : number,
  'colorspace' : number,
  'channels' : number,
  'width' : number,
}
export interface PerceptualHash { 'theHash' : Uint8Array }
export type Result = { 'ok' : PerceptualHash } |
  { 'err' : null };
export type Result_1 = { 'ok' : SharedQOI } |
  { 'err' : null };
export type Result_2 = { 'ok' : SharedBitmap } |
  { 'err' : null };
export interface SharedBitmap { 'data' : Uint8Array, 'desc' : Description }
export interface SharedQOI { 'data' : Uint8Array, 'desc' : Description }
export interface _SERVICE {
  'decodeQOI' : ActorMethod<[SharedQOI], Result_2>,
  'encodeBitmap' : ActorMethod<[SharedBitmap], Result_1>,
  'getPerceptualHash' : ActorMethod<[SharedBitmap], Result>,
}
