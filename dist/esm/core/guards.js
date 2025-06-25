export const isOpenHandsAction = (event) => "action" in event;
export const isOpenHandsObservation = (event) => "observation" in event;
export const isUserMessage = (event) => isOpenHandsAction(event) &&
    event.source === "user" &&
    event.action === "message";
export const isAssistantMessage = (event) => isOpenHandsAction(event) &&
    event.source === "agent" &&
    (event.action === "message" || event.action === "finish");
export const isErrorObservation = (event) => isOpenHandsObservation(event) && event.observation === "error";
export const isCommandAction = (event) => isOpenHandsAction(event) && event.action === "run";
export const isAgentStateChangeObservation = (event) => isOpenHandsObservation(event) && event.observation === "agent_state_changed";
export const isCommandObservation = (event) => isOpenHandsObservation(event) && event.observation === "run";
export const isFinishAction = (event) => isOpenHandsAction(event) && event.action === "finish";
export const isSystemMessage = (event) => isOpenHandsAction(event) && event.action === "system";
export const isRejectObservation = (event) => isOpenHandsObservation(event) && event.observation === "user_rejected";
export const isMcpObservation = (event) => isOpenHandsObservation(event) && event.observation === "mcp";
export const isStatusUpdate = (event) => "status_update" in event && "type" in event && "id" in event;
