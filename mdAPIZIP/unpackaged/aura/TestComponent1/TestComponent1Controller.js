({
	doInit : function(component, event, helper) {
		var action = component.get('c.getAccounts');
        action.setCallback(this, function(response){
            var res = response.getReturnValue();
            console.log(res);
            component.set('v.Account', res);
        });
        $A.enqueueAction(action);
	},
    getAccount: function(component, event, helper){
        var action = component.get('c.getAccounts1');
        action.setCallback(this, function(response){
            var res = response.getReturnValue();
            console.log(res);
            component.set('v.Account', res);
        });
        $A.enqueueAction(action);
    }
})