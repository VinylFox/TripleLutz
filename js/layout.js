Ext.onReady(function(){
    new Ext.Viewport({
		items: [{
			region: 'north',
			height: 100,
			html: 'Triple Lutz Judging System'
		},{
			region: 'center',
			layout: 'card',
			activeItem: 0,
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