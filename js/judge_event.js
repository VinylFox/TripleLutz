App.listing = Ext.extend(Ext.grid.EditorGridPanel, {
	initComponent: function(){
		Ext.apply(this, {
            tbar: [{
                text: 'Reload',
                handler: function(){
                    this.getStore().reload();
                },
                scope: this
            }],
			store: App.settings[this.config].store || {
				xtype: App.settings.dataFormat+'store',
				url: this.dataUrl || App.settings[this.config].dataUrl,
				fields: App.settings[this.config].listingFields,
				root: this.displayTrack || 'data',
				autoLoad: true
			},
			columns: this.buildColModel(),
			sm: new Ext.grid.RowSelectionModel({singleSelect: true})
		});
		App.listing.superclass.initComponent.call(this);
        this.on('render', function(){
            this.getStore().on('load', function(){
                var task = {
                    run: function(){
                        this.getStore().reload();
                    },
                    interval: 10000,
                    scope: this
                };
                Ext.TaskMgr.start(task);
            },this,{single:true});
        },this);
	},
	buildColModel: function(){
		var cm = [];
		Ext.each(App.settings[this.config].listingHeadings, function(h, i){
			cm.push({
				header: h,
				dataIndex: App.settings[this.config].listingFields[i],
				editor: {xtype:App.settings[this.config].listingEditors[i]},
				width: App.settings[this.config].listingWidths[i],
				hidden: (this.hideColumn === i),
				editable: App.settings[this.config].listingEditable
			});
		},this);
		return cm;
	}
});
Ext.reg('listing', App.listing);
