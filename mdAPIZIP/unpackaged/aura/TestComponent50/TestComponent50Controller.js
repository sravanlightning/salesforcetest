({
	onSubmit : function(component, event, helper) {
        console.log('test');
		var action = component.get('c.getAccount');
        action.setCallback(this, function(response){
            var res = response.getReturnValue();
            console.log(res);
            component.set('v.account', res);
        });
        $A.enqueueAction(action);
	}
})