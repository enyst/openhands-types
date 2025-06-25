"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusUpdate = exports.isMcpObservation = exports.isRejectObservation = exports.isSystemMessage = exports.isFinishAction = exports.isCommandObservation = exports.isAgentStateChangeObservation = exports.isCommandAction = exports.isErrorObservation = exports.isAssistantMessage = exports.isUserMessage = exports.isOpenHandsObservation = exports.isOpenHandsAction = void 0;
const isOpenHandsAction = (event) => "action" in event;
exports.isOpenHandsAction = isOpenHandsAction;
const isOpenHandsObservation = (event) => "observation" in event;
exports.isOpenHandsObservation = isOpenHandsObservation;
const isUserMessage = (event) => (0, exports.isOpenHandsAction)(event) &&
    event.source === "user" &&
    event.action === "message";
exports.isUserMessage = isUserMessage;
const isAssistantMessage = (event) => (0, exports.isOpenHandsAction)(event) &&
    event.source === "agent" &&
    (event.action === "message" || event.action === "finish");
exports.isAssistantMessage = isAssistantMessage;
const isErrorObservation = (event) => (0, exports.isOpenHandsObservation)(event) && event.observation === "error";
exports.isErrorObservation = isErrorObservation;
const isCommandAction = (event) => (0, exports.isOpenHandsAction)(event) && event.action === "run";
exports.isCommandAction = isCommandAction;
const isAgentStateChangeObservation = (event) => (0, exports.isOpenHandsObservation)(event) && event.observation === "agent_state_changed";
exports.isAgentStateChangeObservation = isAgentStateChangeObservation;
const isCommandObservation = (event) => (0, exports.isOpenHandsObservation)(event) && event.observation === "run";
exports.isCommandObservation = isCommandObservation;
const isFinishAction = (event) => (0, exports.isOpenHandsAction)(event) && event.action === "finish";
exports.isFinishAction = isFinishAction;
const isSystemMessage = (event) => (0, exports.isOpenHandsAction)(event) && event.action === "system";
exports.isSystemMessage = isSystemMessage;
const isRejectObservation = (event) => (0, exports.isOpenHandsObservation)(event) && event.observation === "user_rejected";
exports.isRejectObservation = isRejectObservation;
const isMcpObservation = (event) => (0, exports.isOpenHandsObservation)(event) && event.observation === "mcp";
exports.isMcpObservation = isMcpObservation;
const isStatusUpdate = (event) => "status_update" in event && "type" in event && "id" in event;
exports.isStatusUpdate = isStatusUpdate;
