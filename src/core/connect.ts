import type * as React from "react";

/** ---------- 공통 유틸 ---------- */
export type AnyRecord = Record<string, unknown>;

/** ---------- connect 결과(슬롯 props) ---------- */
/**
 * connect()가 반환하는 API.
 * 예: { rootProps, controlProps, labelProps } 같은 slot props 묶음
 */
export type ConnectApi<TSlots extends AnyRecord = AnyRecord> = Readonly<TSlots>;

/** ---------- send 타입(권장: 이벤트 객체) ---------- */
export type EventLike = { type: string; payload?: unknown };

/**
 * send(event) 형태를 기본으로 권장한다.
 * - 이벤트 유니온으로 강타입 가능
 * - payload를 이벤트별로 분리 가능
 */
export type Send<E extends EventLike = EventLike> = (event: E) => void;

/** ---------- connect 파라미터 ---------- */
export interface ConnectParams<
  State extends object = AnyRecord,
  Context extends object = AnyRecord,
  E extends EventLike = EventLike,
> {
  state: Readonly<State>;
  send: Send<E>;
  ctx: Readonly<Context>;
}
