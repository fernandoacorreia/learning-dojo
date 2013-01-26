define(["dojo/store/Memory", "dgrid/OnDemandGrid"], function(Memory, OnDemandGrid){
    var createTaskStore = function() {
        var tasks = [
            {id:"a921b5e2-4937-46fa-bcd3-695f67e00028", description:"Task One", status:"pending"},
            {id:"b3ed9491-1eb4-4f54-b9e8-e69bf892399e", description:"Task Two", status:"pending"},
            {id:"4a8c3707-0649-42f6-ba11-53976485320f", description:"Task Three", status:"pending"},
            {id:"21983be2-0c8c-490b-a7bb-48354af2afbf", description:"Task Four", status:"pending"}
        ];
        var taskStore = new Memory({data:tasks, idProperty: "id"});
        return taskStore;
    }
    
	return {
		initialize: function(){
            var taskStore = createTaskStore();            
            var grid = new OnDemandGrid({
                store: taskStore,
                columns: [{
                    field: "description",
                    label: "Description"
                }]
            }, "tasks-grid");
		}
	};
});
