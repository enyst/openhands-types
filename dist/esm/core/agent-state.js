export var AgentState;
(function (AgentState) {
    AgentState["INIT"] = "INIT";
    AgentState["RUNNING"] = "RUNNING";
    AgentState["AWAITING_USER_INPUT"] = "AWAITING_USER_INPUT";
    AgentState["PAUSED"] = "PAUSED";
    AgentState["LOADING"] = "LOADING";
    AgentState["STOPPED"] = "STOPPED";
    AgentState["FINISHED"] = "FINISHED";
    AgentState["REJECTED"] = "REJECTED";
    AgentState["ERROR"] = "ERROR";
    AgentState["AWAITING_USER_CONFIRMATION"] = "AWAITING_USER_CONFIRMATION";
    AgentState["USER_CONFIRMED"] = "USER_CONFIRMED";
    AgentState["USER_REJECTED"] = "USER_REJECTED";
    AgentState["RATE_LIMITED"] = "RATE_LIMITED";
})(AgentState || (AgentState = {}));
