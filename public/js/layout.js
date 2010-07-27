Ext.onReady(function(){
    new Ext.Viewport({
		items: [{
			region: 'north',
			height: 100,
			html: 'Triple Lutz Judging System'
		},{
			region: 'center',
			xtype: 'tabpanel',
			activeTab: 0,
			items: [{
				xtype: 'newevent'
			},{
				xtype: 'eventready'
			},{
				xtype: 'listing',
				config: 'entries'
			}]
		}]
	})
});