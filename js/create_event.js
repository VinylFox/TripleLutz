App.newevent = Ext.extend(Ext.form.FormPanel, {
	initComponent: function(){
		Ext.apply(this, {
			items: [{
				xtype: 'textfield',
				fieldLabel: 'Github Login'
			},{
				xtype: 'textfield',
				fieldLabel: 'Github Repo'
			},{
				xtype: 'timefield',
				fieldLabel: 'Event Time Limit'
			}],
			buttons: [{
				text: 'Create'
			}]
		});
		App.newevent.superclass.initComponent.call(this);
	}
});
Ext.reg('newevent', App.newevent);

App.eventready = Ext.extend(Ext.Panel, {
	initComponent: function(){
		Ext.apply(this, {
			html: 'When your ready to start, push the base code to your repo.'
		});
		App.eventready.superclass.initComponent.call(this);
	}
});
Ext.reg('eventready', App.eventready);