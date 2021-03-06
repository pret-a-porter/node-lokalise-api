"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const base_collection_1 = require("./base_collection");
const task_1 = require("../models/task");
let Tasks = /** @class */ (() => {
    class Tasks extends base_collection_1.BaseCollection {
        create(body, params = {}) {
            return this.createPromise("POST", params, this.populateObjectFromJsonRoot, this.handleReject, body);
        }
        update(id, body, params = {}) {
            params["id"] = id;
            return this.createPromise("PUT", params, this.populateObjectFromJsonRoot, this.handleReject, body);
        }
    }
    Tasks.rootElementName = "tasks";
    Tasks.rootElementNameSingular = "task";
    Tasks.prefixURI = "projects/{!:project_id}/tasks/{:id}";
    Tasks.elementClass = task_1.Task;
    return Tasks;
})();
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.js.map